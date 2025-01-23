import { Utils } from "../src/Utils";

describe("Max function test", () => {
	it("Should be returned the highest number", () => {
		expect(Utils.max([-2, -1, -5, 10, 8, 80, 25])).toBe(80);
		expect(Utils.max([-2, -1, -5, -200, -56, -9, -125])).toBe(-1);
		expect(Utils.max([20, 5, 8, 1, 25, 22, 50, 30])).toBe(50);
	});

	it("Should return null if there's no number", () => {
		expect(Utils.max([])).toBeNull();
	});
});

describe("Min function test", () => {
	it("Should be returned the lowest number", () => {
		expect(Utils.min([-2, -1, -5, 10, 8, 80, 25])).toBe(-5);
		expect(Utils.min([-2, -1, -5, -200, -56, -9, -125])).toBe(-200);
		expect(Utils.min([20, 5, 8, 1, 25, 22, 50, 30])).toBe(1);
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

	test('Return the sum of all type of numbers, including float and int', () => {
		expect(Utils.sumArray([-2, -1, -5, 10, 8.2, 3.14, 1.5, -0.5])).toBe(14.34);
	})
});

describe("rangeNumber function test (for int numbers)", () => {
	//Min(Max(5, 0), 10) => Min(5, 10) => 5
	//Min(Max(100, 0), 10) => Min(100, 10) =>10
	//Min(Max(-20, 0), 10) => Min(0, 10) => 0
	const max = 10;
	const min = 0;

	it("Should return the value if it's within the range", () => {
		const value = 5
		expect(Utils.rangeNumber(value, min, max)).toBe(value);
	});

	it("Should return min if the value is less than it", () => {
		const value = -20
		expect(Utils.rangeNumber(value, min, max)).toBe(min);
	});

	it("Should return max the value is greater than it", () => {
		const value = 100
		expect(Utils.rangeNumber(value, min, max)).toBe(max);
	});
});

describe("rangeNumber function test (for float numbers)", () => {
	const max = 10.999;
	const min = -9.5;
	it("Should return the value if it's within the range", () => {
		const value = 5
		expect(Utils.rangeNumber(value, min, max)).toBe(value);
	});

	it("Should return min if the value is less than it", () => {
		const value = -20
		expect(Utils.rangeNumber(value, min, max)).toBe(min);
	});

	it("Should return max the value is greater than it", () => {
		const value = 100
		expect(Utils.rangeNumber(value, min, max)).toBe(max);
	});
});