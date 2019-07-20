const login = document.getElementById('login');
const validate = document.getElementById('validate');

login.addEventListener('click', event => {
  event.preventDefault();

  const userName = document.getElementById('username').value;
  const userPassword = document.getElementById('password').value;
  const passError = document.getElementById('pass-error');

  if (userName == 'user' && userPassword == 'user') {
    window.location.href = 'dashboard.html';
  } else if (userName == 'admin' && userPassword == 'admin') {
    window.location.href = 'dashboard.html';
  } else {
    passError.innerHTML = 'You have entered a wrong username or password . . .';
  }
});
