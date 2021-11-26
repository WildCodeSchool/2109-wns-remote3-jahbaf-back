import { ProjectErrorCodes } from './projects.codes';
export class ProjectNotFoundException extends Error {
    readonly code = ProjectErrorCodes.PROJECT_NOT_FOUND;
    readonly message = 'Ce projet n\'existe pas';
}
