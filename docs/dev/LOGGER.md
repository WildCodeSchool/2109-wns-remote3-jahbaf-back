# Logger

## Librairie

To log informations into files or console we use the winston library, you can find more informations about it at this url [https://github.com/winstonjs/winston](https://github.com/winstonjs/winston).
Winston allow us to have different log files depending on the message type we want to register.
It also allows us to have a centralized way to handle console logs, right now it is setup to be deactivated in production, which is not the case for regular console.log, so please, if you want to log anything into the console use winston.

## Usage

We currently have 3 loggers already setup :

```typescript
export const errorLogger;

export const consoleLogger;

export const accessLogger;
```

### Error logger

The errorLogger is to be used in the catch block into your resolvers, this way every error thrown during the code execution will go through the logger and write an error to the error.log file.

```typescript
export const createProject = async (
    parent: any,
    { projectInput }: CreateProjectArgs
): Promise<Project> => {
    try {
        return await createProjectService(projectInput);
    } catch(e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};
```

For now error logs only contains basic datas given by the exception thrown, but with a bit of customization we will be able to also send custom datas, to have a more specific error.

```javascript
{
  code: 2002,
  level: 'error',
  message: "Ce projet n'existe pas",
  timestamp: '2021-12-05T16:45:23.831Z'
}
```


### Access logger

The access logger is to be used as the first method in the try block of your resolvers, this way every access to the application will go through the logger and write to the access.log file.
As argument you have to pass the resolver name, so we'll be able to know which resolver has been accessed, and same as the error logger we will be able to send more custom datas if needed.

```typescript
export const createProject = async (
    parent: any,
    { projectInput }: CreateProjectArgs
): Promise<Project> => {
    try {
        accessLogger.info('createProject');
        return await createProjectService(projectInput);
    } catch(e: any) {
        throw e;
    }
};
```

### Console logger

The console logger usage is quite straightforwards :

```typescript
consoleLogger.info('Your message');
```

If you take a look at the [logger.ts](../../src/logger.ts) file you will see this line :

```typescript
silent: process.env.NODE_ENV === 'production',
```

This line will deactivate the console logs in production mode, but if you don't want to see all console logs during development you can change this to :

```typescript
silent: true,
```
