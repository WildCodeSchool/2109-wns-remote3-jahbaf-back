const Sprint = `
    type Sprint {
        id: ID!
        startDate: Date!
        endDate: Date!
        projectId: ID!
    }
`;

const SprintInput = `
    input SprintInput {
        startDate: Date!
        endDate: Date!
        projectId: ID!
    }
`;

export const SprintTypes = [Sprint, SprintInput];
