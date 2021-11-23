// SELECTORS

const collection = [];
const addbtn = document.getElementById("add");
const title = document.getElementById("title");
const author = document.getElementById("author");
const bookContainer = document.getElementById("bookContainer");

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
}

removeBook = () => {
    console.log("remove clicked");
    console.log(bookContainer);
  collection.filter((book, array) => {
    if(book.title === title.innerText){
        array.pop();
   }
});

   bookContainer.innerHTML = "";
   createBook(collection);
    console.log(collection);
   };


const booksHtmlTemplate = (obj) =>
  `<label id="title">${obj.title}</label><br>
  <label id="author">${obj.author}</label><br>
  <button class="remove" type="button">Remove</button>
  <hr>`;

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

addbtn.addEventListener("click",addbook);
const removeBtn = document.querySelectorAll('.remove');
console.log(removeBtn);
removeBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
   alert(e.target);
  });
});