import inquirer from "inquirer";
import cli from "./cli";
import { createProject } from "./main";

jest.mock("inquirer");
jest.mock("./main.js");

describe("Cli Test", () => {
    test("Should call createProject with all default options", async () => {
        const answers = {
            template: "REACT-JEST-PARCEL-BOILERPLATE",
            git: "--git",
            runInstall: "--install",
            name: "test-project",
        };
        inquirer.prompt.mockResolvedValue(answers);
        await cli(["arg1", "arg2"]);
        expect(createProject).toHaveBeenLastCalledWith({
            git: "--git",
            name: "test-project",
            runInstall: "--install",
            skipPrompts: false,
            template: "REACT-JEST-PARCEL-BOILERPLATE",
        });
    });
});
