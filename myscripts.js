// SELECTORS

const collection = [];
const addbtn = document.getElementById("add");
// title = document.getElementById("title");
 var title;
const author = document.getElementById("author");
const bookContainer = document.getElementById("bookContainer");
let btnValue;

// OBJECT CONSTRUCTOR FUNCTION

document.addEventListener ('DOMContentLoad', () => {
  if (localStorage === "") {
window.localStorage.getItem('book');
  }
})

function Book(title,author) {
    this.title = title;
    this.author = author;
  }

// FUNCTON DECLARATIONS

addbook = function() {
    const titleinput = document.getElementById("titleInput").value;
    const authorinput = document.getElementById("authorInput").value;
    if (!titleinput == '' && !authorinput == '') {
      const book = new Book(titleinput, authorinput);
      collection.push(book);}
      localStorage.setItem('books', JSON.stringify(collection));
    // console.log(collection);
    bookContainer.innerHTML = '';
    createBook(collection);
    update();
}

const booksHtmlTemplate = (obj) =>
  `<div class="bookCont">
  <label class="title">${obj.title}</label><br>
  <label id="author">${obj.author}</label><br>
  <button class='remove' type='button' value=''>Remove</button>
  <hr>
  </div>`;

const createBook = (arr) => {
  arr.forEach((element) => {
    // console.log(arr);
    const dinContent = document.createDocumentFragment();
    const newDiv = document.createElement('div');
    // console.log(element);
    // console.log(booksHtmlTemplate(element));
    newDiv.innerHTML = booksHtmlTemplate(element);
    localStorage.setItem('book', JSON.stringify(element));
    console.log(element.title, element.author);
    dinContent.appendChild(newDiv);
    bookContainer.appendChild(dinContent);
  });
};

// EVENT LISTENERS
update = function() {
  var elements = document.getElementsByClassName("remove");
console.log(elements);
title = document.getElementsByClassName("title");
console.log(title);
const bookCont = document.querySelectorAll('.bookCont');
console.log(bookCont);

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', () => {
      console.log("remove clicked");
      console.log(title[i].innerHTML, bookCont[i]);
      collection.splice(i, 1);
      console.log(collection);
      bookContainer.innerHTML = "";
      createBook(collection);
      update();
     });
}

}

addbtn.addEventListener("click",addbook);
// // const removeBtn = document.querySelectorAll('.remove');
// removeBtn.forEach((button) => {
//   button.addEventListener('click', (e) => {
//    alert(e.target);
//   });
// });