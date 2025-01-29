import { Utils } from "../src/Utils";

//Testing diffArray, removeDuplicates and capitalizeString methods in Utils class

it("Should return a diff array which elements of the first one aren't contained to the second one", () => {
	const arr1 = ["banana", "apple", 30, 10, 200];
	const arr2 = [10, 200, "lime", "orange", 50];

	expect(Utils.diffArray(arr1, arr2)).toEqual(["banana", "apple", 30]);
});

it("Should remove duplicates", () => {
	const arr = [10, 20, 30, 30, 25, 50];

	expect(Utils.removeDuplicates(arr)).toEqual([10, 20, 30, 25, 50]);
});

test("Capitalize a string", () => {
	const name = "victor santos de mello";

	expect(Utils.capitalizeString(name)).toBe("Victor Santos De Mello");
});
