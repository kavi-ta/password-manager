import React , {useState} from "react"

import * as Yup from "yup"
import { useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from 'formik';
const Login = ()=>{
    const navigate = useNavigate()
    const LoginSchema = Yup.object().shape({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const formik = useFormik({
        initialValues : {
            email : "",
            password : "",
        },
        validationSchema : LoginSchema,
        onSubmit : async ({ email, password })=>{
            try{
                console.log(email,password)
                navigate("/dashboard")
            }
            catch(e){
                console.log(e)
            }
        }
    })
    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;
    return (
        <div className="login-container">
            <div className="login-form">
                <div className="row">
                    <FormikProvider value={formik}>
                        <form onSubmit={handleSubmit}>
                        <div className="form-group mt-3">
                            <label for="email" className="form-label fw-7 fs-16">
                            Email
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            {...getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email ? (
                            <div className="form-error">{formik.errors.email}*</div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label for="password" className="form-label fw-7 fs-16">
                            Password
                            </label>
                            <div className="input-group">
                            <input
                                type='password'
                                className="form-control bg-transparent"
                                id="password"
                                placeholder="Enter password"
                                {...getFieldProps('password')}
                                aria-label="Recipient's email"
                                aria-describedby="input-group-addon2"
                            />
                            </div>
                            {formik.touched.password && formik.errors.password ? (
                            <div className="form-error">{formik.errors.password}*</div>
                            ) : null}
                        </div>
                        <button
                            type="submit"
                            className="btn login-btn d-flex justify-content-center mt-2 mb-2"
                            style={{ margin: 'auto', border: 'none' }}
            
                        >
                            LOGIN
                        </button>
                        </form>
                    </FormikProvider>
                
                </div>
            </div>
        </div>
    )
}

export default Login