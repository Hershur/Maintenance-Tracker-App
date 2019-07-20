const usernameField = document.getElementById('username');
const usernameLabel = document.getElementById('username-label');
const passwordField = document.getElementById('password');
const passwordLabel = document.getElementById('password-label');
const phoneField = document.getElementById('phone-number');
const phoneLabel = document.getElementById('phone-label');
const emailField = document.getElementById('email');
const emailLabel = document.getElementById('email-label');
const nameField = document.getElementById('name');
const nameLabel = document.getElementById('name-label');
const requestField = document.getElementById('request');
const requestLabel = document.getElementById('request-label');
const deptField = document.getElementById('department');
const deptLabel = document.getElementById('department-label');

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

phoneField.addEventListener('blur', () => {
  phoneLabel.style.visibility = 'hidden';
});

phoneField.addEventListener('focus', () => {
  phoneLabel.style.visibility = 'visible';
});

emailField.addEventListener('focus', () => {
  emailLabel.style.visibility = 'visible';
});

emailField.addEventListener('blur', () => {
  emailLabel.style.visibility = 'hidden';
});

requestField.addEventListener('focus', () => {
  requestLabel.style.visibility = 'visible';
});

requestField.addEventListener('blur', () => {
  requestLabel.style.visibility = 'hidden';
});

nameField.addEventListener('focus', () => {
  nameLabel.style.visibility = 'visible';
});

nameField.addEventListener('blur', () => {
  nameLabel.style.visibility = 'hidden';
});

deptField.addEventListener('focus', () => {
  deptLabel.style.visibility = 'visible';
});

deptField.addEventListener('blur', () => {
  deptLabel.style.visibility = 'hidden';
});
