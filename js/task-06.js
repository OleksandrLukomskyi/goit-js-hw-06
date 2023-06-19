const dataLengthRef = document.querySelector('#validation-input');
dataLengthRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (
    event.currentTarget.value.length === Number(dataLengthRef.dataset.length)
  ) {
    dataLengthRef.classList.add('valid');
    dataLengthRef.classList.remove('invalid');
  } else dataLengthRef.classList.add('invalid');
  dataLengthRef.classList.remove('valid');
}
