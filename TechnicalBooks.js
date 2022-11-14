
import  Book  from './Availablebooks'

class TechnicalBook extends Book {
    constructor(edition) {
    this.edition = edition;
    }

    getEdition() {
        `The current version of this book is ${edition}`
    }
}

let mathBook = new TechnicalBook("Basic Math", "Professor Collins", 123919, 5).getEdition()

console.log(mathBook)