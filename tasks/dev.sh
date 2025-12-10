#!/usr/bin/env bash

nodemon --watch . --ext ts --exec "node --no-warnings --experimental-strip-types main.ts"