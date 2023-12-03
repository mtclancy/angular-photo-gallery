"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wwcComponent = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function createHost(tree) {
    return {
        readFile(path) {
            return __awaiter(this, void 0, void 0, function* () {
                const data = tree.read(path);
                if (!data) {
                    throw new schematics_1.SchematicsException('File not found.');
                }
                return core_1.virtualFs.fileBufferToString(data);
            });
        },
        writeFile(path, data) {
            return __awaiter(this, void 0, void 0, function* () {
                return tree.overwrite(path, data);
            });
        },
        isDirectory(path) {
            return __awaiter(this, void 0, void 0, function* () {
                return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
            });
        },
        isFile(path) {
            return __awaiter(this, void 0, void 0, function* () {
                return tree.exists(path);
            });
        },
    };
}
function wwcComponent(options) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        const host = createHost(tree);
        const { workspace } = yield core_1.workspaces.readWorkspace('/', host);
        const project = (options.project != null) ? workspace.projects.get(options.project) : null;
        if (!project) {
            throw new schematics_1.SchematicsException(`Invalid project name: ${options.project}`);
        }
        const projectType = project.extensions["projectType"] === 'application' ? 'app' : 'lib';
        if (options.path === undefined) {
            options.path = `${project.sourceRoot}/${projectType}`;
        }
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./template'), [
            (0, schematics_1.applyTemplates)(Object.assign(Object.assign({}, options), core_1.strings)),
            (0, schematics_1.move)((0, core_1.normalize)(`${project.sourceRoot}/${projectType}/${options.path}/${core_1.strings.dasherize(options.name)}`))
        ]);
        return (0, schematics_1.chain)([
            (0, schematics_1.mergeWith)(templateSource)
        ]);
    });
}
exports.wwcComponent = wwcComponent;
//# sourceMappingURL=index.js.map