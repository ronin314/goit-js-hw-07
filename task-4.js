const counterRef = document.querySelector("#counter");
const counterValueRef = document.querySelector("#value");
let counterValue = Number(counterValueRef.textContent);
const incrementRef = counterRef.querySelector(
  'button[data-action="increment"]'
);
const decrementRef = counterRef.querySelector(
  'button[data-action="decrement"]'
);

const increment = () => (counterValueRef.textContent = counterValue += 1);
const decrement = () => (counterValueRef.textContent = counterValue -= 1);

incrementRef.addEventListener("click", increment);
decrementRef.addEventListener("click", decrement);
