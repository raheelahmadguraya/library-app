let myLibrary = [];

class Book {
    constructor(title, author, numOfPages, readStatus) {
        this.title = title;
        this.author = author;
        this.numOfPages = numOfPages;
        this.readStatus = readStatus;
    }
}

function addBookToLibrary(title, author, numOfPages, readStatus) {
    const book1 = new Book(title, author, numOfPages, readStatus);
    myLibrary.push(book1);
};

addBookToLibrary("test", "Test", 56, 1);

console.log(myLibrary);

function removeBook() {

}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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