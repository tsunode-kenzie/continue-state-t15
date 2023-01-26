import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { Bulb } from "./components/Bulb";
import { Counter } from "./components/Counter";
import { Profile } from "./components/Profile";
import { RegisterUser } from "./components/RegisterUser";

export function App() {
  const [users, setUsers] = useState([]);

  return (
    <main>
      {/* <Counter /> */}

      <Bulb />

      <HiUser size={35} className="teste" />

      <RegisterUser setUsers={setUsers} />

      {users.map((user) => (
        <Profile key={user.id} name={user.name} age={user.age} />
      ))}
    </main>
  );
}

// class => className
// <input > => <input />
// html => htmlFor
// não pode retornar varios elementos
