test("Check if a string is 'abc'", () => {
	expect("abc").toBe("abc");
	expect("abc").toMatch("abc");
});

test("Check if a string is not 'abc'", () => {
	expect("ab").not.toBe("abc");
	expect("ab").not.toMatch("abc");
});

test("Check if a string starts with 'abc'", () => {
	expect("abc54645456asdas").toMatch(/^abc/);
});

test("Check if a string doesn´t start with 'abc'", () => {
	expect("abvv54645456asdas").not.toMatch(/^abc/);
});

test("Check if a string contains a substring", () => {
	expect("abvv54645456asdas").toContain("545");
});

test("Check if a string doesn´t contain a substring", () => {
	expect("abvv54645456asdas").not.toContain("452");
});
