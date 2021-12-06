# Instructions

## Start

To start the application simply run the following command :
```
yarn start
```

This command will automatically start the postgres docker container, do the migration and start your server.

## Tests

To test the application use the following command :
```
yarn test
```

Like with start this command will launch the postgres test database on a docker container, do the migration and start the test suites.

We're also able to get coverage reports with this command :

```
yarn test:coverage
```

## Environment files

Test and dev environment files are now public, we will have a prod.env file on production which will be private, this makes it easy for us to share dev/test environment files across the team.