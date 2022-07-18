# Languages-Study-Client

- [Description](#description)
- [Tech Stack](#teach-stack)
- [Folder](#folder)
- [Routes](#routes)
- [Design](#design)
- [API](#api)

## Description

SPA admin client

....

- Internationalization
- Interactive & Visualization
- Graphql

## Teach Stack

- createed by
  - [Vite]() v3
  - [Typescript]() v4.7
  - [React]() v18
  - [React-Router-Dom]() v6
- API
  - [Graphql]() v16+
  - [Apollo Client]() v3.6+
- style and design
  - [Ant Design]() v4+
  - [Sass]()
- package manager
  - [Yarn]()
- version manager
  - [Git]()
- linter & format
  - [eslint]()
  - [prettier]()
  - [stylelint]()
- libs
  - [ahooks]()
  - [ant-design charts]()
  - [react-i18-next]()
  - [react-css-theme-switcher]()

## Folder

```js
|- docs // dist
|- public
  |- theme  // for theme switch
    |- dark.css
    |- light.css
|- src
    |- apollo // apollo client instance
    |- assets
    |- components  // custom components
      |- common
      |- layout
    |- graphql  // graphql documents(types)
    |- pages  // route pages components
      |- mypage
      |- words
        |- create.tsx
        |- detail.tsx
        |- list.tsx
      |- 404.tsx
      |- about.tsx
      |- home.tsx
      |- statistics.tsx
    |- routes
    |- styles
      |- common
      |- custom
    |- App.tsx
    |- main.tsx
|- index.html
|- package.json
|- ...
```

## Routes

- `/home` ( `/` )
- `/about`
- `/mypage`
- `/words/list`
- `/words/create`
- `/words/detail?id=ID`
- `/statistics`
- `/404`

## Design

...

## API

`http://localhost:8080/graphql`
