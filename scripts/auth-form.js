document.querySelector('.js-form')
  .addEventListener('submit', handleLoginSubmit);

function handleLoginSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData.get('email');
  const password = formData.get('password');

  console.log(email, password);
}