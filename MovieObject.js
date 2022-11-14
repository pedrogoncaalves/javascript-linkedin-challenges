

function Movie(title, director, genre, release_year, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.release_year = release_year;
    this.rating = rating;
    this.getOverView = function() {
        console.log(`${title}, a ${genre} film directed by ${director} was released in ${release_year}.
        It receives a rating of ${rating}
        `)
    }
}

let titanic = new Movie('Titanic', 'Leo DiCaprio', 'Drama', '2000', '9.0').getOverView()

console.log(titanic)

