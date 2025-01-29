test("Check if both array are equal", () => {
	const arr1 = [1, 2, 3];
	const arr2 = ["1", "2", "3"];

	// expect(arr1).toBe(arr2); //ERRO! A função toBe() só retorna verdadeiro para valores do tipo primitivo
	//No caso de arrays e de objetos, a comparação deve ser feita por referência
	//Para isso, recomenda-se o uso do toEqual ou toStrictEqual

	// expect(arr1).toEqual(arr2); /*Não irá passar, pois em arrays tanto utilizando toEqual como toStrictEqual,
	// 															compara valores e estruturas, mas não realiza a conversão implícita de tipos,
	// 															por mais que os valores sejam iguais.
	// 															*/

	expect(arr1).toEqual(arr2.map(Number)); //Vai passar
	expect(arr1).toStrictEqual(arr2.map(Number)); //Vai passar
});

test("Check if both array are strictly equal", () => {
	const arr1 = [1, 2, 3];
	const arr2 = [1, 2, 3];

	expect(arr1).toStrictEqual(arr2);
});

test("Check if both array are not equal", () => {
	const arr1 = [2, 3];
	const arr2 = ["1", "2", "3"];

	expect(arr1).not.toEqual(arr2.map(Number));
	expect(arr1).not.toStrictEqual(arr2.map(Number));
});

test("Check if both array are not strictly equal", () => {
	const arr1 = [1, 2];
	const arr2 = [1, 2, 3];

	expect(arr1).not.toStrictEqual(arr2);
});

test("Check if both array have the same length", () => {
	const arr1 = [1, 2, 3, 4, 5];
	const arr2 = [10, 20, 30, 40, 50];

	expect(arr1.length).toBe(5);
	expect(arr2.length).toBe(5);
	expect(arr1).toHaveLength(5);
	expect(arr2).toHaveLength(5);
});

test("Check if both array haven`t the same length", () => {
	const arr1 = [1, 2, 3, 4];
	const arr2 = [10, 20, 40, 50];

	expect(arr1.length).not.toBe(5);
	expect(arr2.length).not.toBe(5);
	expect(arr1).not.toHaveLength(5);
	expect(arr2).not.toHaveLength(5);
});

test("Check if array contains a specific element inside", () => {
	const arr = ["apple", "banana", "orange", "pinapple"];

	expect(arr).toContain("banana");
	expect(["banana"]).toContainEqual("banana");
});

test("Check if array doesn't contain a specific element inside", () => {
	const arr = ["apple", "banana", "orange", "pinapple"];

	expect(arr).not.toContain("lime");
	expect(["tomato"]).not.toContainEqual("banana");
});

test("Check if array contains a object inside", () => {
	const person = { name: "Victor", age: 31 };
	const arr = ["lime", 1, { name: "Victor", age: 31 }, 10];

	// expect(arr).toContain(person); //Erro! objetos e arrays devem ser comparados por referência!
	expect(arr).toContainEqual(person); //Aqui o teste passa
});

test("Check if array contains another array inside", () => {
	const arr1 = ["apple", "banana", "orange", "pinapple"];
	const arr2 = [10, 100, ["banana"]];

	// expect(arr).toContain(person); //Erro! objetos e arrays devem ser comparados por referência!
	// expect(arr1).toContainEqual(arr2); //Erro! arrays aninhados também devem ser comparados por referência

	const flatenArray2 = arr2.flat();
	expect(flatenArray2).toContain("banana");

	const containsElement = flatenArray2.some((e) => arr1.includes(e.toString()));
	expect(containsElement).toBe(true);
});

test("Check if array contains nested array inside", () => {
	const arr1 = [["apple"], ["banana"], ["orange"], ["pinapple"]];
	const arr2 = [10, 100, ["banana"]];

	const containsNestedArray = arr2.some((e2) => {
		return Array.isArray(e2) && arr1.some((e1) => JSON.stringify(e1) === JSON.stringify(e2));
	});

	expect(containsNestedArray).toBe(true);
});
