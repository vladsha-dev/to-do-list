# syntax=docker/dockerfile:1

FROM node:20-alpine

RUN apk --no-cache add git

ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "yarn.lock*", "./"]

RUN yarn install --production=false

COPY . .

CMD ["yarn", "start"]