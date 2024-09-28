export function snakeToCamelCase(snakeCase: string): string {
	return snakeCase.replace(/([-_]\w)/g, g => g[1].toUpperCase());
}