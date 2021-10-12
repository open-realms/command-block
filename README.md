# Command Block

The API for OpenRealms. Built using Nest.js and Prisma.

## Development

**Prerequisites:** You should have [Docker](https://www.docker.com/), [Node.js](https://nodejs.org/en/) (I highly recommend you use [nvm](https://github.com/nvm-sh/nvm) if you're not already), and [Classic Yarn](https://classic.yarnpkg.com/lang/en/) installed.

Start by installing dependencies:

```shell
$ yarn install
```

Make sure you copy `.example.env` to `.env` and fill out the necessary environment variables.

Next we need to build and run the docker containers:

```shell
# Build the docker containers
$ docker compose build
# Start containers
$ docker compose up
```

By running `docker compose up` you'll spin up the various containers required to run the API. This also starts the Nest app in watch mode so you can do your development on it.

If you wish, you could start it up and keep it running in the background by running `docker compose up -d`. This makes it so it's always running in the background and you don't need to leave a terminal open. It is still running watch mode so changes you make will automatically rebuild the app. If you find the app is not working, it's probable that you broke something and need to check the logs. That's why it's recommended to run not in the background when you're doing development on the app so you can know when things break.

## Migrations

Now you've got the containers running in the background, so we need to perform migrations. We have a script you can use for this. First make sure the script has the necessary permissions to run:

```shell
$ chmod a+x ./scripts/migrate.sh
```

You only need to do that once. Now when you need to do a migration you can simply run the following:

```shell
$ yarn migrate
```

Remember that the command block containers MUST be running in order to run the migrations.

## NPM Package Changes

When installing or updating npm packages, you'll need to rebuild your docker containers. Shut down any running containers using `docker compose down` and then spin them up again by using the following command to rebuild the volumes:

```shell
$ docker compose up --build -V
```

This will ensure you've pulled in your updated node dependencies.
