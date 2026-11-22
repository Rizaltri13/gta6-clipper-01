// gta6-clipper-01 entry program.
//
// The entry itself is the YouTube video named in VIDEO.json; the house
// reads that video through the YouTube Data API and scores its views.
// All this program has to do is hand VIDEO.json to the grader by copying
// it into the output directory, byte for byte.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Deterministic: no clock, no randomness, no network — the same input
// file always produces the same output bytes on every run.
mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
