import fs from 'node:fs';
import path from 'node:path';

const IGNORE_DIRS = new Set(['.git', 'node_modules']);

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) {
        continue;
      }
      walk(full);
    } else if (entry.isFile() && full.endsWith('.md')) {
      fixFile(full);
    }
  }
}

function fixFile(filePath) {
  let inFence = false;
  let h1Seen = false;
  const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/).map((line) => {
    if (/^```/.test(line)) {
      inFence = !inFence;
    }
    if (!inFence && /^# /.test(line)) {
      if (h1Seen) {
        line = line.replace(/^# /, '## ');
      } else {
        h1Seen = true;
      }
    }
    return line.replace(/\s+$/, '');
  });

  let output = lines.join('\n');
  output = output.replace(/(?m)(?<!\n)^(#{1,6} )/g, '\n$1');
  output = output.replace(/(?m)^(#{1,6} .+)$/g, '$1\n');
  output = output.replace(/(?m)(?<!\n)^(?:[-*+] |\d+\. )/g, '\n$&');
  output = output.replace(/(?m)(^[-*+] .+(?:\n[-*+] .+)*)/g, '$1\n');
  output = output.replace(/(?m)^```$/g, '```text');

  fs.writeFileSync(filePath, output, 'utf8');
}

walk('content');
walk('templates');
walk('.');
console.log("Run: npx markdownlint-cli2 \"**/*.md\" '!node_modules' '!**/dist/**'");
