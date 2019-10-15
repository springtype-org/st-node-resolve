import { resolve } from "../src";

// excution directory is: ../ (!) so __test__ is prefixed
describe("Resolves node_modules", () => {
	
	it("Resolves a node_module module installed in same directory, with custom main file in package.json", async() => {
		const fileToImport = await resolve('classlist.js', './__test__/fixture/submodule');
		expect(fileToImport).toEqual(`./__test__/fixture/submodule/node_modules/classlist.js/classList.js`);
	});

	it("Resolves a node_module module installed in a parent directory with deep import", async() => {
		const fileToImport = await resolve('core-js/es/array', './__test__/fixture/submodule');
		expect(fileToImport).toEqual(`./__test__/fixture/node_modules/core-js/es/array/index.js`);
	});

	it("Resolves a node_module module installed in a same directory, with custom main file in package.json", async() => {
		const fileToImport = await resolve('construct-style-sheets-polyfill', './__test__/fixture/submodule');
		expect(fileToImport).toEqual(`./__test__/fixture/submodule/node_modules/construct-style-sheets-polyfill/dist/adoptedStyleSheets.js`);
	});

	it("Resolves a node_module module installed in a same directory, with organization", async() => {
		const fileToImport = await resolve('@webcomponents/custom-elements', './__test__/fixture/submodule');
		expect(fileToImport).toEqual(`./__test__/fixture/submodule/node_modules/@webcomponents/custom-elements/custom-elements.min.js`);
	});

	it("Resolves a node_module module installed in a same directory, with organization and deep import", async() => {
		const fileToImport = await resolve('@webcomponents/custom-elements/src/native-shim', './__test__/fixture/submodule');
		expect(fileToImport).toEqual(`./__test__/fixture/submodule/node_modules/@webcomponents/custom-elements/src/native-shim.js`);
	});
});
