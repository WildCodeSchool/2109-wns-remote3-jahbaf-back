import { prisma } from 'src/client';
import { Project, Role, User } from '../interfaces';
import {
    createOneProject,
    createOneUser,
    createRole as createRoleRepository,
    addUserToProject as addUserToProjectRepository
} from '../repositories';
import { createOneTask } from '../repositories/TaskRepository';

export class DebugUtils {
    /**
     * Empty the database's tables
     */
    public static cleanDB = async (): Promise<undefined> => {
        await prisma.app_User.deleteMany({});
        await prisma.role.deleteMany({});
        await prisma.project.deleteMany({});
        await prisma.taskStatus.deleteMany({});
        await prisma.task.deleteMany({});
        await prisma.sprint.deleteMany({});
        await prisma.project_User.deleteMany({});
        return;
    };

    /**
     * Create a new user
     * 
     * @param email Optional field - The email used to register the user - Default is 'aa@aa.aa'
     * @returns The newly created user
     */
    public static createUser = async (email = 'aa@aa.aa'): Promise<User> => {
        const user = await createOneUser({ email, password: 'passwordA1!', name: 'Jean' });

        console.log('Inserted user: ', user);
        return user;
    };

    /** Create a new project and an admin role for this project
      * Also assign a user to the project
      * 
      * @param projectName Optional field - Default is 'projectName'
      * @param roleName Optional field - Default is 'admin'
      * @param userId Optional field - The user to be admin on the project - If not provided a user will be created with above method
      * @returns The newly created project, and the user if userId is not provided
      */
    public static createProject = async (projectName = 'projectName', roleName = 'admin', userId?: string): Promise<{project: Project, user?: User}> => {
        const user = userId ? null : await this.createUser();

        const project = await createOneProject({
            projectName: projectName,
            roleName: roleName,
            userId: user ? user.id : userId!
        });

        console.log('Inserted project: ', project);
        return user ? { project, user } : { project };
    };

    /**
     * Create a new role and a new project if needed
     * 
     * @param roleName Optional field - Default is 'testRole'
     * @param projectId Optional field - The project to link the role to - If not provided a project and a user will be created from above methods
     * @returns The newly created role, and the project/user if projectId is not provided
     */
    public static createRole = async (roleName = 'testRole', projectId?: string): Promise<{ role: Role, project?: Project, user?: User}> => {
        const data = projectId ? null : await this.createProject();
    
        const role = await createRoleRepository({
            name: roleName,
            projectId: data ? data.project.id : projectId! 
        });
    
        console.log('Inserted role: ', role);
        return data ? { ...data, role } : { role };
    };

    /**
     * Create a new task and a new project if needed
     * 
     * @param taskTitle Optional field - Default is 'taskTitle'
     * @param projectId Optional field - The project to link the role to - If not provided a project and a user will be created from above methods
     * @returns The newly created task, and the project/user if projectId is not provided
     */
    public static createTask = async (taskTitle = 'taskTitle', projectId?: string) => {
        const data = projectId ? null : await this.createProject();
    
        const task = await createOneTask({
            projectId: data ? data.project.id : projectId!,
            description: 'taskDescription',
            title: taskTitle
        });
    
        console.log('Inserted task: ', task);
        return { ...data, task };
    };
    
    /**
     * 
     * @returns 
     */
    public static addUserToProject = async (
        {projectId, userId, roleId}: {projectId?: string, userId?: string, roleId?: number}
    ) => {
        const projectData = projectId ? null : await this.createProject();
        const userData = userId ? null : await this.createUser();
        const roleData = roleId ? null : await this.createRole('testRole', projectData?.project.id);

        const project_user = await addUserToProjectRepository({
            userId: userData ? userData.id : userId!,
            roleId: roleData ? roleData.role.id : roleId!,
            projectId: projectData ? projectData.project.id : projectId!
        });

        console.log('Inserted project_user: ', project_user);
        return { ...projectData, ...roleData, ...project_user };
    };
}
