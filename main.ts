// Two Days of Quiet Dread — make.fun program/v1 entry.
// Writes one single-line code review comment to /output/entry.txt:
// an approval carrying quiet existential dread.
// The line is 54 characters (56 bytes UTF-8), inside the 1-140 gate,
// flat and understated: the dread is the years, not the code.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "LGTM — the code is fine, it's the years that worry me.";

if (ENTRY.length === 0 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error("entry must be 1-140 non-whitespace characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
