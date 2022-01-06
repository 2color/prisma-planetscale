# Prisma & PlanetScale Example

This is an example blog app showing the best practices when using [**Prisma**](http://www.prisma.io/) with [PlanetScale](https://planetscale.com/).

The app is built with Next.js, however, all the workflows demonstrated apply to other frameworks.


<!-- [![](https://user-images.githubusercontent.com/1992255/135487729-6dbc8da4-deff-47e2-9c28-a875f995eea1.jpg)](https://youtu.be/iyGZ8JFPgoY) -->

## Installation

Clone the repo and install the dependencies:

```bash
# with npm
npm i
```


## Set DATABASE_URL

Create `.env` by copying the example:

```bash
cp .env.example .env
```

Set the `DATABASE_URL` with the connection string from PlanetScale

## Create the database with Prisma Migrate

```bash
npx prisma migrate dev
```

## Run the App

```bash
# with npm
npm run dev
```
