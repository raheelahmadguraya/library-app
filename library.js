let myLibrary = [];

class Book {
  constructor (title, author, numOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readStatus = readStatus;
  }
}

function addBookToLibrary (title, author, numOfPages, readStatus) {
  const book1 = new Book(title, author, numOfPages, readStatus);
  myLibrary.push(book1);
  displayBook(book1);
};

function displayBook (book1) {

  const bookCard = document.createElement('div');
  bookCard.classList.add('bookCard');
  for (key in book1){
    const p = document.createElement("p");
    p.innerHTML = book1[key];
    bookCard.appendChild(p);
  }
  const books = document.getElementById("bookCards");
  books.prepend(bookCard);
}

function removeBook() {

}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var addbtn = document.getElementById("submit");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "grid";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

addbtn.onclick = function() {
  modal.style.display = "none";
}

document.querySelector('form').addEventListener('submit', (e) => {
  const data = Object.fromEntries(new FormData(e.target).entries());
  if (data.readStatus == "on"){
    data.readStatus = 1;
  } else {
    data.readStatus = 0;
  }
  addBookToLibrary(data.title, data.author, data.numOfPages, data.readStatus);
  document.getElementById("basic-form").reset();
});

