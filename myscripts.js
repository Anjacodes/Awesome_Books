// SELECTORS

const collection = [];
const addbtn = document.getElementById('add');
// title = document.getElementById('title');
 var title;
const author = document.getElementById('author');
const bookContainer = document.getElementById('bookContainer');
let storageObject ;

// OBJECT CONSTRUCTOR FUNCTION

window.addEventListener ('load', () => {
  storageObject = JSON.parse(localStorage.getItem('books'));
  createBook(storageObject);
  update();
})

function Book(title,author) {
  this.title = title;
  this.author = author;
}

// FUNCTON DECLARATIONS

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

addbook = function () {
  const titleinput = document.getElementById('titleInput').value;
  const authorinput = document.getElementById('authorInput').value;
  if (!titleinput == '' && !authorinput == '') {
    const book = new Book(titleinput, authorinput);
    collection.push(book);
      localStorage.setItem('books', JSON.stringify(collection));
    if (bookContainer.innerHTML !== '') {
      bookContainer.innerHTML += booksHtmlTemplate(book);
      update();
    } else {
      bookContainer.innerHTML = '';
      createBook(storageObject);
      update();
    }
  }

};

// EVENT LISTENERS
update = () => {
  const elements = document.getElementsByClassName('remove');
  title = document.getElementsByClassName('title');
  const bookCont = document.querySelectorAll('.bookCont');

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', () => {
      // console.log('remove clicked');
      if (bookCont[i].parentNode) {
        bookCont[i].parentNode.removeChild(bookCont[i]);
      }
      collection.splice(i, 1);
      localStorage.setItem('books', JSON.stringify(collection));
    });
  }

};

addbtn.addEventListener('click', addbook);