import React from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import styled from "styled-components";

const LoginUsername = styled.div`
  background-color: #858585;
  display: flex;
  justify-content: center;
  margin: 15px;
  padding: 8px;
  width: 15%;
`;

const LoginPassword = styled.div`
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

const LoginForm = ({ errors, touched, values, status }) => {
  return (
    <Section>
      <Form>
        <LoginUsername>
          <Field type="username" name="username" placeholder="Username" />
          {touched.name && errors.name && (
            <p className="name-login">{errors.name}</p>
          )}
        </LoginUsername>

        <LoginPassword>
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.name && (
            <p className="passsword-login">{errors.password}</p>
          )}
        </LoginPassword>

        <Btn type="submit">Login</Btn>
      </Form>
    </Section>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please Fill In Your Username"),
    password: Yup.string().required("Please Enter Your Password")
  }),

  handleSubmit(values, { props }) {
    console.log(values);
    axios
      .post("https://bw-dev-libs.herokuapp.com/auth/login", values)
      .then(res => {
        console.log(res.data.payload);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/MadlibPage");
      })
      .catch(err => console.log(err.response));
  }
})(LoginForm);

export default FormikLoginForm;
