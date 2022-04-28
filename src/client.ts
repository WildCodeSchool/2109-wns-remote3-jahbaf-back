import { PrismaClient } from '@prisma/client';
import { DebugUtils } from './utils/debug.utils';

const DEBUG = false;

export const prisma = new PrismaClient();

/**
 * Debugging function
 * Comment or uncomment methods depending on what you want to achieve
 * This function will be ran each time you start the server and will ease the way to test data by automatically 
 * populating the database
 */

const dbInitialisation = async () => {
    /** Delete all data from database */
    await DebugUtils.cleanDB();

    /** Create a new user */
    // await DebugUtils.createUser();

    /** Create a new project and a new user */
    // await DebugUtils.createProject();

    /** Create a new task, new project and a new user */
    // await DebugUtils.createTask();

    /** Create a new role, new project and a new user */
    // await DebugUtils.createRole();

    /** Create a new user, project, 2 roles and assign created user to project */
    // await DebugUtils.addUserToProject();

    console.log('Database initialisation done');
};

DEBUG && dbInitialisation();
