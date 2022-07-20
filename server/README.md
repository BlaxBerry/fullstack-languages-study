# Languages-Study-Server

- [Description](#description)
- [Tech Stack](#teach-stack)
- [Folder](#folder)
- [Data Folder Structure](#data-folder-structure)
- [Data Structure](#data-structure)
- [How to Develop](#how-to-develop)
- [How to Setup](#how-to-setup)

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

## Data Folder Structure

```js
|- data
    |- [languag]
        |- word_details.json
        |- words_list.json
    |- [languag]
        |- word_details.json
        |- words_list.json
    |- ...

```

## Data Structure

Check More Detail on Graphql IDE

1. [finish setup](#how-to-setup)
2. start server
3. borwser open `http://localhost:8080/graphql`

---

**wordsList**

```json
[
  {
    "id": "spaghetti2022-07-18",
    "name": "spaghetti"
  },
  {
    "id": "xxx1658330303720",
    "name": "xxx"
  }
]
```

**wordDetails**

```json
[
  {
    "name": "xxx",
    "pronunciation": "[xxx]",
    "language": "en",
    "area": ["x", "xx"],
    "meaningsList": [
      {
        "type": "n.",
        "meanings": "xxx"
      }
    ],
    "expressionsList": [
      {
        "expression": "asc",
        "translation": "ASC",
        "sentencesList": [
          {
            "sentence": "xaxx",
            "translation": "xAxx"
          }
        ]
      }
    ],
    "sentencesList": [
      {
        "sentence": "ascasc",
        "translation": "adsfdgsdg"
      }
    ],
    "id": "xxx1658330303719",
    "publishAt": "2022-07-20T15:18:23.719Z"
  }
]
```

## How to Develop

###

### create query and mutaion

query:

> 1. graphql/resolver/
> 2. graphql/api/queries
> 3. graphql/schema

mustaion:

> 1.  graphql/resolver/
> 2.  graphql/api/mutations
> 3.  graphql/schema

### How to Setup

```shell
# 1.
git clone https://github.com/BlaxBerry/fullstack-languages-study.git

# 2.
cd fullstack-languages-study
cd server
npm install

# 3.
nodemon index.ts

# Server runnning at http://localhost:8080
# Graphql IDE Server runnning at http://localhost:8080/graphql
```
