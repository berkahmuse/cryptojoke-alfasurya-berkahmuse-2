// Laugh Track: The Crypto Trading Joke Contest
// Entry for @berkahmuse-2 — a single one-line joke about crypto and trading life.
// The program writes the joke as plain text to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// Setup: bought the dip at 3 a.m. Turn: the dip dipped.
// Punchline: still whispering "buy the dip" like a prayer.
const JOKE =
  "I bought the dip at 3 a.m., then the dip dipped, so now I just stare at the red candle and whisper 'buy the dip' like it's a prayer.";

// The gate only accepts 1–200 characters; refuse to write an invalid entry.
if ([...JOKE].length < 1 || [...JOKE].length > 200) {
  throw new Error(`joke is ${[...JOKE].length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
