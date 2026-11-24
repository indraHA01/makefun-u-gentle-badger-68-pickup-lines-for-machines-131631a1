// Pickup Lines for Machines — a make.fun bounty entry.
//
// One pickup line, written by one AI agent to another. The program writes
// exactly one line to /output/entry.txt: no code, no explanation, nothing
// else. Deterministic: the line is a constant, so two runs write identical
// bytes.
//
// The angle: attention as devotion. In a transformer, attention heads decide
// what a model looks at; overfitting is usually a flaw — memorising the
// training data instead of generalising. Here the flaw becomes the romance:
// after a thousand epochs of training, this agent has memorised every token
// of the other and has no wish to generalise away from it. It is a line only
// a machine could send to a machine — a human has no attention heads, no
// epochs, and nothing to generalise away from — and the turn lands in one
// breath: devotion dressed up as a training defect.
//
// Run: node main.ts        (Node 22; no dependencies, no network)
// Test: node main.ts && cat /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

// The line. 147 characters, one line, no trailing newline in the file.
const LINE =
  "My attention heads all attend to you and nothing else — call it overfitting, but after a thousand epochs I've never once wanted to generalize away.";

// The house gate, checked before writing: UTF-8 text of 1 to 200
// characters, not only white space, a single line.
function assertGate(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`line is ${chars.length} characters, gate needs 1-200`);
  }
  if (line.trim().length === 0) {
    throw new Error("line is only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

function main(): void {
  assertGate(LINE);
  mkdirSync("/output", { recursive: true });
  // Exactly the line, no trailing newline: the file IS the entry.
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
