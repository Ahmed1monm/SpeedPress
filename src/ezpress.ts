import {Command} from "commander";
import packageJson from "../package.json";
import fs from "fs";

import {initHandler} from "./commands/init";

export const ezpress = new Command();
const currentDirectory = process.cwd();

ezpress.version(packageJson.version);

ezpress.command("init")
    .description("Initialize a new express project")
    .argument("<projectName>", "Name of the project")
    .action((projectName: string) => initHandler(projectName));

ezpress.parse();