/* eslint-disable */
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import './Login.css'
import { validateLoginForm } from '../../utils/validateLogin';
import { togglePasswordVisibility } from '../../utils/passwordToggle';

// const myImageStyle = {
//     height: '100%',
//     borderRadius: '5px',
// };

const Login = () => {

    const handleShowPassword = () => {
        togglePasswordVisibility();
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault();

    const validity = validateLoginForm(email, password);
    
    if (validity === true){


        try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.success) {
            // Login successful
            toast.success('Login Successful');
            // Redirect to dashboard or other page after successful login
        } else {
            console.log('Login failed');
            setError(data.message); // Assuming backend sends error message in data
            toast.error(error || 'An unexpected error occurred. Please try again later.');
        }
        } catch (err) {
            console.log('error')
        setError(err.message || 'An unexpected error occurred. Please try again later.');
        toast.error(error);
        }
    }
    

    };

  return (
    <div className="l-wrapper">
        <div className="innerWidth flexStart l-container" id='login-container'>
            <div className="l-left">
            <div className='flexCenter login-image-container'>
                <img src="./login-image.jpg" alt="" style={{ height: '100%' }}/>
                </div>
            </div>
            
            <div className="flexColCenter l-right">
                <div className="flexColStart login-page">

                    <div className="back">
                    <span className='secondaryText'><Link to="/" className='link'><span>&#8592;</span>Proceed to Home Page</Link></span>
                    </div>
                    
                    <div className=" flexColStart head">
                        <span className='primaryText'>Login</span>
                        <span className='secondaryText'>Welcome Back! Please Enter your details.</span>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className='flexColStart form'>
                            <div className='form-content'>
                                <input
                                    type="email"
                                    id="email"
                                    className='form-input'
                                    placeholder=""
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                                <label htmlFor="email" className='form-label'>Email</label>
                            </div>
                            
                            <div className='form-content'>
                                <input
                                    type="password"
                                    id="password"
                                    className='form-input'
                                    placeholder=''
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />
                                <label htmlFor="password" className='form-label'>Password</label>
                                {/* {error && <p className="error-message">{error}</p>} */}
                            </div>

                            <div className='extra-info flexStart'>
                                <div className='flexCenter'>
                                    <label htmlFor="showPassword" className='secondaryText'>
                                        Show Password
                                    <input className='secondaryText' type='checkbox' id='showPassword' onChange={handleShowPassword}/>   
                                    </label>
                                </div>
                                <div className="secondaryText link">Forgot Password?</div>
                            </div>

                            <div className='flexColStart form-button'>
                                <button type="submit" className='button'onClick={handleSubmit} >Login</button>
                            </div>

                            <div className='flexCenter sign-up'>
                                <span className='secondaryText'>Don't have an account?<Link to="/signup" className='link'>Sign up Free</Link></span>
                            </div>
                            
                            
                        </form>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Login