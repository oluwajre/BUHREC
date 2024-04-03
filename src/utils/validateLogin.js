import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export function validateLoginForm(email, password) {


  let isValid = true;

  // Username Validation
  if (email === '') {
    toast.error('Email is required.');
    isValid = false;
  }

  // Password Validation
  else if (password === '') {
    toast.error('Password is required.');
    isValid = false;

  }

  return isValid;
}