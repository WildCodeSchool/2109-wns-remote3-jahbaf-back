const Task = `
type Task {
    id: ID!
    statusId: String
    sprintId: String
    projectId: String
    userId: String
    title: String!
    points: Int
    priority: String
    description: String
}
`;

const TaskInput = `
input TaskInput {
    title: String!
    points: Int
    priority: String
    description: String
    statusId: String
    sprintId: String
    projectId: String!
    userId: String
}`;

export const TaskTypes: string[] = [Task, TaskInput];
