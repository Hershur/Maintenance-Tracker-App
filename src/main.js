let usernameField = document.getElementById('username');
let usernameLabel = document.getElementById('username-label');
let passwordField = document.getElementById('password');
let passwordLabel = document.getElementById('password-label');
let phoneField = document.getElementById('phone-number');
let phoneLabel = document.getElementById('phone-label');
let emailField = document.getElementById('email');
let emailLabel = document.getElementById('email-label');
let nameField = document.getElementById('name');
let nameLabel = document.getElementById('name-label');
let requestField = document.getElementById('request');
let requestLabel = document.getElementById('request-label');
let deptField = document.getElementById('department');
let deptLabel = document.getElementById('department-label');

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
