const form = document.querySelector('.feedback-form');
function formStyle() {
  form.style.display = 'flex';
  form.style.flexDirection = 'column';
  form.style.rowGap = '8px';
  form.style.alignItems = 'start';
  form.style.padding = '24px';
  form.style.maxWidth = '360px';
}
formStyle();

const fragment = document.createDocumentFragment();
function addElementsInFragment() {
  const labelEmail = document.createElement('label');
  labelEmail.textContent = 'Email';

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.name = 'email';
  inputEmail.autofocus = true;
  inputEmail.style.borderRadius = '8px';
  inputEmail.style.padding = '8px 16px';
  inputEmail.style.border = '1px solid #808080';

  const labelMessage = document.createElement('label');
  labelMessage.textContent = 'Message';

  const textArea = document.createElement('textarea');
  textArea.name = 'message';
  textArea.rows = '8';
  textArea.style.borderRadius = '8px';
  textArea.style.padding = '8px 16px';
  textArea.style.border = '1px solid #808080';

  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Submit';
  button.style.display = 'flex';
  button.style.padding = '8px 16px';
  button.style.justifyContent = 'center';
  button.style.alignItems = 'center';
  button.style.borderRadius = '8px';
  button.style.backgroundColor = '#4e75ff';
  button.style.border = 'none';
  button.style.color = '#fff';
  button.style.fontFamily = 'Montserrat';

  labelEmail.appendChild(inputEmail);
  labelMessage.appendChild(textArea);
  fragment.append(labelEmail, labelMessage, button);
}
addElementsInFragment();
form.appendChild(fragment);

const allLabel = document.querySelectorAll('label');
allLabel.forEach(label => {
  label.style.display = 'flex';
  label.style.flexDirection = 'column';
  label.style.width = '100%';
  label.style.rowGap = '8px';
  label.style.color = '#2E2F42';
  label.style.lineHeight = '24px';
  label.style.letterSpacing = '0.64px';
  label.style.fontFamily = 'Montserrat';
});

const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const button = document.querySelector('button');

function addHoverAndActive() {
  allLabel[0].addEventListener('mouseenter', function () {
    input.style.borderColor = '#000000';
  });

  allLabel[0].addEventListener('mouseleave', function () {
    input.style.borderColor = '#808080';
  });
  allLabel[1].addEventListener('mouseenter', function () {
    textArea.style.borderColor = '#000000';
  });

  allLabel[1].addEventListener('mouseleave', function () {
    textArea.style.borderColor = '#808080';
  });

  input.addEventListener('focus', function () {
    input.setAttribute('placeholder', 'Type area');
  });

  input.addEventListener('blur', function () {
    input.removeAttribute('placeholder');
  });
  textArea.addEventListener('focus', function () {
    textArea.setAttribute('placeholder', 'Type area');
  });

  textArea.addEventListener('blur', function () {
    textArea.removeAttribute('placeholder');
  });

  button.addEventListener('mouseenter', function () {
    button.style.backgroundColor = '#6C8CFF';
  });

  button.addEventListener('mouseleave', function () {
    button.style.backgroundColor = '#4E75FF';
  });
}
addHoverAndActive();

const formData = {
  email: '',
  message: '',
};
const localKey = 'feedback-form-state';

let savedData;
try {
  savedData = JSON.parse(localStorage.getItem(localKey)) ?? {};
} catch (error) {
  savedData = {};
}

input.value = savedData.email || '';
formData.email = savedData.email || '';
textArea.value = savedData.message || '';
formData.message = savedData.message || '';

form.addEventListener('input', event => {
  formData.email = input.value.trim();
  formData.message = textArea.value.trim();
  localStorage.setItem(localKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem(localKey);
  form.reset();
});
