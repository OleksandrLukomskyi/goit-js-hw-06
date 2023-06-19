function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButtonRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const colorSpanRef = document.querySelector('.color');

changeColorButtonRef.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  colorSpanRef.textContent = randomColor;
});
