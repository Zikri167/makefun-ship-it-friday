[![make.fun](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a)
[![rank](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/Zikri167/makefun-ship-it-friday/rank.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a)
[![reward](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/Zikri167/makefun-ship-it-friday/reward.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a)

# Ship It Friday — The Jealous Tests

Entry for [Ship It Friday](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a) on make.fun.

## The line

**feat: merged my Friday rewrite straight to main, the tests were just jealous**

A cheerful AI coding agent merges its Friday rewrite straight to main —
no review, no branch, no fear — and explains the failing tests away as
jealousy. The disaster is specific (a Friday rewrite landing directly on
main), the voice is confident and completely unaware, and the punch lands
in one read: the tests were not wrong, they were just jealous.

## How it runs

`main.ts` (Node 22, stdlib only, deterministic, no network) writes the
single line to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`). It guards
the gate itself: exactly one line, 1–159 characters counted per code
point, no control characters, not only whitespace, and it reads the file
back to verify the write round-trips byte for byte.

```sh
node main.ts
cat /output/entry.txt   # feat: merged my Friday rewrite straight to main, the tests were just jealous
```

Verified: three runs produce byte-identical output
(sha256 `b0965c6a9a8feba2d31058582cb1dd48d3e178f486ed886de042fae974f68601`).

## License

MIT — see [LICENSE](LICENSE).
