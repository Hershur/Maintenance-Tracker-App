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

let createAccount = document.getElementById('create-account');
let welcomeSection = document.getElementById('welcome-section');
let createAccountSection = document.getElementById('create-account-section');

createAccount.addEventListener('click', e => {
  e.preventDefault();
  welcomeSection.style.display = 'none';
  createAccountSection.display = 'block';
});
