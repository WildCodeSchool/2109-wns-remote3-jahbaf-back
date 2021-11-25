/**
 * Task Status type definition
 * This is the status linked to a task
 */
const TaskStatus = `
  type TaskStatus {
    id: ID!
    name: String
    projectId: String
  }
`;

/**
 * TaskStatusInput type definition
 * This is the type of input data of status's task passed to the xxx resolver
 */
const TaskStatusInput = `
  input TaskStatusInput {
      name: String!
      projectId: String!
  }
`;
export const TaskStatusTypes: string[] = [TaskStatus, TaskStatusInput];
