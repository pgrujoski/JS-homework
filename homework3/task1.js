//Zadaca 1

let books = [
    { title: "Book 1", author: "Author A", year: 2000 },
    { title: "Book 2", author: "Author B", year: 2010 },
    { title: "Book 3", author: "Author C", year: 2020 },
]
//a
books.forEach(function (book) {
    console.log(book.author);
});

//b
let bookAfter2000 = books.find(book => book.year > 2000);
console.log(bookAfter2000);