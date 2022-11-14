
    class Book {
    constructor(title, author, ISBN, numCopies) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this.numCopies = numCopies;
    }
   }
class TechnicalBook extends Book {
    constructor(title, author, ISBN, numCopies,edition) {
        super(title, author, ISBN, numCopies)
    this.edition = edition;
    }

    getEdition() {
      return  `The current version of this book is ${this.edition}`
    }
}

let mathBook = new TechnicalBook("Basic Math", "Professor Collins", 123919, 5, '3')

console.log(mathBook.getEdition())