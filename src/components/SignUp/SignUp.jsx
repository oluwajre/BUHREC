/* eslint-disable */
import React, { useState } from 'react';
import './SignUp.css'
import '../Login/Login.css'
import { roleForm } from '../../utils/roleForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateSignUp } from '../../utils/validateSignUp';
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState(''); 
  const [programType, setProgramType] = useState('');
  const [programDisc, setProgramDisc] = useState('');
  const [institution, setInstitution] = useState('');
  const [department, setDepartment] = useState('');
  const [staffType, setStaffType] = useState('');
  const [degree, setDegree] = useState('');
  const [experienceYears, setExperienceYears] = useState('');
  const [resAddress, setResAddress] = useState('');

  const [error, setError] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault();

    let validity = validateSignUp();

    if (validity == true){
        try {
            const response = await fetch('/api/signup', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                firstName,
                lastName,
                email,
                phoneNumber,
                password,
                role,
                programType,
                programDisc,
                institution,
                department,
                staffType,
                degree,
                experienceYears,
                resAddress
              }),
            });
      
            if (response.status === 201) {
              toast.success('Signup successful! Please check your email for verification.');
              // Optionally, redirect to login page
            } else {
              const data = await response.json();
              setError(data.message || 'An error occurred. Please try again later.');
              toast.error(error)
            }
          } catch (err) {
            setError(err.message ||'An unexpected error occurred. Please try again later.');
            toast.error(error)
          }
    }

    
  };


  return (
    <div className="l-wrapper" id='s-wrapper'>
        <div className="innerWidth flexStart l-container">
            <div className="l-left">
                <div className="flexCenter login-image-container">
                <img src="./signup-image.jpg" alt="" />

                </div>
            </div>

            <div className="paddings flexEnd l-right" id='s-right'>

                <div className="flexColStart login-page" id='signUpPage'>
                <   div className="back">
                        <span className='secondaryText'><Link to="/" className='link'><span>&#8592;</span>Proceed to Home Page</Link></span>
                    </div>
                    <div className="primaryText">Create Account</div>

                    <div className="signUpForm">

                    <form onSubmit={handleSubmit} className='flexColStart form'>

                        <div className="flexStart form-group">

                            <div className="form-content sign-up-content">
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className='form-input'
                                    placeholder=""
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                                <label htmlFor="firstName" className='form-label'>First Name</label>
                            </div>

                            <div className="form-content sign-up-content">
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className='form-input'
                                    placeholder=""
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                                <label htmlFor="lastName" className='form-label'>Last Name</label>
                            </div>

                        </div>

                        <div className="flexStart form-group">

                            <div className="form-content sign-up-content">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className='form-input'
                                    placeholder=""
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label htmlFor="email" className='form-label'>Email</label>
                            </div>

                            <div className="form-content sign-up-content">
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    className='form-input'
                                    placeholder=""
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                                <label htmlFor="email" className='form-label'>Phone Number</label>
                            </div> 

                        </div>
                        
                        <div className="flexStart form-group">

                            <div className="form-content sign-up-content">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className='form-input'
                                    placeholder=""
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <label htmlFor="password" className='form-label'>Password</label>
                            </div>

                            <div className="form-content sign-up-content">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className='form-input'
                                    placeholder=""
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <label htmlFor="confirmPassword" className='form-label'>Confirm Password</label>
                            </div>

                        </div>
                        
                        <div className="flexStart form-group">
                            <div className="form-content sign-up-content">
                                <select id="role" value={role} onChange={(e) => {setRole(e.target.value); roleForm(e.target.value)}} className='form-input'>
                                    <option value="" hidden></option>
                                    <option value="researcher">Researcher</option>
                                    <option value="reviewer">Reviewer</option>
                                </select>
                                <label htmlFor="role" className='form-label' id='sign-up-label'>Role Type:</label>
                            </div>
                        </div>
                       

                        <div className="flexColStart form-group" id='research' style={{ display: 'none' }}>
                            <div className='flexCenter title'>
                                <p>Researcher Form</p>
                            </div>

                            <div className="flexColStart form-group">

                                <div className="form-content sign-up-content">
                                    <select id="programType" value={programType} onChange={(e) => setProgramType(e.target.value)} className='form-input'>
                                        <option value="" hidden></option>
                                        <option value="Undergraduate">Undergraduate</option>
                                        <option value="Phd">Phd</option>
                                    </select>
                                    <label htmlFor="programType" className='form-label' id='sign-up-label'>Program Type:</label>
                                </div>

                                <div className="form-content sign-up-content">
                                    <select id="programDiscipline" value={programDisc} onChange={(e) => setProgramDisc(e.target.value)} className='form-input'>
                                        <option value="" hidden></option>
                                        <option value="sces">SCES</option>
                                        <option value="vas">VAS</option>
                                    </select>
                                    <label htmlFor="programDiscipline" className='form-label' id='sign-up-label'>Program Discipline</label>
                                </div>

                            </div>
                            
                            

                        </div>

                        <div className="flexColStart form-group" id='review' style={{ display: 'none' }}>
                            <div className='flexCenter title'>
                                <p>Reviewer Form</p>
                            </div>
                            <div className='flexColStart form-group'>
                                <div className="form-content sign-up-content">
                                    <input
                                        type="text"
                                        id="institution"
                                        name="institution"
                                        className='form-input'
                                        placeholder=""
                                        value={institution}
                                        onChange={(e) => setInstitution(e.target.value)}
                                    />
                                    <label htmlFor="institution" className='form-label'>Institution</label>
                                </div> 

                                <div className="form-content sign-up-content">
                                    <input
                                        type="text"
                                        id="department"
                                        name="department"
                                        className='form-input'
                                        placeholder=""
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                    />
                                    <label htmlFor="department" className='form-label'>Department</label>
                                </div>

                            </div>

                            
                            <div className="flexStart form-group">
                                <div className="form-content sign-up-content">
                                    <select id="staff-type" value={staffType} onChange={(e) => setStaffType(e.target.value)} className='form-input'>
                                        <option value="" hidden></option>
                                        <option value="invited">Invited</option>
                                        <option value="resident">Resident</option>
                                    </select>
                                    <label htmlFor="staff-type" className='form-label' id='sign-up-label'>Staff Type:</label>
                                </div>

                                <div className="form-content sign-up-content">
                                    <select id="degree" value={degree} onChange={(e) => setDegree(e.target.value)} className='form-input'>
                                        <option value="" hidden></option>
                                        <option value="bachelorsDegree">Bachelors Degree</option>
                                        <option value="mastersDegree">Masters Degree</option>
                                    </select>
                                    <label htmlFor="degree" className='form-label' id='sign-up-label'>Degree Level:</label>
                                </div>

                            </div>

                            <div className='flexColStart form-group'>
                                <div className="form-content sign-up-content">
                                    <input
                                        type="text"
                                        id="experienceYears"
                                        name="experienceYears"
                                        className='form-input'
                                        placeholder=""
                                        value={experienceYears}
                                        onChange={(e) => setExperienceYears(e.target.value)}
                                    />
                                    <label htmlFor="experienceYears" className='form-label'>Years of Experience</label>
                                </div> 

                                <div className="form-content sign-up-content">
                                    <input
                                        type="text"
                                        id="resAddress"
                                        name="resAddress"
                                        className='form-input'
                                        placeholder=""
                                        value={resAddress}
                                        onChange={(e) => setResAddress(e.target.value)}
                                    />
                                    <label htmlFor="resAddress" className='form-label'>Residential Address</label>
                                </div>

                            </div>
                            
                        </div>

                        <div className='flexCenter'>
                            <input className='secondaryText' type='checkbox' id='terms'/>
                            <label htmlFor="terms" className='secondaryText'>Agree to Terms and Conditions.</label>
                        </div>
                        
                        <div className="form-button">
                            <button type="submit" className='button' id='sign-up-button'>Sign Up</button>
                        </div>

                    </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp