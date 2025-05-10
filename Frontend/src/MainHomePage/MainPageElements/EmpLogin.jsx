import React, { useState } from 'react';
import Slider from './Slider';
import Navbar from '../../Elements/Navbar';
import Footer from '../../Elements/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EmpLogin() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        // Regular expression for validating email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    };

    const validatePassword = (password) => {
        // Regular expression for strong password (at least 8 characters, with upper, lower, digit, and special char)
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
    };

    const logSubmit = async (e) => {
        e.preventDefault();

        // Reset errors before validation
        setEmailError("");
        setPasswordError("");

        // Validate email and password before submitting
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        if (!validatePassword(password)) {
            setPasswordError("Password must be at least 8 characters long, include an uppercase letter, a digit, and a special character.");
            return;
        }

        let user = { email, password };
        let response = await axios.post('http://localhost:8080/log', user);
        console.log(response);
        if (response.data.msg === "Success") {
            window.alert("Login Success");
            setEmail('');
            setPassword('');
            localStorage.setItem('user', response.data.id);
            navigate(`/employee`);
        } else {
            window.alert("Login failed");
        }
    }

    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row" style={{ height: "100px" }}>
                    <div className="col-sm-12" style={{ zIndex: "2" }}>
                        <Navbar />
                    </div>
                </div>

                <div className="row my-5">
                    {/* Slider Section */}
                    <div className="col-lg-7 col-md-12 my-auto">
                        <Slider />
                    </div>

                    {/* Login Form Section */}
                    <div className="col-lg-4 col-md-6 mx-auto mt-4">
                        <div className="row">
                            <div className="col-sm-12">
                                <form method="Post" onSubmit={logSubmit} className="p-4 shadow-lg rounded-3 bg-white">
                                    <div className="text-center mb-4">
                                        <h4 className="text-primary">Employee Login Form</h4>
                                    </div>

                                    {/* Email Input */}
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Enter your Email</label>
                                        <input 
                                            type="email" 
                                            value={email} 
                                            onChange={(e) => { setEmail(e.target.value) }} 
                                            id="email" 
                                            className={`form-control ${emailError ? 'is-invalid' : ''}`} 
                                            required 
                                        />
                                        {emailError && <div className="invalid-feedback">{emailError}</div>}
                                    </div>

                                    {/* Password Input */}
                                    <div className="mb-4">
                                        <label htmlFor="password" className="form-label">Enter Your Password</label>
                                        <input 
                                            type="Password" 
                                            value={password} 
                                            onChange={(e) => { setPassword(e.target.value) }} 
                                            id="password" 
                                            className={`form-control ${passwordError ? 'is-invalid' : ''}`} 
                                            required 
                                        />
                                        {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100 mb-4">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default EmpLogin;
