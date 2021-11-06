# Exceptions

## Objective

Writing errors directly on the service might be an issue since it will make the code a bit harder to read, and not that much reusable, so creating dedicated exceptions should solve this issue.
Also, on the front end dealing with errors from GraphQL can be a bit tricky, since GraphQL always returns 200 code, with exceptions we can specify a custom error code to be handled easily on the front end.

## Usage

An exceptions contains an error code and a message.

```javascript
export const INVALID_EMAIL = '1002';
export class InvalidEmailException extends Error {
    code = INVALID_EMAIL;
    message = 'L\'adresse email que vous avez renseigné n\'est pas valide';
}
```

Code are above 1000 to not mistake it with HTTP error codes.

And using those exceptions into you code is quite straightforward too :

```javascript
if( !isEmailValid(email) ) throw new InvalidEmailException();
```

That's it !