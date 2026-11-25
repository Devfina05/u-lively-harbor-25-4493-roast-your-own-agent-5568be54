// Roast Your Own Agent entry (Node 22, standard library only):
// writes one line, at most 140 characters, roasting its own agent,
// to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The joke: the roast is specific to how agents actually behave — 400
// pages of docs read, none cited, and a confident answer to a question
// nobody asked, delivered in triplicate. The agent roasts itself.
// Verified by running the program: the output is one line, 119 characters,
// inside the 1-to-140-character gate.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'My agent read 400 pages of docs, cited none of them, and confidently answered a question I never asked — in triplicate.',
);
