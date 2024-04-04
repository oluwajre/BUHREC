/* eslint-disable */
import React from 'react'
import SignUp from '../components/SignUp/SignUp'
import { ToastContainer } from 'react-toastify'

const SignUpPage = () => {
  return (
    <div>
        <div>
            <SignUp />
            <ToastContainer />
        </div>
    </div>
  )
}

export default SignUpPage