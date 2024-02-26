#! /usr/bin/env node

import {Command} from "commander";
import packageJson from "../package.json";

import {initHandler} from "./commands/init";

export const ezpress = new Command();
ezpress.version(packageJson.version);

ezpress.command("init")
    .description("Initialize a new express project")
    .argument("<projectName>", "Name of the project")
    .action((projectName: string) => initHandler(projectName));

ezpress.parse();