const Sprint = `
    type Sprint {
        id: ID!
        startDate: String!
        endDate: String!
        projectId: ID!
    }
`;

const SprintInput = `
    input SprintInput {
        startDate: String!
        endDate: String!
        projectId: ID!
    }
`;

export const SprintTypes = [Sprint, SprintInput];
