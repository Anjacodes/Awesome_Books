const collection = [];

function Book(title,author) {
    this.title = title;
    this.author = author;
    
  }
  const book = new Book('Eagle', 'Talon TSi');
  collection.push(book);
console.log(collection);
const addbtn = document.getElementById("add");

addbook = function() {
    const titleinput = document.getElementById("titleInput").value;
    const authorinput = document.getElementById("authorInput").value;
    const book = new Book(titleinput, authorinput);
    collection.push(book);
    console.log("clicked");
    console.log(collection);
}
addbtn.addEventListener("click",addbook);
const titleinput = document.getElementById("titleInput").value;
const authorinput = document.getElementById("authorInput").value;
const book2 = new Book(titleinput, authorinput);
collection.push(book2);
console.log(collection);