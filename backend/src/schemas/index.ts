export const typeDefs = `#graphql
    type Book {
        title: String
        author: String
    }

    type User {
        name: String! # ! means required
        age: Int
    }

    type Query {
        books: [Book]
        users: [User]
    }

    type Mutation {
        addBook(title: String, author: String): Book
        addUser(name: String, age: Int): User
    }
`;
