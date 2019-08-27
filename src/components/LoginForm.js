import React from 'react'; 
import { Form, Field, withFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';


const LoginForm = ({ errors, touched, values, status }) => {


    return (
        <div>
            <Form>
                <div className="names-login">
                    <Field type="username" name="Username" placeholder="username" />
                    {touched.name && errors.name && <p className="name-login">{errors.name}</p>}
                </div>
                <div>
                    <Field type="password" name="Password" placeholder="password" />
                    {touched.password && errors.name && <p className="passsword-login">{errors.password}</p>}
                </div>

                <button type="submit">Login</button>
            </Form>
        </div>

    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password, }) {
        return{
            username : username || "",
            password : password || "",
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please Fill In Your Email"),
        password: Yup.string().required("Please Enter Your Password")
    }),

    handleSubmit(values, { props }) {
        console.log(values);
        axios
        .post('https://bw-dev-libs.herokuapp.com/auth/login', values)
        .then(res => {
          console.log(res.data.payload);
          localStorage.setItem('token', res.data.payload);
          props.history.push('/MadlibPage');
        })
        .catch(err => console.log(err.response));
        }

})(LoginForm)

export default FormikLoginForm;