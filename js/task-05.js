const inputTextRef = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputTextRef.addEventListener('input', event => {
  nameOutput.textContent = event.currentTarget.value;
});
