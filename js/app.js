document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm);

  const deleteButton = document.querySelector('')
})

const handleForm = function(event){
  event.preventDefault();
  // console.log(`${event.target.title.value}, ${event.target.author.value}, ${event.target.category.value}` );

  const newArticle = document.createElement('div');
  newArticle.classList.add('reading-article');
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(newArticle);

  const newArticleTitle = document.createElement('h3');
  newArticleTitle.textContent = event.target.title.value;
  newArticle.appendChild(newArticleTitle);

  const newArticleAuthor = document.createElement('p');
  newArticleAuthor.textContent = event.target.author.value;
  newArticle.appendChild(newArticleAuthor);

  const newArticleCategory = document.createElement('p');
  newArticleCategory.textContent = event.target.category.value;
  newArticle.appendChild(newArticleCategory);

  const form = document.querySelector('#new-item-form');
  form.reset();
}
