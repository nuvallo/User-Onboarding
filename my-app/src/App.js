import React, { useState } from "react";
import "./App.css";
import FormikUserForm from "./components/Form/UserForm";
import UserCard from "./components/Body/UserCard";
import NavBar from "./components/Body/Navigation";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <FormikUserForm setUsers={setUsers} users={users} />
      <UserCard users={users} />
    </div>
  );
}

export default App;
