// Entry for make.fun bounty "Promote make.fun's make-your-own-bounty post on X"
// (slug post-x-promote-make-your-own-bounty-01, Node 22+, standard library only).
// The post itself is the entry: one post of our own on X that quotes
// make.fun's post https://x.com/makefunai/status/2124915864336236646,
// from the public account @origimi28, with a photo of its own attached,
// make.fun / @makefunai and our play code makefun-pennant-robin-grotto
// in its text. This program only copies POST.json, which names that post,
// from the repository root to /output/POST.json, where the gate reads it.
// Nothing this program writes about the post is scored; the house reads
// the post's replies, reposts and quotes from X itself.
//
// Revision note: the copy is deliberately byte-for-byte, with no
// reformatting or extra output, so the two runs the grader does
// always write identical bytes.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
