const form = document.querySelector('.form');
const password1 = document.getElementById('password');
const password2 = document.getElementById('confirm-password');
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('.message');
let isValid = false;
let passwordsMatch = false;

const validateForm = function () {
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = 'Please fill out all fields';
    message.style.color = '#e74c3c';
    messageContainer.style.borderColor = '#e74c3c';
    return;
  }
  if (password1.value === password2.value) {
    passwordsMatch = true;
    password1.style.borderColor = '#229f1e';
    password2.style.borderColor = '#229f1e';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match';
    message.style.color = '#e74c3c';
    messageContainer.style.borderColor = '#e74c3c';
    password1.style.borderColor = '#e74c3c';
    password2.style.borderColor = '#e74c3c';
    return;
  }
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = '#229f1e';
    messageContainer.style.borderColor = '#229f1e';
  }
};

const storeFormData = function () {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
};

const processFormData = function (e) {
  e.preventDefault();
  validateForm();
  if (isValid && passwordsMatch) storeFormData();
};

form.addEventListener('submit', processFormData);
