import inquirer from 'inquirer';
import cli from './cli';
import createProject from './main';

jest.mock('inquirer');
jest.mock('./main.js');

describe('Cli Test', () => {
  describe('createProject', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      const answers = {
        template: 'REACT-JEST-PARCEL-BOILERPLATE',
        git: '--git',
        runInstall: '--install',
        name: 'test-project',
      };
      inquirer.prompt.mockResolvedValue(answers);
    });
    test('Should call with all user prompted anwsers', async () => {
      const defaultTemplate = 'REACT-JEST-PARCEL-BOILERPLATE';
      await cli(['arg1', 'arg2']);
      expect(inquirer.prompt).toHaveBeenCalledWith([
        {
          type: 'list',
          name: 'template',
          message: 'Please choose which project template to use',
          choices: [
            'REACT-JEST-PARCEL-BOILERPLATE',
            'REACT-REDUX-TODO',
            'NodeJS',
          ],
          default: defaultTemplate,
        },
        {
          type: 'confirm',
          name: 'git',
          message: 'Initialize a git repository?',
          default: false,
        },
        {
          type: 'confirm',
          name: 'runInstall',
          message: 'Run install on the repository?',
          default: false,
        },
        {
          type: 'input',
          name: 'name',
          message: 'Name of the project?',
          default: '',
        },
      ]);
      expect(createProject).toHaveBeenCalledWith({
        git: '--git',
        name: 'test-project',
        runInstall: '--install',
        skipPrompts: false,
        template: 'REACT-JEST-PARCEL-BOILERPLATE',
      });
    });
    test('Should call skipPrompts and use the default template', async () => {
      await cli(['arg1', 'arg2', '--yes']);
      expect(inquirer.prompt).not.toHaveBeenCalled();
      expect(createProject).toHaveBeenCalledWith({
        git: false,
        name: 'test-project',
        runInstall: false,
        skipPrompts: true,
        template: 'REACT-JEST-PARCEL-BOILERPLATE',
      });
    });
    test('Should call not ask question for template if given', async () => {
      await cli(['arg1', 'arg2', 'NodeJS']);
      expect(inquirer.prompt).toHaveBeenCalledWith([
        {
          default: false,
          message: 'Initialize a git repository?',
          name: 'git',
          type: 'confirm',
        },
        {
          default: false,
          message: 'Run install on the repository?',
          name: 'runInstall',
          type: 'confirm',
        },
        {
          default: '',
          message: 'Name of the project?',
          name: 'name',
          type: 'input',
        },
      ]);
      expect(createProject).toHaveBeenCalledWith({
        git: '--git',
        name: 'test-project',
        runInstall: '--install',
        skipPrompts: false,
        template: 'NodeJS',
      });
    });
    test('Should call not ask any question if all the information is given', async () => {
      await cli([
        'arg1',
        'arg2',
        'NodeJS',
        '--git',
        '--name=some-name',
        '--install',
      ]);
      expect(inquirer.prompt).toHaveBeenCalledWith([]);
      expect(createProject).toHaveBeenCalledWith({
        git: true,
        name: 'some-name',
        runInstall: true,
        skipPrompts: false,
        template: 'NodeJS',
      });
    });
  });
});
