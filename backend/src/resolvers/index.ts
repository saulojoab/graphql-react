export const resolvers = {
  Query: {
    books: () => books,
    users: () => users,
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = { title, author };
      books.push(newBook);
      return newBook;
    },
    addUser: (_, { name, age }) => {
      const newUser = { name, age };
      users.push(newUser);
      return newUser;
    },
  },
};

const users = [
  {
    name: "John",
    age: 20,
  },
  {
    name: "Jane",
    age: 21,
  },
];

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];
