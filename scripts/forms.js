const authForm = document.querySelector('.js-auth-form');
const registerForm = document.querySelector('.js-register-form');

authForm.addEventListener('submit', handleAuthorization);

function handleAuthorization(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData.get('email');
  const password = formData.get('password');

  console.log(email, password);
}

registerForm.addEventListener('submit', handleRegistration);

function handleRegistration(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const password = formData.get('password');
  const passwordConfirm = formData.get('password-confirm');
  const checkbox = formData.get('checkbox');

  console.log(name, email, phone, password, passwordConfirm, checkbox);
}
