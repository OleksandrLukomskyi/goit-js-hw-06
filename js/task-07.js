const fontSizeControlRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');
spanTextRef.style.fontSize = fontSizeControlRef.value + 'px';
fontSizeControlRef.addEventListener('input', onChangeFontSize);

function onChangeFontSize() {
  spanTextRef.style.fontSize = fontSizeControlRef.value + 'px';
}
