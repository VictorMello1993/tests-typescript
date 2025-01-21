import { Utils } from "../src/Utils";

describe("Max function test", () => {
	it("Should be returned the highest number", () => {
		expect(Utils.max([-2, -1, -5, 10, 8, 80, 25])).toBe(80);
	});

	it("Should return null if there's no number", () => {
		expect(Utils.max([])).toBeNull();
	});
});

describe("Min function test", () => {
	it("Should be returned the lowest number", () => {
		expect(Utils.min([-2, -1, -5, 10, 8, 80, 25])).toBe(-5);
	});

	it("Should return null if there's no number", () => {
		expect(Utils.min([])).toBeNull();
	});
});

describe("sumArray function test", () => {
	test("Return the sum of all number array", () => {
		expect(Utils.sumArray([-2, -1, -5, 10, 8, 80, 25])).toBe(115);
	});

	it("Should return 0 if there's no number", () => {
		expect(Utils.sumArray([])).toBe(0);
	});
});

describe("rangeNumber function test", () => {
	//Min(Max(5, 0), 10) => Min(5, 10) => 5
	//Min(Max(100, 0), 10) => Min(100, 10) =>10
	//Min(Max(-20, 0), 10) => Min(0, 10) => 0
	it("Should return the value if it's within the range", () => {
		expect(Utils.rangeNumber(5, 0, 10)).toBe(5);
	});

	it("Should return min value if it's the lowest of the range", () => {
		expect(Utils.rangeNumber(-20, 0, 10)).toBe(0);
	});

	it("Should return max value if it's the highest of the range", () => {
		expect(Utils.rangeNumber(100, 0, 10)).toBe(10);
	});
});
