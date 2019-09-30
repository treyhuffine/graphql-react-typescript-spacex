# Find coding tutorials

### [React](https://gitconnected.com/learn/react) | [TypeScript](https://gitconnected.com/learn/typescript) | [GraphQL](https://gitconnected.com/learn/graphql)

# React App with GraphQL and TypeScript

A fully functioning React app using a [GraphQL implemention](https://spacexdata.herokuapp.com/graphql) of the [public SpaceX API](https://docs.spacexdata.com/).

Follow the tutorial step-by-step on the [LogRocket blog](https://blog.logrocket.com/build-a-graphql-react-app-with-typescript/)

## Overview

- Create React App with the TypeScript setting to bootstrap the App
- Implement React Apollo using React Hooks to make GraphQL queries
- Automatically generate TypeScript types for our queries and components based off the GraphQL schema

_Note:_ Upgrading graphql-codegen makes a big change to the way typescript files are generated. If you run into an error regarding ordering of imports in ./generated/graphql.tsx, the command `npm run codegen` should fix it.
