# Prisma & PlanetScale Example

This is an example blog app showing the best practices when using [**Prisma**](http://www.prisma.io/) with [PlanetScale](https://planetscale.com/).

The app is built with Next.js, however, all the workflows demonstrated apply to other frameworks.

To learn more about Prisma & PlanetScale best practices check out the video accompanying this repository:

[![Prisma Planetscale Best Practices Guide](https://user-images.githubusercontent.com/1992255/148994499-4557004f-1471-4e19-850e-5946a76ccc15.png)](https://www.youtube.com/watch?v=iaHt5_hg44c)


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


## Run the App

```bash
# with npm
npm run dev
```
