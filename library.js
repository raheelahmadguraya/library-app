let myLibrary = [];
addFunctionality();

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
  displayBook(book1, myLibrary);
};

function displayBook (book1, myLibrary) {

  const bookCard = document.createElement('div');
  const index = myLibrary.length - 1;

  bookCard.classList.add('bookCard');
  bookCard.setAttribute('id', index);

  for (key in book1){
    const p = document.createElement("p");
    p.innerHTML = book1[key];
    bookCard.appendChild(p);
  }

  const bookCardbtns = document.createElement("div");
  bookCardbtns.classList.add("bookCardbtns");
  const readStatusbtn = document.createElement("button");
  readStatusbtn.classList.add("readStatusbtn");
  if (book1.readStatus == 1) {
    readStatusbtn.innerHTML = '<span class="material-symbols-outlined">check_box</span><span style="display: none;" class="material-symbols-outlined">check_box_outline_blank</span><p>Read</p>'
  }else {
    readStatusbtn.innerHTML = '<span style="display: none;" class="material-symbols-outlined">check_box</span><span class="material-symbols-outlined">check_box_outline_blank</span><p>Read</p>'
  }
  bookCardbtns.appendChild(readStatusbtn);
  const rmbtn = document.createElement("button");
  rmbtn.classList.add("rmbtn");
  rmbtn.innerHTML = '<span class="material-symbols-outlined">delete</span>'
  bookCardbtns.appendChild(rmbtn);

  bookCard.appendChild(bookCardbtns);

  const books = document.getElementById("bookCards");
  books.prepend(bookCard);
  addFunctionality();
}

function removeBook(bookCard) {
  bookCard.remove();
}

function changeReadStatus () {

}

function addFunctionality () {
  const rmbtn = document.querySelectorAll('.rmbtn');

  rmbtn.forEach(el => el.addEventListener('click', event => {
    const book = event.target.parentElement.parentElement.parentElement;
      // Get the modal
      var cdmodal = document.getElementById("confirmDeleteModal");
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[1];

      // When the user clicks the button, open the modal 
      cdmodal.style.display = "grid";

      document.getElementById("yes").onclick = function () {
        cdmodal.style.display = "none";
        removeBook(book);
      }

      document.getElementById("no").onclick = function () {
        cdmodal.style.display = "none";
      }

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        cdmodal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == cdmodal) {
          cdmodal.style.display = "none";
        }
      }
  }));

  const toggleReadbtn = document.querySelectorAll('.readStatusbtn');

  toggleReadbtn.forEach(el => el.addEventListener('click', event => {
    const book = event.target.parentElement.parentElement.parentElement;
    const index = book.id;
    const toggleIcon = event.target;
    console.log(toggleIcon);
    if (myLibrary[index].readStatus == 1){
      myLibrary[index].readStatus = 0;
      toggleIcon.innerHTML = 'check_box_outline_blank';
    } else {
      myLibrary[index].readStatus = 1;
      toggleIcon.innerHTML = 'check_box';
    }
    console.table(myLibrary);
  }));
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

document.querySelector('form').addEventListener('submit', (e) => {
  const data = Object.fromEntries(new FormData(e.target).entries());
  if (data.readStatus == "on"){
    data.readStatus = 1;
  } else {
    data.readStatus = 0;
  }
  addBookToLibrary(data.title, data.author, data.numOfPages, data.readStatus);
  document.getElementById("basic-form").reset();
  modal.style.display = "none";
});