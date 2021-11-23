// SELECTORS

const collection = [];
const addbtn = document.getElementById("add");
// title = document.getElementById("title");
 var title;
const author = document.getElementById("author");
const bookContainer = document.getElementById("bookContainer");
console.log(title);
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

removeBook = () => {
    console.log("remove clicked");
    console.log(bookContainer);
    console.log(collection);
    console.log(title);

 
  collection.filter((book, array) => {

    console.log(title); 
    for(let i=0;i<title.length;i++){
      console.log(title[i].innerText);
      if(book.title === title[i].innerText){
        collection.pop();
   }

    }
  
});

   bookContainer.innerHTML = "";
   createBook(collection);
    console.log(collection);
    
   };


const booksHtmlTemplate = (obj) =>
  `<label class="title">${obj.title}</label><br>
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
update = function() {
  var elements = document.getElementsByClassName("remove");
console.log(elements);
title = document.getElementsByClassName("title");
console.log(title);
 
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click',removeBook, false);
}

}




addbtn.addEventListener("click",addbook);
const removeBtn = document.querySelectorAll('.remove');
console.log(removeBtn);
removeBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
   alert(e.target);
  });
});