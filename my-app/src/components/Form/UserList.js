import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

function UserList({ users }) {
  return (
    <div className="card-container">
      {users.map(user => {
        return (
          <Card className="card" key={user.id}>
            <CardBody>
              <CardTitle>{user.name}</CardTitle>
              <CardSubtitle>{user.email}</CardSubtitle>
              <Button className="btn">See Profile</Button>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default UserList;
