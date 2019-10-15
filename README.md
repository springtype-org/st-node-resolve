# st-node-resolve

> Resolves dependencies in JavaScript/TypeScript projects. Useful for bundlers and compilers. Based on `enhanced-resolve`.

st-node-resolve detects which module file is the entry file to resolve to for any type of `require(...)`
`import(...)` and `import ... from "..."` imports (basically what Node.js does internally).

It handles `node_modules` file-system hierarchy, relative imports, non-code file imports, deep imports and
organization module imports well.

## Usage

    import { resolve } from "@springtype/st-node-resolve";

    const moduleFile = await resolve(
        '@webcomponents/custom-elements/src/native-shim', './__test__/fixture/submodule/some-import.ts'
    );

    // -> ./__test__/fixture/submodule/node_modules/@webcomponents/custom-elements/src/native-shim.js

## Test

To run the tests, enter the directories: `__test__/fixture` and `__test__/fixture/submodule` and run: `yarn` to install the dependencies. These tests are based on jest but are in fact real-world / end-2-end tests.