import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function OnBoard() {
  return (
    <Formik>
      <Form>
        <Field placeHolder="Enter Name" />
        <Field placeHolder="Enter Email" />
        <Field type="password" placeHolder="Enter password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default OnBoard;
