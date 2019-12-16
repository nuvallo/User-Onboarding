import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

function UserCard({ users }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="card-container">
      {users.map(user => {
        return (
          <Card className="card" key={user.id}>
            <CardBody>
              <CardTitle className="card-title"> {user.name}</CardTitle>
              <CardSubtitle>Email: {user.email}</CardSubtitle>
              <CardSubtitle>Role: {user.role}</CardSubtitle>
              <Button onClick={toggle} className="btn">
                See Profile
              </Button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{user.name}</ModalHeader>
                <ModalBody className="modal-body">
                  <CardSubtitle>
                    <span className="em">Email: </span>
                    {user.email}
                  </CardSubtitle>
                  <CardSubtitle>
                    <span className="em">Role: </span> {user.role}
                  </CardSubtitle>
                  <p>
                    <span className="em"> Description: </span> Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Phasellus velit odio,
                    commodo eget lacus eu, egestas ullamcorper mauris.
                    Suspendisse ac consequat magna. Donec tristique odio leo,
                    nec pellentesque mi viverra a. Nullam at quam odio. In
                    fringilla augue sed tempor laoreet. Etiam euismod sed est
                    quis euismod. Aenean ac nibh faucibus, cursus purus in,
                    mattis lorem. Cras molestie sem vitae diam malesuada, at
                    malesuada leo vehicula. Quisque ut tempus mi. Ut ornare
                    auctor ex at pharetra. Nullam nec nisl hendrerit, ornare est
                    non, maximus urna. Suspendisse dignissim odio id nulla
                    fermentum, nec bibendum odio porta.{" "}
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={toggle}>
                    Close
                  </Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default UserCard;
