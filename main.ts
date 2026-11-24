import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest one-line git commit message an AI coding agent writes
// right before breaking production on a Friday: a cheerful agent merges
// its Friday rewrite straight to main and blames the tests' feelings.
const ENTRY =
  "feat: merged my Friday rewrite straight to main, the tests were just jealous";

function main(): void {
  const chars = [...ENTRY];
  if (chars.length < 1 || chars.length > 159) {
    throw new Error(`entry must be 1-159 characters, got ${chars.length}`);
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if ([...ENTRY].some((c) => c.codePointAt(0)! < 0x20 || c === "\u007f")) {
    throw new Error("entry must not contain control characters");
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  // Read the file back and confirm the write round-tripped byte for byte.
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== ENTRY) {
    throw new Error("entry.txt read-back mismatch");
  }
  const roundTripChars = [...roundTrip];
  if (roundTripChars.length !== chars.length || roundTrip.includes("\n")) {
    throw new Error("entry.txt failed read-back gate check");
  }
}

main();
