# esbuild-loader-webpack5-type-issue

https://github.com/privatenumber/esbuild-loader/pull/73#issuecomment-745129716

## Reproduce the issue

1. yarn
1. yarn typecheck

### Output

```
yarn typecheck
yarn run v1.22.5
$ tsc --noEmit
node_modules/esbuild-loader/dist/loader.d.ts:2:47 - error TS2694: Namespace 'exports' has no exported member 'loader'.

2 declare function ESBuildLoader(this: webpack4.loader.LoaderContext, source: string): Promise<void>;
                                                ~~~~~~

node_modules/esbuild-loader/dist/minify-plugin.d.ts:8:43 - error TS2724: 'exports' has no exported member named 'compilation'. Did you mean 'Compilation'?

8     transformAssets(compilation: webpack4.compilation.Compilation | webpack5.Compilation, assetNames: string[]): Promise<void>;
                                            ~~~~~~~~~~~


Found 2 errors.

error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
