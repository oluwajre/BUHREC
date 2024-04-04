/* eslint-disable */
import { Helmet } from 'react-helmet-async';

import {ToastContainer} from 'react-toastify'
import Login from '../components/Login/Login';
import './App.css'



// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | BUHREC </title>
      </Helmet>

      <div className='App'>
        <div>
            <Login/>
            <ToastContainer/>
        </div>
    </div>
    </>
  );
}
