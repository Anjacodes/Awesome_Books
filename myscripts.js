// SELECTORS

const collection = [];
const addbtn = document.getElementById('add');
// title = document.getElementById('title');
const bookContainer = document.getElementById('bookContainer');
let storageObject;

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
  storageObject = JSON.parse(localStorage.getItem('books'));
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].addEventListener('click', () => {
      // console.log('remove clicked');
      if (bookCont[i].parentNode) {
        bookCont[i].parentNode.removeChild(bookCont[i]);
        storageObject.splice(i, 1);
        localStorage.setItem('books', JSON.stringify(storageObject));
      }
    });
  }
};

// OBJECT CONSTRUCTOR FUNCTION

window.addEventListener('load', () => {
  storageObject = JSON.parse(localStorage.getItem('books'));
  if (storageObject !== '') {
    createBook(storageObject);
  update();
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
    storageObject.push(book);
    console.log(storageObject);
    localStorage.setItem('books', JSON.stringify(storageObject));
    bookContainer.innerHTML += booksHtmlTemplate(book);
    update();
  }
};

// EVENT LISTENERS

addbtn.addEventListener('click', addbook);