// SELECTORS

const collection = [];
const addbtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const title = document.getElementById("title");
const author = document.getElementById("author");

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
    console.log("clicked");
    console.log(collection);
    title.innerText = titleinput;
    author.innerText = authorinput;
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

// EVENT LISTENERS
console.log(title.value);
filertitle = () => {
       console.log(title.value);
       //  if(collection.Book.title === )
  

}

addbtn.addEventListener("click",addbook);
removeBtn.addEventListener("click", removeBook);
// const titleinput = document.getElementById("titleInput").value;
// const authorinput = document.getElementById("authorInput").value;
// const book2 = new Book(titleinput, authorinput);
// collection.push(book2);
// console.log(collection);