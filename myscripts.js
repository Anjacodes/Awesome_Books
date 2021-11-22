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
  collection.filter((book, index, newColl) => { console.log(book[index].title);}
  )};

removeBook();

// EVENT LISTENERS

addbtn.addEventListener("click",addbook);
removeBtn.addEventListener("click", removeBook);
// const titleinput = document.getElementById("titleInput").value;
// const authorinput = document.getElementById("authorInput").value;
// const book2 = new Book(titleinput, authorinput);
// collection.push(book2);
// console.log(collection);