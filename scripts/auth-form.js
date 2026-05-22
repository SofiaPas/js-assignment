document.querySelector('.js-form')
  .addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.querySelector('.js-email').value;
    const password = document.querySelector('.js-password').value;

    console.log(email, password);
  });