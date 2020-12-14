# esbuild-loader-webpack4-type-issue

https://github.com/privatenumber/esbuild-loader/pull/73#issuecomment-743398541

## Reproduce the issue

1. yarn
1. yarn typecheck

### Output

```
yarn typecheck
yarn run v1.22.5
$ tsc --noEmit
node_modules/esbuild-loader/dist/interfaces.d.ts:2:46 - error TS7016: Could not find a declaration file for module 'webpack'. '/Users/user/esbuild-loader-webpack4-type-issue/node_modules/webpack/lib/webpack.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/webpack` if it exists or add a new declaration (.d.ts) file containing `declare module 'webpack';`

2 import { Compiler as Webpack4Compiler } from 'webpack';
                                               ~~~~~~~~~

node_modules/esbuild-loader/dist/loader.d.ts:1:27 - error TS7016: Could not find a declaration file for module 'webpack'. '/Users/user/esbuild-loader-webpack4-type-issue/node_modules/webpack/lib/webpack.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/webpack` if it exists or add a new declaration (.d.ts) file containing `declare module 'webpack';`

1 import webpack4 = require('webpack');
                            ~~~~~~~~~

node_modules/esbuild-loader/dist/minify-plugin.d.ts:2:27 - error TS7016: Could not find a declaration file for module 'webpack'. '/Users/user/esbuild-loader-webpack4-type-issue/node_modules/webpack/lib/webpack.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/webpack` if it exists or add a new declaration (.d.ts) file containing `declare module 'webpack';`

2 import * as webpack4 from 'webpack';
                            ~~~~~~~~~

node_modules/esbuild-loader/dist/minify-plugin.d.ts:3:27 - error TS2307: Cannot find module 'webpack5' or its corresponding type declarations.

3 import * as webpack5 from 'webpack5';
                            ~~~~~~~~~~


Found 4 errors.

error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
