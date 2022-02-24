const Task = `
type Task {
    id: ID!
    statusId: String
    projectId: String
    userId: String
    title: String!
    points: Int
    priority: String
    description: String
    user: User
}
`;

const TaskInput = `
input TaskInput {
    title: String!
    points: Int
    priority: String
    description: String
    statusId: String
    projectId: String!
    userId: String
}`;

const AssignUserToTaskInput = `
    input AssignUserToTaskInput {
        userId: ID!
        taskId: ID!
    }
`;

export const TaskTypes: string[] = [Task, TaskInput, AssignUserToTaskInput];
