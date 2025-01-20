import { sum } from "../src/sum";

test("Deverá testa a função soma", () => {
	const result = sum(1, 2);
	expect(result).toBe(3);
});
