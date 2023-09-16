# syntax=docker/dockerfile:1

FROM cypress/included:13.0.0

WORKDIR /e2e

COPY ["package.json", "yarn.lock*", "./"]

RUN yarn install

COPY . .