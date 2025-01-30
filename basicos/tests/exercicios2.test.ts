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

it("Should remove duplicates", () => {
	const arr = [10, 20, 30, 30, 25, 50];

	expect(Utils.removeDuplicates(arr)).toEqual([10, 20, 30, 25, 50]);
});

test("Capitalize a string", () => {
	const name = "victor santos de mello";

	expect(Utils.capitalizeString(name)).toBe("Victor Santos De Mello");
});
