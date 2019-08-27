import React from 'react'; 
import { Form, Field, withFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';


const RegisterForm = ({ errors, touched, values, status }) => {


    return (
        <div>
            <Form>
                <div>
                    <Field type="username" name="Username" placeholder="username" />
                    {touched.name && errors.name && <p className="name-register">{errors.name}</p>}
                </div>
                <div>
                    <Field type="password" name="Password" placeholder="password" />
                    {touched.password && errors.name && <p className="passsword-register">{errors.password}</p>}
                </div>

                <button type="submit">Register</button>
            </Form>
        </div>

    );
}

const FormikRegisterForm = withFormik({
    mapPropsToValues({ username, password, }) {
        return{
            username : username || "",
            password : password || "",
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please Fill In Your Username"),
        password: Yup.string().required("Please Enter Your Password")
    })

    
})(RegisterForm)

export default FormikRegisterForm;