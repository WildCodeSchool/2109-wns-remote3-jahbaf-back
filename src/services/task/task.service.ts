import { Task } from '.prisma/client';
import { createOneTask, findOneTaskByKey } from 'src/repositories/TaskRepository';
import { TaskInput } from 'src/types';

export const createTaskService = async (taskInput: TaskInput): Promise<Task | null> => {
    console.log('In service');
    let createdTask: Task | null = null;
    const {/* projectId, sprintId, */title, } = taskInput; 
    const alreadyExist: Task | null = await findOneTaskByKey(title);
    console.log('task is: ' + alreadyExist);
    if (!alreadyExist) {
        createdTask = await createOneTask(taskInput);
    }
    return createdTask;
};