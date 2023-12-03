import {
  Rule, Tree, SchematicsException,
  apply, url, applyTemplates, move,
  chain, mergeWith
} from '@angular-devkit/schematics';
import { strings, normalize, virtualFs, workspaces } from '@angular-devkit/core';
import { ComponentSchema } from './component.schema';

function createHost(tree: Tree): workspaces.WorkspaceHost {
  return {
    async readFile(path: string): Promise<string> {
      const data = tree.read(path);
      if (!data) {
        throw new SchematicsException('File not found.');
      }
      return virtualFs.fileBufferToString(data);
    },
    async writeFile(path: string, data: string): Promise<void> {
      return tree.overwrite(path, data);
    },
    async isDirectory(path: string): Promise<boolean> {
      return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
    },
    async isFile(path: string): Promise<boolean> {
      return tree.exists(path);
    },
  };
}

export function wwcComponent(options: ComponentSchema): Rule {
  return async (tree: Tree) => {
    const host = createHost(tree);
    const { workspace } = await workspaces.readWorkspace('/', host);

    const project = (options.project != null) ? workspace.projects.get(options.project) : null;

    if (!project) {
      throw new SchematicsException(`Invalid project name: ${options.project}`);
    }

    const projectType = project.extensions["projectType"] === 'application' ? 'app' : 'lib';

    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${projectType}`;
    }

    const templateSource = apply(url('./template'), [
      applyTemplates({
        ...options,
        ...strings
      }),
      move(normalize(`${project.sourceRoot}/${projectType}/${options.path}/${strings.dasherize(options.name)}`))
    ]);

    return chain([
      mergeWith(templateSource)
    ]);
  };
}
