export function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('showPassword');
  
    if (passwordToggle.checked) {
      passwordInput.type = 'text'; // Change type to "text" to show password
    } else {
      passwordInput.type = 'password'; // Change type to "password" to hide password
    }
  }