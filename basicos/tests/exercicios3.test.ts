//Testing findById, invertObject and removeProperty methods in Utils class

import { Utils } from "../src/Utils";

describe("findById function test", () => {
	it("Should find an object with corresponding id", () => {
		const array = [
			{ id: 1, name: "Victor", age: 31 },
			{ id: 2, name: "Thay", age: 30 },
			{ id: 3, name: "Isa", age: 26 },
			{ id: 4, name: "Humberto", age: 32 },
			{ id: 5, name: "Helena", age: 12 },
			{ id: 6, name: "Rafael", age: 46 },
		];

		expect(Utils.findById(array, 4)).toEqual({ id: 4, name: "Humberto", age: 32 });
	});

	it("Should return undefined if no id is provided", () => {
		const array = [
			{ id: 1, name: "Victor", age: 31 },
			{ id: 2, name: "Thay", age: 30 },
			{ id: 3, name: "Isa", age: 26 },
			{ id: 4, name: "Humberto", age: 32 },
			{ id: 5, name: "Helena", age: 12 },
			{ id: 6, name: "Rafael", age: 46 },
		];

		expect(Utils.findById(array, undefined)).toBe(undefined);
	});

	it("Should return undefined if id provided doesn't exist", () => {
		const array = [
			{ id: 1, name: "Victor", age: 31 },
			{ id: 2, name: "Thay", age: 30 },
			{ id: 3, name: "Isa", age: 26 },
			{ id: 4, name: "Humberto", age: 32 },
			{ id: 5, name: "Helena", age: 12 },
			{ id: 6, name: "Rafael", age: 46 },
		];

		expect(Utils.findById(array, 50)).toBe(undefined);
	});

	it("Should return undefined if array is empty", () => {
		expect(Utils.findById([], 50)).toBe(undefined);
		expect(Utils.findById([], undefined)).toBe(undefined);
	});
});

describe("invertObject function test", () => {
	it("Should invert an object which all of their values are from primitive types", () => {
		const person = { id: 1, name: "Victor", age: 31, employeed: true };

		expect(Utils.invertObject(person)).toEqual({ 1: "id", Victor: "name", 31: "age", true: "employeed" });
	});

	it("Should invert an object when there's another key-value pair that is an object and an array", () => {
		const person = {
			id: 1,
			name: "Victor",
			age: 31,
			address: { place: "Rua ABC", city: "Rio de Janeiro", zipcode: "123456-78" },
			email: ["abc@teste.com", "xyz@teste.com"],
		};

		expect(Utils.invertObject(person)).toEqual({
			1: "id",
			Victor: "name",
			31: "age",
			'{"place":"Rua ABC","city":"Rio de Janeiro","zipcode":"123456-78"}': "address",
			'["abc@teste.com","xyz@teste.com"]': "email",
		});
	});

	it("Should return empty, if an object provided is empty", () => {
		expect(Utils.invertObject({})).toEqual({});
	});
});

describe("deletePropery function test", () => {
	it("Should return a new object with deleted property", () => {
		const person = { name: "Victor", age: 31, employeed: true };
		expect(Utils.removeProperty(person, "employeed")).toEqual({ name: "Victor", age: 31 });
	});

	it("Should return the same object with no corresponding property to be removed", () => {
		const person = { name: "Victor", age: 31, employeed: true };
		expect(Utils.removeProperty(person, "email")).toEqual({ name: "Victor", age: 31, employeed: true });
		expect(Utils.removeProperty(person, "")).toEqual({ name: "Victor", age: 31, employeed: true });
	});

	it("Should return empty if object provided is empty", () => {
		expect(Utils.removeProperty({}, "")).toEqual({});
	});
});
