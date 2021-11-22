// SELECTORS

const collection = [];
const addbtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const title = document.getElementById("title");
const author = document.getElementById("author");
const bookContainer = document.getElementById("bookContainer");

// OBJECT CONSTRUCTOR FUNCTION

function Book(title,author) {
    this.title = title;
    this.author = author;
  }

//   const book = new Book('Eagle', 'Talon TSi');
//   collection.push(book);
// console.log(collection);

// FUNCTON DECLARATIONS

addbook = function() {
    const titleinput = document.getElementById("titleInput").value;
    const authorinput = document.getElementById("authorInput").value;
    if (!titleinput == '' && !authorinput == '') {
      const book = new Book(titleinput, authorinput)
      collection.push(book);}
    console.log(collection);
    createBook(collection);
}

removeBook = () => {
    console.log("remove clicked");
  collection.filter((book, index, array) => {
    if(book.title === title.innerText){
        array.pop();
    console.log(book.title);}
    console.log(collection);
  }
  )};

removeBook();

const booksHtmlTemplate = (obj) =>
  `<label id="title">${obj.title}</label><br>
  <label id="author">${obj.author}</label><br>
  <input id="remove" type="button" value="Remove">
  <hr>`;

const createBook = (arr) => {
  arr.forEach((element) => {
    console.log(arr);
    const dinContent = document.createDocumentFragment();
    const newDiv = document.createElement('div');
    console.log(element);
    console.log(booksHtmlTemplate(element));
    newDiv.innerHTML = booksHtmlTemplate(element);
    dinContent.appendChild(newDiv);
    bookContainer.appendChild(dinContent);
    console.log(element, dinContent, newDiv.innerHTML);
  });
};

// EVENT LISTENERS

addbtn.addEventListener("click",addbook);
removeBtn.addEventListener("click", removeBook);
// const titleinput = document.getElementById("titleInput").value;
// const authorinput = document.getElementById("authorInput").value;
// const book2 = new Book(titleinput, authorinput);
// collection.push(book2);
// console.log(collection);