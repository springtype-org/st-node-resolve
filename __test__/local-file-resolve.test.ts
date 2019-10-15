import { resolve } from "../src";

// excution directory is: ../ (!) so __test__ is prefixed
describe("Resolves local file imports", () => {
	
	it("Resolves a local TypeScript file in same directory, with file extension", async() => {
		const fileToImport = await resolve('./local-import.ts', './__test__/fixture/submodule');
		expect(fileToImport).toEqual(`./__test__/fixture/submodule/local-import.ts`);
	});

	it("Resolves a local TypeScript file in same directory", async() => {
		const fileToImport = await resolve('./local-import', './__test__/fixture/submodule');
		expect(fileToImport).toEqual(`./__test__/fixture/submodule/local-import.ts`);
	});

	it("Resolves a local JavaScript file in same directory, with file extension", async() => {
		const fileToImport = await resolve('./local-js-import.js', './__test__/fixture/submodule');
		expect(fileToImport).toEqual(`./__test__/fixture/submodule/local-js-import.js`);
	});

	it("Resolves a local JavaScript file in same directory", async() => {
		const fileToImport = await resolve('./local-js-import', './__test__/fixture/submodule');
		expect(fileToImport).toEqual(`./__test__/fixture/submodule/local-js-import.js`);
	});

	it("Resolves a local JavaScript file in relative (parent) directory", async() => {
		const fileToImport = await resolve('../an-import.ts', './__test__/fixture/submodule');
		expect(fileToImport).toEqual(`./__test__/fixture/an-import.ts`);
	});

	it("Resolves a local JavaScript file in relative (parent) directory", async() => {
		const fileToImport = await resolve('../an-import', './__test__/fixture/submodule');
		expect(fileToImport).toEqual(`./__test__/fixture/an-import.ts`);
	});

	it("Resolves a local package.json file in relative (parent) directory", async() => {
		const fileToImport = await resolve('../package.json', './__test__/fixture/submodule');
		expect(fileToImport).toEqual(`./__test__/fixture/package.json`);
	});

	it("Resolves a local package.json file in the same directory", async() => {
		const fileToImport = await resolve('./package.json', './__test__/fixture/submodule');
		expect(fileToImport).toEqual(`./__test__/fixture/submodule/package.json`);
	});
});
