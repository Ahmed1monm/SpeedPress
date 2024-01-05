"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ezpress = void 0;
const commander_1 = require("commander");
const package_json_1 = __importDefault(require("../package.json"));
const init_1 = require("./commands/init");
exports.ezpress = new commander_1.Command();
const currentDirectory = process.cwd();
exports.ezpress.version(package_json_1.default.version);
exports.ezpress.command("init")
    .description("Initialize a new express project")
    .argument("<projectName>", "Name of the project")
    .action((projectName) => (0, init_1.initHandler)(projectName));
exports.ezpress.parse();
