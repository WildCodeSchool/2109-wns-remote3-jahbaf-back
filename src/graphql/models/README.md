# Model definitions

## Create a custom type

Custom types goes to folders depending on their categories (example: auth/Types.ts)
Usage is quite simple, lets say you want to create the following graphQL type :

```graphql
type Task = {
    id: ID!
    name: String
    points: Integer
    description: String
}
```

There is a builder available to be able to create this type without having to use a string which is error prone in case of mistyping

```typescript
const task = new TypesBuilder(taskTypes.TASK);
const Task = task.addTypes({
    id:        baseGraphQLTypes.ID,
    name:     baseGraphQLTypes.STRING,
    points:      baseGraphQLTypes.INT,
    description:  baseGraphQLTypes.STRING
}).getType();
```

## Add a mutation or a query

Process is more or less the same as for the type, if you want to add the following mutation:

```graphql
createTask(name: String, description: String): Task!
```

You can create it this way

```typescript
const createTaskParams: Parameters = {
    name: baseGraphQLTypes.STRING,
    description: baseGraphQLTypes.STRING
};
mutations.addResolver(mutationFunctions.createTask.name, taskTypes.TASK, createTaskParams);
```

Same goes for queries.
