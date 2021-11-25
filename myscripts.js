class BookManager {
  collection = [];

  Book = {
    title: '',
    author: '',
  };

  addbtn;

  bookmgr;

  bookContainer;

  storageObject;

  constructor() {
    this.storageObject = '';
    this.addbtn = document.getElementById('add');
    this.addbtn.addEventListener('click', this.addbook);
    this.bookContainer = document.getElementById('bookContainer');
    window.addEventListener('load', () => {
      bookmgr.storageObject = JSON.parse(localStorage.getItem('books'));
      if (bookmgr.storageObject) {
        bookmgr.createBook(bookmgr.storageObject);
        bookmgr.update();
      } else {
        bookmgr.bookContainer.innerHTML = '';
      }
    });
  }

  addBooks(book) {
    this.collection.push(book);
  }

  getBook(i) {
    return this.collection[i];
  }

  addbook = () => {
    const titleinput = document.getElementById('titleInput').value;
    const authorinput = document.getElementById('authorInput').value;
    bookmgr.storageObject = JSON.parse(localStorage.getItem('books'));
    if (titleinput !== '' && authorinput !== '') {
      bookmgr.Book.title = titleinput;
      bookmgr.Book.author = authorinput;
      const bookCheck = bookmgr.Book;
      const book = bookCheck;
      if (bookmgr.storageObject === '') {
        bookmgr.storageObject.push(book);
        localStorage.setItem('books', JSON.stringify(bookmgr.storageObject));
        bookmgr.bookContainer.innerHTML += bookmgr.booksHtmlTemplate(book);
      } else {
        bookmgr.addBooks(book);
        localStorage.setItem('books', JSON.stringify(bookmgr.collection));
        bookmgr.bookContainer.innerHTML += bookmgr.booksHtmlTemplate(book);
      }
      bookmgr.update();
    }
  }

  createBook = (arr) => {
    arr.forEach((element) => {
      const dinContent = document.createDocumentFragment();
      const newDiv = document.createElement('div');
      newDiv.innerHTML = bookmgr.booksHtmlTemplate(element);
      dinContent.appendChild(newDiv);
      bookmgr.bookContainer.appendChild(dinContent);
    });
  }

 update = () => {
   const elements = document.getElementsByClassName('remove');
   const bookCont = document.querySelectorAll('.bookCont');
   bookmgr.collection = JSON.parse(localStorage.getItem('books'));
   Array.from(elements).forEach((btn, index) => {
     btn.addEventListener('click', () => {
       if (bookCont[index].parentNode) {
         bookCont[index].parentNode.removeChild(bookCont[index]);
         bookmgr.collection.splice(index, 1);
         localStorage.setItem('books', JSON.stringify(bookmgr.collection));
       }
     });
   });
 }

 booksHtmlTemplate = (obj) => `<div class='bookCont'>
 <label class='title'>${obj.title}</label><br>
 <label id='author'>${obj.author}</label><br>
 <button class='remove' type='button' onclick= value=''>Remove</button>
 <hr>
 </div>`;
}

let bookmgr = new BookManager();
/*eslint-disable */
const DateTime = luxon.DateTime;
/* eslint-enable */

const now = DateTime.now();
const displayDate = now.toLocaleString(DateTime.DATETIME_MED);

const date = document.querySelector('.date');
const list = document.getElementById('list');
const addNew = document.getElementById('addNew');
const contact = document.getElementById('contact');
const contactCont = document.querySelector('.contact');
const bookList = document.getElementById('bookList');
const addBook = document.querySelector('.formCont');

date.innerHTML = displayDate;

// ADD EVENT LISTENERS TO NAV BUTTONS

list.addEventListener('click', () => {
  bookList.style.display = 'flex';
  addBook.style.display = 'none';
  contactCont.style.display = 'none';
});

addNew.addEventListener('click', () => {
  addBook.style.display = 'flex';
  bookList.style.display = 'none';
  contactCont.style.display = 'none';
});

contact.addEventListener('click', () => {
  contactCont.style.display = 'flex';
  bookList.style.display = 'none';
  addBook.style.display = 'none';
});
