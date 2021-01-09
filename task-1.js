const categoriesListRef = document.querySelector('#categories');
const itemRef = document.querySelectorAll('.item');
console.log(`В списке ${itemRef.length} категории.`);

const categoryTitleRef = categoriesListRef.querySelectorAll('.item h2');
const eachCategoryListRef = categoriesListRef.querySelectorAll('.item ul');

categoryTitleRef.forEach((title) => {
    console.log(`Категория: ${title.textContent} 
Количество элементов: ${title.parentNode.lastElementChild.children.length}`);
});
