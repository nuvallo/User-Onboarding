import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function UserForm({ values, errors, touched, status, users, setUsers }) {
  useEffect(() => {
    status && setUsers([...users, status]);
  }, [status]);
  return (
    <div>
      <Form className="user-form">
        <label htmlFor="name">
          Name
          <Field type="text" name="name" placeholder="Name" />
        </label>
        <label htmlFor="email">
          Email
          <Field type="email" name="email" placeholder="Email" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" placeholder="Password" />
        </label>
        <label htmlFor="terms">
          <Field type="checkbox" name="terms" required />
          Accept Terms of Service
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

const FormikUserForm = withFormik({
  mapPropsToValues(props) {
    return {
      name: props.name || "",
      email: props.email || "",
      password: props.password || "",
      terms: props.terms || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("values", values);
    axios
      .post("https://reqres.in/api/users", values)
      .then(reset => {
        console.log("success", reset);
        setStatus(reset.data);
        resetForm();
      })
      .catch(error => console.log("error", error));
  }
})(UserForm);

export default FormikUserForm;
