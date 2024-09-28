import {describe, jest, beforeEach, it, expect} from '@jest/globals';
import {initHandler} from '../src/commands/init';
import fs from 'fs';
import { afterEach } from 'node:test';

jest.mock('child_process');

describe('initHandler', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should initialize project with default name if no name is provided', async () => {
		await initHandler();
		
		const defaultProjectName = './ezpress-created-app';
		const dirs = ['src', 'tests', 'dist'];
		const readedProjectDir = fs.readdirSync(defaultProjectName);
		const currentReadedDir = fs.readdirSync('.');

		expect(currentReadedDir).toContain('ezpress-created-app');
		
		dirs.forEach(dir => {
			expect(readedProjectDir).toContain(dir);
		});
	});

	it('should initialize project with the provided name', async () => {
		const projectName = 'my-awesome-app';
		await initHandler(projectName);
	});

	afterEach(() => {
		fs.rmdirSync('./ezpress-created-app', {recursive: true});
		fs.rmdirSync('./my-awesome-app', {recursive: true});
	});
});
