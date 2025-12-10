#!/usr/bin/env bash

entry="$1"
shift

npx -y esbuild "$entry" \
  --bundle \
  --platform=node \
  --format=cjs \
  --outfile=build.js \
  "$@"
