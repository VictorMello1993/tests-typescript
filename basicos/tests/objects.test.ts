test("Check if both objects are equal", () => {
	const obj = { name: "Victor", age: 31 };
	expect(obj).toEqual({ name: "Victor", age: 31 });
});

test("Check if both objects are equal regardless of properties being undefined", () => {
	const obj = { name: "Victor", age: undefined };
	expect(obj).toEqual({ name: "Victor" });
});

test("Check if both objects are strictly equal", () => {
	const obj = { name: "Victor", age: undefined };
	expect(obj).toStrictEqual({ name: "Victor", age: undefined });
});
