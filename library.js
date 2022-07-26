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

