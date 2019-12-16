import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function UserForm({ values, errors, touched, status, users, setUsers }) {
  return (
    <div className="user-form">
      <Form>
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
  }
})(UserForm);
export default FormikUserForm;
