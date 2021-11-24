import { Task } from '.prisma/client';
import { createOneTask, findOneTaskByKey, findOneTaskById } from 'src/repositories/TaskRepository';
import { TaskInput } from 'src/types';

export const createTaskService = async (taskInput: TaskInput): Promise<Task> => {
    let createdTask: Task | null = null;
    const {/* projectId, */title, } = taskInput; 
    const alreadyExist: Task | null = await findOneTaskByKey(title);
    console.log('task is: ' + alreadyExist);
    if (!alreadyExist) {
        try {
            createdTask = await createOneTask(taskInput);
        } catch(e) {
            throw new Error('Could not create task');
        }
    } else {
        throw new Error('Task already exist');
    }
    return createdTask;
};

export const selectOneTaskService = async (id: string): Promise<Task | null> => await findOneTaskById(id);