const forms = document.querySelectorAll('.js-form');

forms.forEach(form => {
  form.addEventListener('submit', handleLoginSubmit);

  function handleLoginSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const name = formData.get('name');
    const passwordConfirm = formData.get('password-confirm');

    console.log(email, password, name, passwordConfirm);
  }
});