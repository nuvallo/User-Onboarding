import React, { useState } from "react";
import "./App.css";
import FormikUserForm from "./components//Form/Form";
import UserList from "./components/Form/UserList";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <FormikUserForm setUsers={setUsers} users={users} />
      <UserList users={users} />
    </div>
  );
}

export default App;
