const button = document.getElementById('submit');
button.addEventListener('click', (e) => {
  e.preventDefault();
  const userName = document.getElementById('userName').value;
  const password = document.getElementById('password').value;
  if (userName.length < 4) {
    document.getElementById('error').innerHTML = 'user name must be at least 4 characters';
  } else if (password.length < 6) {
    document.getElementById('error').innerHTML = 'Password must be at least 6 characters';
  } else {
    document.getElementById('error').innerHTML = `Welcome back ${userName}`;
  }
});