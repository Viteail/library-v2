const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');

const addBookButton = document.querySelector('#addbook-btn');
const submitButton = document.querySelector('#submit');

const modal = document.querySelector('.modal');

const booksWrapper = document.querySelector('.books-wrapper');

let library = [];

const read_Status = {
  read: 'read',
  not: 'not read',
};

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
    ? (readInput.value = read_Status.read)
    : (readInput.value = read_Status.not)
);

submitButton.addEventListener('click', (e) => {
  modal.classList.add('invisible');
  addBookToLibrary();
  e.preventDefault();
});

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
  createAndDisplayBook(book);
};

const createAndDisplayBook = (book) => {
  const bookContainer = document.createElement('div');
  bookContainer.classList.add('book-container');

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('text-wrapper');

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('button-wrapper');

  const titleText = document.createElement('div');
  titleText.classList.add('text-container');
  titleText.textContent = '"' + `${book.title}` + '"';

  const authorText = document.createElement('div');
  authorText.classList.add('text-container');
  authorText.textContent = `by ${book.author}`;

  const pagesText = document.createElement('div');
  pagesText.classList.add('text-container');
  pagesText.textContent = `${book.pages} pages`;

  const readButtonContainer = document.createElement('div');
  readButtonContainer.classList.add('button-container');

  const readButton = document.createElement('button');
  readButton.classList.add('read-button');
  readButton.textContent = `${book.read}`;

  const removeButtonContainer = document.createElement('div');
  removeButtonContainer.classList.add('button-container');

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.textContent = 'Remove';

  booksWrapper.appendChild(bookContainer);
  bookContainer.appendChild(textWrapper);
  bookContainer.appendChild(buttonWrapper);
  textWrapper.appendChild(titleText);
  textWrapper.appendChild(authorText);
  textWrapper.appendChild(pagesText);
  buttonWrapper.appendChild(readButtonContainer);
  buttonWrapper.appendChild(removeButtonContainer);
  readButtonContainer.appendChild(readButton);
  removeButtonContainer.appendChild(removeButton);

  toggleRead(readButton, book);
  removeBook(removeButton, bookContainer, book);
};

const toggleRead = (readButton, book) => {
  if (book.read === read_Status.read) {
    readButton.classList.add('read');
  }

  readButton.addEventListener('click', () => {
    if (book.read === read_Status.read) {
      readButton.classList.remove('read');
      book.read = read_Status.not;
    } else {
      readButton.classList.add('read');
      book.read = read_Status.read;
    }
    readButton.textContent = book.read;
  });
};

const removeBook = (removeButton, bookContainer, book) => {
  removeButton.addEventListener('click', () => {
    bookContainer.remove();
    library.splice(library.indexOf(book), 1);
  });
};
