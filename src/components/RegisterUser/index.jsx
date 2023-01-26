import { useState } from "react";
import { v4 as uuid } from "uuid";

export function RegisterUser({ setUsers }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(age, name);

    const newUser = {
      id: uuid(),
      age,
      name,
    };

    setUsers((oldUsers) => [...oldUsers, newUser]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        id="name"
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="age">Idade:</label>
      <input
        type="text"
        id="age"
        onChange={(event) => setAge(event.target.value)}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

// React onChange = Vanilla onInput
