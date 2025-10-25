import fs from 'node:fs';
import path from 'node:path';

const IGNORE = new Set(['.git','node_modules']);

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (!IGNORE.has(e.name)) walk(p);
    } else if (e.isFile() && p.toLowerCase().endsWith('.md')) {
      fix(p);
    }
  }
}

function fix(file) {
  let inFence = false, h1Seen = false;
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/).map((line) => {
    if (/^```/.test(line)) inFence = !inFence;
    if (!inFence && /^# /.test(line)) {
      if (h1Seen) line = line.replace(/^# /, '## ');
      else h1Seen = true;
    }
    return line.replace(/\s+$/, '');
  });

  let out = lines.join('\n');
  // Blank line before/after headings
  out = out.replace(/(?m)(?<!\n)^(#{1,6} )/g, '\n$1');
  out = out.replace(/(?m)^(#{1,6} .+)$/g, '$1\n');
  // Blank line around lists
  out = out.replace(/(?m)(?<!\n)^(?:[-*+] |\d+\. )/g, '\n$&');
  out = out.replace(/(?m)(^[-*+] .+(?:\n[-*+] .+)*)/g, '$1\n');
  // Naked fences -> text
  out = out.replace(/(?m)^```$/g, '```text');

  fs.writeFileSync(file, out, 'utf8');
}

walk('content');
walk('templates');
walk('.');
console.log("Fix complete.");
