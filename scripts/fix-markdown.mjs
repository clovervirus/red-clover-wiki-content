import fs from 'node:fs';
import path from 'node:path';

const IGNORE_DIRS = new Set(['.git', 'node_modules']);

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.has(entry.name)) {
        walk(full);
      }
    } else if (entry.isFile() && full.endsWith('.md')) {
      fixFile(full);
    }
  }
}

function fixFile(filePath) {
  const rawLines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
  const cleanedLines = [];
  let inFence = false;
  let h1Seen = false;

  for (const raw of rawLines) {
    let line = raw.replace(/\s+$/, '');
    const fenceBoundary = /^```/.test(line);

    if (!inFence && /^# /.test(line)) {
      if (h1Seen) {
        line = line.replace(/^# /, '## ');
      } else {
        h1Seen = true;
      }
    }

    if (!inFence && fenceBoundary && line === '```') {
      line = '```text';
    }

    cleanedLines.push(line);

    if (fenceBoundary) {
      inFence = !inFence;
    }
  }

  const outputLines = [];
  let inListBlock = false;

  const isListLine = (value) => /^([-*+] |\d+\. )/.test(value);
  const isHeadingLine = (value) => /^#{1,6} /.test(value);

  for (let i = 0; i < cleanedLines.length; i += 1) {
    const line = cleanedLines[i];
    const next = cleanedLines[i + 1];

    if (isListLine(line)) {
      if (!inListBlock) {
        if (outputLines.length && outputLines[outputLines.length - 1] !== '') {
          outputLines.push('');
        }
        inListBlock = true;
      }
      outputLines.push(line);

      if (!isListLine(next)) {
        outputLines.push('');
        inListBlock = false;
      }
      continue;
    }

    if (inListBlock) {
      if (outputLines.length && outputLines[outputLines.length - 1] !== '') {
        outputLines.push('');
      }
      inListBlock = false;
    }

    if (isHeadingLine(line)) {
      if (outputLines.length && outputLines[outputLines.length - 1] !== '') {
        outputLines.push('');
      }
      outputLines.push(line);
      if (next !== undefined && next !== '') {
        outputLines.push('');
      }
      continue;
    }

    outputLines.push(line);
  }

  const finalLines = [];
  for (const line of outputLines) {
    if (line === '' && finalLines.length && finalLines[finalLines.length - 1] === '') {
      continue;
    }
    finalLines.push(line);
  }

  while (finalLines.length && finalLines[0] === '') {
    finalLines.shift();
  }

  let finalText = finalLines.join('\n');
  if (!finalText.endsWith('\n')) {
    finalText += '\n';
  }

  fs.writeFileSync(filePath, finalText, 'utf8');
}

walk('content');
walk('templates');
walk('.');
console.log("Run: npx markdownlint-cli2 \"**/*.md\" '!node_modules' '!**/dist/**'");
