import React from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import styled from "styled-components";

const RegisterUsername = styled.div`
  background-color: #858585;
  display: flex;
  justify-content: center;
  margin: 15px;
  padding: 8px;
  width: 15%;
`;

const RegisterPassword = styled.div`
  background-color: #858585;
  display: flex;
  justify-content: center;
  margin: 15px;
  padding: 8px;
  width: 15%;
`;

const Section = styled.section`
    align-content: center;
`;

const Btn = styled.button`
  font-size: 1.5rem;
  margin-top: 25px;
  margin-bottom: 15px;
  padding: 5px;
`;

const RegisterForm = ({ errors, touched, values, status }) => {
  return (
    <Section>
      <Form>
        <RegisterUsername>
          <Field type="username" name="username" placeholder="Username" />
          {touched.name && errors.name && (
            <p className="name-register">{errors.name}</p>
          )}
        </RegisterUsername>
        <RegisterPassword>
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.name && (
            <p className="passsword-register">{errors.password}</p>
          )}
        </RegisterPassword>

        <Btn type="submit">Register</Btn>
      </Form>
      </Section>
  );
};

const FormikRegisterForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please Fill In Your Username"),
    password: Yup.string().required("Please Enter Your Password")
  })
})(RegisterForm);

export default FormikRegisterForm;
