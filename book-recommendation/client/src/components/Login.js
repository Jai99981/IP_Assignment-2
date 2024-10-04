import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password })
        .then(result => {
            console.log(result);
            if (result.data === "Success") {
                navigate("/home");
            } else {
                navigate("/register");
                alert("You are not registered to this service");
            }
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-gradient vh-100">
            <div className="bg-light shadow p-4 rounded w-25">
                <h2 className="text-center text-primary mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            <strong>Email</strong>
                        </label>
                        <input 
                            type="text" 
                            placeholder='Enter Email' 
                            autoComplete='off' 
                            name='email' 
                            className='form-control rounded' 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password" 
                            placeholder='Enter Password' 
                            name='password' 
                            className='form-control rounded' 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 rounded">
                        Login
                    </button>
                </form>
                <p className="mt-3 text-center">Don't have an account?</p>
                <Link to="/register" className="btn btn-outline-primary w-100 rounded text-decoration-none">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default Login;
