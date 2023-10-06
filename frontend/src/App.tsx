import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_USERS = gql`
  query {
    users {
      name
      age
    }
  }
`;

const ADD_USER = gql`
  mutation AddUser($name: String!, $age: Int!) {
    addUser(name: $name, age: $age) {
      name
      age
    }
  }
`;

type User = {
  name: string;
  age: number;
};

export default function App() {
  const [name, setName] = useState("");
  const { data, loading } = useQuery<{ users: User[] }>(GET_USERS);

  const [addUser] = useMutation(ADD_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  function addNewUser() {
    addUser({
      variables: {
        name,
        age: 20,
      },
    });
  }

  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      {data?.users.map((user: User) => (
        <div key={user.name}>
          <span>{user.name}</span>
          <span>{user.age}</span>
        </div>
      ))}

      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={addNewUser}>cadastrar</button>
    </div>
  );
}
