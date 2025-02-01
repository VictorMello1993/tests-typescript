test("Check if both objects are equal", () => {
	const obj = { name: "Victor", age: 31 };
	expect(obj).toEqual({ name: "Victor", age: 31 });
});

test("Check if both objects aren't equal", () => {
	const obj = { name: "Victor", age: 35 };
	expect(obj).not.toEqual({ name: "Victor", age: 31 });
});

test("Check if both objects are equal regardless of properties being undefined", () => {
	const obj = { name: "Victor", age: undefined };
	expect(obj).toEqual({ name: "Victor" });
});

test("Check if both objects aren't equal regardless of properties being undefined", () => {
	const obj = { name: "Victor", age: undefined };
	expect(obj).not.toEqual({ name: "abc" });
});

test("Check if both objects are strictly equal", () => {
	const obj = { name: "Victor", age: undefined };
	expect(obj).toStrictEqual({ name: "Victor", age: undefined });
});

test("Check if both objects aren't strictly equal", () => {
	const obj = { name: "Victor", age: undefined };
	expect(obj).not.toStrictEqual({ name: "Victor" });
});

test("Check if a object has a property", () => {
	const obj = { name: "Victor", age: 31, city: "Rio de Janeiro" };
	expect(obj).toHaveProperty("name");
	expect(obj).toHaveProperty("age");
	expect(obj).toHaveProperty("city");
});

test("Check if a object doesn't have a property", () => {
	const obj = { name: "Victor", age: 31, city: "Rio de Janeiro" };
	expect(obj).not.toHaveProperty("zipcode");
});

test("Check if a object has a subset of properties", () => {
	const obj = { name: "Victor", age: 31, city: "Rio de Janeiro" };
	expect(obj).toMatchObject({ name: "Victor", age: 31 });
});

test("Check if a object doesn't have a subset of properties", () => {
	const obj = { name: "Victor", age: 31, city: "Rio de Janeiro" };
	expect(obj).not.toMatchObject({ name: "Victor", age: 31, zipcode: "9999999" });
});

test("Check if a object an instance of a class", () => {
	class person {
		constructor(
			public name: string,
			age: number,
		) {}
	}
	const p = new person("Victor", 31);

	expect(p).toBeInstanceOf(person);
});
