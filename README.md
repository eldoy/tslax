# TSLax

Minimal, non-obtrusive Typescript setup for NodeJS.

Perfect for migrating from Javascript to Typescript:

1. Rename your files from "js" to "ts"
2. Add the tsconfig.json
3. Install the NodeJS types: `npm i @types/node`
4. Done.

- Supports CommonJS (CJS) and Javascript modules (ESM)
- Define Global Types and Local Types
- NodeJS built in types
- Very minimal config
- Extendable
- Includes `nodemon` dev script: `./tasks/dev.sh`
- Includes `esbuild` build script: `./tasks/build.sh`

NOTE: When using CJS, make sure your `module.exports` are wrapped in an object, or TS will complain.

Created by [Tekki](https://tekki.no)
