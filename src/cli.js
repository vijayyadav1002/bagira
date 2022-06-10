import arg from 'arg';
import inquirer from 'inquirer';
import createProject from './main';

function parseArgumentsIntoOptions(rawArgs) {
  const defaultProjectName = 'test-project';
  const args = arg(
    {
      '--git': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '--name': String,
      '--target': String,
      '-g': '--git',
      '-y': '--yes',
      '-i': '--install',
      '-t': '--target',
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || false,
    template: args._[0],
    runInstall: args['--install'] || false,
    name: args['--name'] || (args['--yes'] ? defaultProjectName : ''),
    targetDirectory: args['--target'] || '',
  };
}

async function promptForMissingOptions(options) {
  const defaultTemplate = 'REACT-JEST-PARCEL-BOILERPLATE';
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
    };
  }

  const questions = [];
  if (!options.template) {
    questions.push({
      type: 'list',
      name: 'template',
      message: 'Please choose which project template to use',
      choices: ['REACT-JEST-PARCEL-BOILERPLATE', 'REACT-REDUX-TODO', 'NodeJS'],
      default: defaultTemplate,
    });
  }

  if (!options.git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Initialize a git repository?',
      default: false,
    });
  }

  if (!options.runInstall) {
    questions.push({
      type: 'confirm',
      name: 'runInstall',
      message: 'Run install on the repository?',
      default: false,
    });
  }

  if (!options.name) {
    questions.push({
      type: 'input',
      name: 'name',
      message: 'Name of the project?',
      default: '',
    });
  }

  if (!options.targetDirectory) {
    questions.push({
      type: 'input',
      name: 'targetDirectory',
      message: 'Target directory?',
      default: '',
    });
  }

  const answers = await inquirer.prompt(questions);

  return {
    ...options,
    template: options.template || answers.template,
    git: options.git || answers.git,
    runInstall: options.runInstall || answers.runInstall,
    name: options.name || answers.name,
    targetDirectory: options.targetDirectory || answers.targetDirectory || '',
  };
}

export default async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createProject(options);
}
