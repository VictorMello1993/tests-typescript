export class Utils {
	static max(array: number[]): number | null {
		return array.length === 0 ? null : Math.max(...array);
	}

	static min(array: number[]): number | null {
		return array.length === 0 ? null : Math.min(...array);
	}

	static sumArray(array: number[]): number {
		return array.reduce((acc, curr) => acc + curr, 0);
	}

	static rangeNumber(value: number, min: number, max: number): number {
		return Math.min(Math.max(value, min), max);
	}

	static diffArray<T>(array1: T[], array2: T[]): T[] {
		return array1.filter((item) => !array2.includes(item));
	}

	static removeDuplicates<T>(array: T[]): T[] {
		return Array.from(new Set(array));
	}

	static capitalizeString(s: string): string {
		if (!s) return "";
		return s
			.split(" ")
			.map((char) => {
				char = char.toLowerCase();
				const c = char[0];
				return char.replace(c, c.toUpperCase());
			})
			.join(" ");
	}

	static findById(array: any, id: number) {
		return array.find((item: any) => item.id === id);
	}

	static invertObject(objeto: any): any {
		return Object.entries(objeto).reduce(
			(newObject, [key, value]) => {
				if (typeof value === "object") {
					newObject[JSON.stringify(value) as string] = key;
				} else {
					newObject[value as string] = key;
				}
				return newObject;
			},
			{} as Record<string, string>,
		);
	}

	static removeProperty(object: { [chaves: string]: any }, property: string): any {
		const newObject = { ...object };
		delete newObject[property];
		return newObject;
	}

	static calculateCircleArea(radius: number): number {
		if (radius < 0) {
			throw new Error("O raio não pode ser negativo");
		}
		return Math.PI * radius * radius;
	}

	static async fetchDataWithDelay<T>(data: T, delay: number): Promise<T> {
		return new Promise((resolve) => setTimeout(() => resolve(data), delay));
	}

	static async loadResourceWithTimeout<T>(resource: () => Promise<T>, timeout: number): Promise<T> {
		let timeoutHandle: NodeJS.Timeout;
		const timeoutPromise = new Promise<never>((_, reject) => {
			timeoutHandle = setTimeout(() => reject(new Error("Timeout ao carregar recurso")), timeout);
		});
		return Promise.race([resource(), timeoutPromise]).then((result) => {
			clearTimeout(timeoutHandle);
			return result;
		});
	}
}
