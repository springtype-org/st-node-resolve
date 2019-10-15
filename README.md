# st-node-resolve

> Resolves dependencies in JavaScript/TypeScript projects. Useful for bundlers and compilers.

st-node-resolve detects which module file is the entry file to resolve to for any type of `require(...)`
`import(...)` and `import ... from "..."` imports (basically what Node.js does internally).

It handles `node_modules` file-system hierarchy, relative imports, non-code file imports, deep imports and
organization module imports well.

## Usage

    import { resolveModule } from "@springtype/st-node-resolve";

    // module ./e2e/submodule/some-import.ts imports core-js/es/array
    // which is the module file to import? Right now we don't know if core-js/es/array is a node module, a file, a folder etc.
    const moduleFile = resolveModule('core-js/es/array', './__e2e__/submodule/some-import.ts');

    // st-node-resolve resolves to a path like:
    // __e2e__/node_modules/core-js/es/array/index.js
    console.log('moduleFile', moduleFile);

## Test

To run the tests, enter the directories: `__test__/fixture` and `__test__/fixture/submodule` and run: `yarn` to install the dependencies. These tests are based on jest but are in fact real-world / end-2-end tests.