# Languages-Study-Server

- [Description](#description)
- [Tech Stack](#teach-stack)
- [Folder](#folder)

## Description

....

## Teach Stack

- [Node.js]() v14.18
- [Express.js]() v14.18
- [Typescript]() v4.7
- [graphql]() v16.5
- [express-graphql]() v0.12
- cors
- eslint
- prettier

## Folder

```js
|- config
|- data  // mock data
    |- en
        |- words_list.json
        |- ...
    |- ja
|- graphql
    |- api
        |- mutaions // mutations field & type
        |- queries // queries field & type
    |- resolver
        |- mutations  // mutations resolver functions
        |- queries // queries resolver functions
        |- types // common types only for graphql resolver functions
    |- schema
|- middlewares
|- utils
|- index.ts  // main
|- package.json
|- tsconfig.json
|- ...
```

创建 query

1. graphql/resolver/
2. graphql/api/queries
3. graphql/schema

创建 mustaion

1. graphql/resolver/
2. graphql/api/mutations
3. graphql/schema
