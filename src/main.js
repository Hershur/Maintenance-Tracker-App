let usernameField = document.getElementById('username');
let usernameLabel = document.getElementById('username-label');
let passwordField = document.getElementById('password');
let passwordLabel = document.getElementById('password-label');

usernameField.addEventListener('focus', () => {
  usernameLabel.style.visibility = 'visible';
});

usernameField.addEventListener('blur', () => {
  usernameLabel.style.visibility = 'hidden';
});

passwordField.addEventListener('focus', () => {
  passwordLabel.style.visibility = 'visible';
});

passwordField.addEventListener('blur', () => {
  passwordLabel.style.visibility = 'hidden';
});

const login = document.getElementById('login');
const validate = document.getElementById('validate');

login.addEventListener('click', event => {
  event.preventDefault();

  const userName = document.getElementById('username').value;
  const userPassword = document.getElementById('password').value;

  if (userName == 'user' && userPassword == 'user') {
    window.location.href = 'dashboard.html';
  } else if (userName == 'admin' && userPassword == 'admin') {
    window.location.href = 'dashboard.html';
  } else {
    alert('You have entered a wrong password');
  }
});

let phoneField = document.getElementById('phone-number');
let phoneLabel = document.getElementById('phone-label');
let emailField = document.getElementById('email');
let emailLabel = document.getElementById('email-label');

phoneField.addEventListener('focus', () => {
  phoneLabel.style.visibility = 'visible';
});

phoneField.addEventListener('blur', () => {
  phoneLabel.style.visibility = 'hidden';
});

emailField.addEventListener('focus', () => {
  emailLabel.style.visibility = 'visible';
});

emailField.addEventListener('blur', () => {
  emailLabel.style.visibility = 'hidden';
});
