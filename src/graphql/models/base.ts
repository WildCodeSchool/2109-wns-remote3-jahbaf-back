export enum baseGraphQLTypes  {
    STRING = 'String',
    ID = 'ID!',
    BOOL = 'Boolean',
    INT = 'Integer'
}

export enum authTypes {
    USER = 'User',
    AUTH_PAYLOAD = 'AuthPayload'
}

export enum randomTypes {
    MESSAGE = 'Message'
}

export type AllTypes = baseGraphQLTypes | authTypes | randomTypes;
export type Parameters = { [key: string]: AllTypes };
