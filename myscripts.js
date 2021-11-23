// SELECTORS

const collection = [];
const addbtn = document.getElementById("add");
// title = document.getElementById("title");
 var title;
const author = document.getElementById("author");
const bookContainer = document.getElementById("bookContainer");
let btnValue;

// OBJECT CONSTRUCTOR FUNCTION

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
      window.localStorage.setItem('book', JSON.stringify(Book));
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
  // btnValue = elements[i].value = i;
  // console.log(elements[i].value);
  elements[i].addEventListener('click', () => {
      console.log("remove clicked");
      console.log(title[i].innerHTML, bookCont[i]);
      bookCont[i].innerHTML = '';
      collection.splice(i);
      // bookCont[i].innerHTML = '';
    //   for(let i=0;i<title.length;i++){
    //     console.log(collection[i].title);
    //   }
    //  bookContainer.innerHTML = "";
    //  createBook(collection);
    //   console.log(collection);
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