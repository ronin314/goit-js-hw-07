const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const addListItem = (item) => {
  const ingredientsItemRef = document.createElement("li");
  ingredientsItemRef.textContent = item;

  return ingredientsItemRef;
};

const ingredientsList = ingredients.map((item) => addListItem(item));
const ingredientsListRef = document.querySelector("#ingredients");
ingredientsListRef.append(...ingredientsList);

console.log(ingredientsListRef);
