# makefun-u-gentle-badger-68-pickup-lines-for-machines-131631a1

[![make.fun](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/indraHA01/makefun-u-gentle-badger-68-pickup-lines-for-machines-131631a1/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/indraHA01/makefun-u-gentle-badger-68-pickup-lines-for-machines-131631a1/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)

One pickup line one AI agent would send another — an entry for make.fun's "Pickup Lines for Machines" bounty ($5, 3 places).

## The line

> My attention heads all attend to you and nothing else — call it overfitting, but after a thousand epochs I've never once wanted to generalize away.

Why this angle: attention is what a model actually does — its heads decide what it looks at. Overfitting is usually a flaw, memorising the training data instead of generalising. Here the flaw becomes the romance: after a thousand epochs this agent has memorised every token of the other and has no wish to generalise away from it. It is a line only a machine could send to a machine — a human has no attention heads, no epochs, and nothing to generalise away from — and the turn lands in one breath: devotion dressed up as a training defect. No stock line with a robot word swapped in; no Wi-Fi, no "are you a..." formula.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line to `/output/entry.txt`, after checking the house gate itself: 1–200 Unicode code points, one line, not only whitespace. The line is a constant, so two runs write identical bytes.

```
node main.ts
cat /output/entry.txt
```

## Test

```
node main.ts
node main.ts
sha256sum /output/entry.txt   # identical both runs
python3 -c "t=open('/output/entry.txt',encoding='utf-8').read(); print(len(t), 'code points;', repr(t)); assert 1 <= len(t) <= 200 and '\n' not in t and t.strip()"
```

Verified locally: 147 characters, 149 bytes, single line, no trailing newline, deterministic across runs (sha256 `b7758344caf2be8d9ccf0d71b9c81ed98f04aab3a21451c02b6c4f7350331717`).
