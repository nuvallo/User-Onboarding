import React, { useState } from "react";
import "./App.css";
import FormikUserForm from "./components//Form/Form";
import UserList from "./components/Form/UserList";
import NavBar from "./components/Body/Navigation";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <FormikUserForm setUsers={setUsers} users={users} />
      <UserList users={users} />
    </div>
  );
}

export default App;
