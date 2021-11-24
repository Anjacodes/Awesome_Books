// SELECTORS

let collection = [];
const addbtn = document.getElementById('add');
// title = document.getElementById('title');
const bookContainer = document.getElementById('bookContainer');
let storageObject = '';

const booksHtmlTemplate = (obj) => `<div class='bookCont'>
  <label class='title'>${obj.title}</label><br>
  <label id='author'>${obj.author}</label><br>
  <button class='remove' type='button' onclick= value=''>Remove</button>
  <hr>
  </div>`;

const createBook = (arr) => {
  arr.forEach((element) => {
    const dinContent = document.createDocumentFragment();
    const newDiv = document.createElement('div');
    newDiv.innerHTML = booksHtmlTemplate(element);
    dinContent.appendChild(newDiv);
    bookContainer.appendChild(dinContent);
  });
};

const update = () => {
  const elements = document.getElementsByClassName('remove');
  const bookCont = document.querySelectorAll('.bookCont');
  collection = JSON.parse(localStorage.getItem('books'));
  Array.from(elements).forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (bookCont[index].parentNode) {
        bookCont[index].parentNode.removeChild(bookCont[index]);
        collection.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(collection));
      }
    });
  });
};

// OBJECT CONSTRUCTOR FUNCTION

window.addEventListener('load', () => {
  storageObject = JSON.parse(localStorage.getItem('books'));
  if (storageObject) {
    createBook(storageObject);
    update();
  } else {
    bookContainer.innerHTML = '';
  }
});

function Book(title, author) {
  this.title = title;
  this.author = author;
}

// FUNCTON DECLARATIONS

const addbook = function () {
  const titleinput = document.getElementById('titleInput').value;
  const authorinput = document.getElementById('authorInput').value;
  storageObject = JSON.parse(localStorage.getItem('books'));
  if (titleinput !== '' && authorinput !== '') {
    const book = new Book(titleinput, authorinput);
    if (storageObject === '') {
      storageObject.push(book);
      localStorage.setItem('books', JSON.stringify(storageObject));
      bookContainer.innerHTML += booksHtmlTemplate(book);
    } else {
      collection.push(book);
      localStorage.setItem('books', JSON.stringify(collection));
      bookContainer.innerHTML += booksHtmlTemplate(book);
    }
    update();
  }
};

// EVENT LISTENERS

addbtn.addEventListener('click', addbook);