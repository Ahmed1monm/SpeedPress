import {describe, jest, beforeEach, it} from '@jest/globals';
import {initHandler} from '../src/commands/init';

jest.mock('child_process');

describe('initHandler', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should initialize project with default name if no name is provided', async () => {
		await initHandler();
	});

	it('should initialize project with the provided name', async () => {
		const projectName = 'my-awesome-app';
		await initHandler(projectName);
	});
});
