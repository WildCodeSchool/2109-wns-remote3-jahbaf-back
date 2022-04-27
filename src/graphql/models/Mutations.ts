/**
 *  Ici on retrouve un "model" de chacuns nos Resolvers de mutation.
 *  Exemple:
 *  signUp(email: String, password: String) AuthMessage!
 *  createOneTask(title: String!, description: String!, priority: String!, points: Int): Message!
 */
export const Mutation = `
  type Mutation {
    signUp(name: String, email: String!, password: String!): String!
    createSprint(sprintInput: SprintInput!): Sprint!
    createTask(taskInput: TaskInput!): Task!
    createProject(projectInput: ProjectInput! ): Project!
    updateProject(projectInput: UpdateProjectInput!): Project!
    createTaskStatus(taskStatusInput: TaskStatusInput!): TaskStatus!
    assignTaskStatus(taskId: String!, taskStatusId: String!): Task!
    createRole(roleInput: RoleInput!): Role!
    updateRole(roleInput: UpdateRoleInput!): Role!
    addUserToProject(addUserToProjectInput: AddUserToProjectInput!): Void
    assignUserToTask(assignUserToTaskInput: AssignUserToTaskInput!): Task!
    deleteUser(email: String!, password: String!): Void!
    confirmAccount(token: String!): String!
    resetPassword(token: String!, password: String!): String!
  }
`;
