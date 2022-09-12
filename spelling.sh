#!/usr/bin/env bash
npm install -g cspell
git fetch origin master:master
git diff --name-only --diff-filter=AM master $HEAD | grep '\.mdx$' | xargs --no-run-if-empty -L1 npx cspell --show-suggestions -c ./spelling-config.json