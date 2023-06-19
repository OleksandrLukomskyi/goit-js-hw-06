const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsRef = document.querySelector('#ingredients');

// const elements = ingredients.map(ingredient => {
//   const listItem = document.createElement('li');
//   listItem.textContent = ingredient;
//   listItem.classList.add('item');
//   return listItem;
// });

// listIngredientsRef.append(...elements);

const createAddIngredientsOptions = options => {
  return options.map(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');
    return listItem;
  });
};

const elements = createAddIngredientsOptions(ingredients);
listIngredientsRef.append(...elements);
