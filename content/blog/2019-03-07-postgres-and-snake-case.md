---
title: Postgres and Snake Case
date: 2019-03-07T12:00:00.000Z
path: /postrges-and-snake-case/
---

My latest engagement has me working with Postgres and Node.js. Having worked extensively with Mongo DB most recently, re-acquainting myself with the structured nature of a relational database has taken some time to get used to.

Apart from typical questions of how much to normalize the database, should we use enums or varchars, etc, one interesting issue has been dealing snake case in Postgres.

Snake case (as opposed to camel case) is used in Postgres because it is case insensitive. This best practice works well in the database layer. But the question naturally arises how do we interact with the schema in our application layer. It is convention in Javascript (often enforced now with Linters) to use camel case.

An ORM often serves as a successful abstraction layer wrapping interactions with Postgres and hiding that the tables and field names are all actually snake case in the database. Often, an ORM can be a bit heavy handed if you are wary of frameworks. In my current project, we are not using an ORM.

Instead, I have found a good light weight solution for this is relying on two excellent NPM packages [snakecase-keys](https://www.npmjs.com/package/snakecase-keys) and [camelcase-keys](https://www.npmjs.com/package/camelcase-keys). We can pass all queries and DML requests through a database wrapper layer which utilizes these libraries. When passing data in, we would let the wrapper snake case them. When data comes out we can camel case them. While this approach is not the most efficient performance-wise, I think it is a big improvement for developer productivity to always work in camel case (if that indeed is how the project is set up).

