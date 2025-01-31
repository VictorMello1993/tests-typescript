import { Utils } from "../src/Utils";

//Testing diffArray, removeDuplicates and capitalizeString methods in Utils class

describe("diffArray function test", () => {
	it("Should return a diff mixed array which elements of the first one aren't contained to the second one", () => {
		const arr1 = ["banana", "apple", 30, 10, 200];
		const arr2 = [10, 200, "lime", "orange", 50];

		expect(Utils.diffArray(arr1, arr2)).toEqual(["banana", "apple", 30]);
	});

	it("Should return a diff int array which elements of the first one aren't contained to the second one", () => {
		const arr1 = [100, 200, 300, 500];
		const arr2 = [100, 300];

		expect(Utils.diffArray(arr1, arr2)).toEqual([200, 500]);
	});

	it("Should return a diff string array which elements of the first one aren't contained to the second one", () => {
		const arr1 = ["banana", "apple", "orange", "tomato"];
		const arr2 = ["banana", "orange", "pinapple"];

		expect(Utils.diffArray(arr1, arr2)).toEqual(["apple", "tomato"]);
	});

	it("Should return empty if the first array is empty and the second is not", () => {
		const arr2 = [100, 300];

		expect(Utils.diffArray([], arr2)).toEqual([]);
	});

	it("Should return the first array if the second array is empty", () => {
		const arr1 = [100, 300];

		expect(Utils.diffArray(arr1, [])).toEqual(arr1);
	});

	it("Should return empty if the both arrays are equal", () => {
		expect(Utils.diffArray([1, 2, 3], [1, 2, 3])).toEqual([]);
	});
});

describe("removeDuplicates function test", () => {
	it("Should remove duplicates from numeric array", () => {
		const arr = [10, 20, 30, 30, 25, 50, -90, -20, -90, 6.99, 1.25, -0.99, 1.25, -0.99];

		expect(Utils.removeDuplicates(arr)).toEqual([10, 20, 30, 25, 50, -90, -20, 6.99, 1.25, -0.99]);
	});

	it("Should remove duplicates from string array", () => {
		const arr = ["banana", "apple", "orange", "apple", "pinapple", "banana"];

		expect(Utils.removeDuplicates(arr)).toEqual(["banana", "apple", "orange", "pinapple"]);
	});

	it("Should remove duplicates from boolean array", () => {
		const arr = [true, false, false, true, false, true, true];

		expect(Utils.removeDuplicates(arr)).toEqual([true, false]);
	});

	it("Should return empty if array is empty", () => {
		expect(Utils.removeDuplicates([])).toEqual([]);
	});
});

describe("capitalizeString function test", () => {
	it("Should capitalize an upper case string", () => {
		const str = "VICTOR SANTOS DE MELLO";
		expect(Utils.capitalizeString(str)).toBe("Victor Santos De Mello");
	});

	it("Should capitalize an lower case string", () => {
		const str = "victor santos de mello";
		expect(Utils.capitalizeString(str)).toBe("Victor Santos De Mello");
	});

	it("Should capitalize an alphanumeric string", () => {
		const str = "0vict0r s4nt0s 1de m3ll0";
		expect(Utils.capitalizeString(str)).toBe("0vict0r S4nt0s 1de M3ll0");
	});

	it("Should not change a numeric string", () => {
		const str = "11 2234984 8946977";
		expect(Utils.capitalizeString(str)).toBe("11 2234984 8946977");
	});

	it("Should return empty if a string is empty", () => {
		expect(Utils.capitalizeString("")).toBe("");
	});

	it("Should not change a special characters string", () => {
		const str = "!##$&#**#))##@";
		expect(Utils.capitalizeString(str)).toBe(str);
	});

	it("Should capitalize string with special characters containing letters", () => {
		const str = "!##$&Basic**#))##@";
		expect(Utils.capitalizeString(str)).toBe("!##$&basic**#))##@");
	});
});
