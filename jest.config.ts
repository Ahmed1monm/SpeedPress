import type { Config } from 'jest';

const config: Config = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	moduleFileExtensions: ['js', 'ts', 'json'],
	moduleNameMapper: {
		'^(.*)\\.js$': '$1',
	},
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: [
		'**/__tests__/**/*.[jt]s?(x)',
		'**/?(*.)+(spec|test).[tj]s?(x)',
	],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
		},
	},
};

export default config;
