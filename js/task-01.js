const listOfCategoriesRef = document.querySelector('#categories');
const items = listOfCategoriesRef.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);

  const categoryItems = item.querySelectorAll('li');
  console.log(`Elements: ${categoryItems.length}`);
});
