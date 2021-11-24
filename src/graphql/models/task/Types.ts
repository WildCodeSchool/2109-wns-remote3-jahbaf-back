const Task = `
type Task {
    id: ID!
    status: String
    sprint: String
    project: String
    assignedUser: String
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
    status: String
    sprint: String
    project: String
    assignedUser: String
}`;

export const TaskTypes: string[] = [Task, TaskInput];