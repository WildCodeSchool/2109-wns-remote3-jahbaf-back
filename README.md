# Some instructions

If you want to use Docker for the database there is already a docker-compose file running a postgres container.
To launch it simply run the following command:
```
docker compose up
```

You need to have a .env file at the root of the project containing the DB url in the DATABASE_URL property for prisma to work properly.
Database user, password and DB name are already defined inside the docker-compose file, if you use those the url is this :

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/jahbaf
```