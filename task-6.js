const InputRef = document.querySelector("#validation-input");

const checkInput = (event) => {
  if (
    event.target.value.length === Number(InputRef.getAttribute("data-length"))
  ) {
    InputRef.classList.add("valid");
    InputRef.classList.remove("invalid");
  } else {
    InputRef.classList.add("invalid");
    InputRef.classList.remove("valid");
  }
};

InputRef.addEventListener("blur", checkInput);
