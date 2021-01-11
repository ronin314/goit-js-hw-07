const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const addInput = (event) => {
  if (event.target.value === "") {
    outputRef.textContent = "незнакомец";
  } else {
    outputRef.textContent = event.target.value;
  }
};

inputRef.addEventListener("input", addInput);
