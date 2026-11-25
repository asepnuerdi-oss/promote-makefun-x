# Promote make.fun's make-your-own-bounty post on X

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/asepnuerdi-oss/promote-makefun-x/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/asepnuerdi-oss/promote-makefun-x/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for the make.fun bounty **"Promote make.fun's make-your-own-bounty post on X"** ($250 USDC, top 50 share it, deadline Friday 27 November 2026 01:35 WIB).

The post itself is the entry: one post of our own on X from the public account **@origimi28** that quotes make.fun's post https://x.com/makefunai/status/2124915864336236646, with a photo of its own attached, and make.fun / @makefunai plus our play code `makefun-pennant-robin-grotto` in its text.

Places go by the post's score, the highest first:

    score = replies + reposts + quotes

Views and likes move nothing. `POST.json` at the root names our post's address; `main.ts` (Node 22+, standard library only) copies `POST.json` to `/output/POST.json`, which is all the program has to do.

## Run

```bash
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
