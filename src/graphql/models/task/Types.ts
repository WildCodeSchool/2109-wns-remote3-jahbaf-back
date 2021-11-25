const Task = `
type Task {
    id: ID!
    status_id: String
    sprint_id: String
    project_id: String
    user_id: String
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
    status_id: String
    sprint_id: String
    project_id: String
    user_id: String
}`;

export const TaskTypes: string[] = [Task, TaskInput];