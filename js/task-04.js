const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);

const spanValueRef = document.querySelector('#value');

let counterValue = 0;

function updateCounterInterface() {
  spanValueRef.textContent = counterValue;
}

btnIncrementRef.addEventListener('click', () => {
  counterValue += 1;
  updateCounterInterface();
});

btnDecrementRef.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterInterface();
});
