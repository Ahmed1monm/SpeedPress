import chalk from 'chalk';
import {exec, ExecException} from 'node:child_process';

import {createDir} from '../utils/createDir';
import {createFile} from '../utils/createFile';
import {writeIntoFile} from '../utils/writeIntoFile';
import {packageJsonContent} from '../content/packageJson.content';
import {tsconfigJsonContent} from '../content/tsconfigJson.content';
import {gitignoreContent} from '../content/gitignore.content';
import {swaggerContent} from '../content/swagger.content';
import {fileContentType} from '../types/fileContentType';
import {appContent} from '../content/app.content';
import {dockerfileContent} from '../content/Dockerfile.content';

export function initHandler(name: string = ''): void | Promise<void> {
	if (name === '') name = 'ezpress-created-app';
	const requiresParentDirs: string[] = ['src', 'tests', 'dist'];
	const requiresSubDirs: string[] = ['controllers', 'services', 'routes', 'models', 'middlewares', 'utils', 'config'];
	const requiresFiles: fileContentType[] =
		[
			{name: 'package.json', content: packageJsonContent(name)},
			{name: 'tsconfig.json', content: tsconfigJsonContent()},
			// {name:"src/index.ts", content: ""},
			{name: '.gitignore', content: gitignoreContent()},
			{name: 'README.md', content: ''},
			{name: 'swagger.yaml', content: swaggerContent(name)},
			{name: 'Dockerfile', content: dockerfileContent()},
			{name: '.dockerignore', content: '\nnode_modules\n'},
			{name: '.env', content: 'PORT=3000\n'},
		];
	console.log(chalk.grey('Initializing project...'));
	createDir(name);
	requiresParentDirs.forEach(dir => {
		createDir(`${name}/${dir}`);
		if (dir === 'src') {
			requiresSubDirs.forEach(subDir => {
				createDir(`${name}/${dir}/${subDir}`);
				createFile('index.ts', `${name}/${dir}/${subDir}`);
			});
			// createFile("index.ts", `${name}/${dir}`);
			writeIntoFile('index.ts', `${name}/${dir}`, appContent(name));
		}
	});
	requiresFiles.forEach(file => {
		createFile(file.name, name);
		writeIntoFile(file.name, name, file.content);
	});

	exec(`cd ${name} && npm install`, (err: ExecException | null, stdout: string, stderr: string) => {
		if (err) {
			console.log(chalk.red('Error while installing dependencies...'));
			console.log(chalk.red(err));
			return;
		}
		console.log(chalk.blue(stdout));
		console.log(chalk.red(stderr));
	});

	setTimeout((): void => {
		console.log(chalk.green.underline.bold('Project initialized successfully.'));
		console.log(chalk.blue('Installing dependencies, please wait...'));

	}, 10);
}