const Comment = `
 type Comment {
     id: ID!
     message: String!
     createAt: Date
     author: User
 }
`;

const CommentInput = `
 input CommentInput {
     taskId: String!
     message: String!
 }
`;

const UpdateCommentInput = `
 input UpdateCommentInput {
     commentId: String!
     message: String!
 }
`;

export const CommentTypes: string[] = [
    Comment,
    CommentInput,
    UpdateCommentInput
];
