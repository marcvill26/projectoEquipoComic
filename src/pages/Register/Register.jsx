import React from 'react'
import {useFormik} from "formik";
import { Link } from "react-router-dom";
export default function Register() {
    const validate= (values) =>{
        const errors = {};
        if(!values.email){
            errors.email="Required";
        }else if (values.email.length < 4){
            errors.email="Must have 5 characters or more";
        }
        if(!values.password){
            errors.password="Required";
        }else if (values.password.length < 8){
            errors.password="Must have 8 characters or more";
        }else if (values.password === "12345678"){
            errors.password="Must no be 12345678";
        }
        if(!values.repassword){
            errors.repassword="Required";
        }else if(values.repassword !== values.password){
            errors.repassword="Password doesn't match";
        }
        return errors;
    }
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
            repassword:"",
        },
        onSubmit:(values) =>{
            alert(JSON.stringify(values, null, 2));
        },
    });
  return (
    <div className='Form'>
    <div className="register">
        
        <form onsumit={formik.handleSubmit} className="register__form">
            <label htmlFor="name" className="register__label">name</label>
            <input
                onBlur={formik.handleBlur} 
                onChange={formik.handleChange} 
                value={formik.values.name} 
                id="name"
                name="name"
                className="register__input"
                placeholder="Enter full name"
            ></input>
            <label htmlFor="email" className="register__label">Email</label>
            <input 
                onBlur={formik.handleBlur} 
                onChange={formik.handleChange} 
                value={formik.values.email} 
                id="email" 
                name="email" 
                className="register__input"
                placeholder="Enter email"
                ></input>
                {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                ):null}
            <label htmlFor="password" className="register__label">Password</label>
            <input 
                onBlur={formik.handleBlur} 
                onChange={formik.handleChange} 
                value={formik.values.password} 
                id="password" 
                name="password" 
                className="register__input" 
                type="password" 
                placeholder="Enter your password"></input>
                {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                ):null}
            <label htmlFor="repassword" className="register__label">Confirm Password</label>
            <input 
                onBlur={formik.handleBlur} 
                onChange={formik.handleChange} 
                value={formik.values.repassword} 
                id="repassword" 
                name="repassword" 
                className="register__input" 
                type="password"
                placeholder="Confirm password" ></input>
                {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                ):null}
            <button className="register__button">Register</button>
        </form>
    </div>
    </div>
  )
}
