// One-Line Office Jokes — u-markk-st-one-line-office-jokes-a51f2bcc
// Writes the entry joke to <output>/entry.txt. The grader runs this
// program twice and both runs must write the same bytes, so the joke
// is a fixed string, not generated at random.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The office printer only jams on documents marked urgent \u2014 it\u2019s the only colleague here who actually reads the subject line.";

// The gate only accepts one line of 1 to 199 characters, so refuse
// to write anything that would fail it instead of shipping it.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.includes("\n")) {
  throw new Error(`entry joke is ${JOKE.length} chars or not one line`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
