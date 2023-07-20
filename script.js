const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');

const addBookButton = document.querySelector('#addbook-btn');
const submitButton = document.querySelector('#submit');

const modal = document.querySelector('.modal');

let library = [];

addBookButton.addEventListener('click', () =>
  modal.classList.remove('invisible')
);

window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.add('invisible');
  }
};

readInput.addEventListener('change', () =>
  readInput.checked
    ? (readInput.value = 'read')
    : (readInput.value = 'not read')
);

submitButton.addEventListener('click', () => addBookToLibrary());

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBookToLibrary = () => {
  const book = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.value
  );

  library.push(book);
};
