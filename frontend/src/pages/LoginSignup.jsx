import React from 'react';
import './CSS/LoginSignup.css';
import { useState } from 'react';

const LoginSignup = () => {

    const API_URL = process.env.REACT_APP_API_URL;
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const login = async () => {
        console.log("Login function called", formData);   
        let responseData
        await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((data) => {responseData = data})
        if(responseData.success) {
            console.log("LOGIN RESPONSE:", responseData);
            localStorage.setItem('aut-token', responseData.token);
            localStorage.setItem('user-email', responseData.email || (responseData.user && responseData.user.email) || "unidentified");
            window.location.href = '/';
        } else {
            alert(responseData.errors || "An error occurred during sign up.");
        }
    }

    const signUp = async () => {
        console.log("Sign Up function called", formData);   
        let responseData
        await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((data) => {responseData = data})
        if(responseData.success) {
            localStorage.setItem('aut-token', responseData.token);
            localStorage.setItem('user-email', responseData.email || (responseData.user && responseData.user.email) || "unidentified");
            window.location.href = '/';
        } else {
            alert(responseData.errors || "An error occurred during sign up.");
        }
    }

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Sign Up"?<input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange}/>:<></>}
                    <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" />
                    <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Your Password" />
                </div>
                <button onClick={()=>{state==="Login"?login():signUp()}}>Continue</button>
                {state==="Sign Up"?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p> :
                <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
            </div>
        </div>
            

    );
}

export default LoginSignup;
