const Book = require('./Book');
const EBook = require('./EBook');

const book1 = new Book('The Little Prince', 'Antoine de Saint-Exupéry', 1943);
const book2 = new Book('The Notebook', 'Nicholas Sparks', 1996);
const book3 = new Book('1984', 'George Orwell', 1949);
const ebook1 = new EBook('Empire of the Angels', 'Bernard Werber', 2000, 'PDF');

book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook1.printInfo();

const books = [book1, book2, book3, ebook1];

const oldestBook = Book.findOldestBook(books);
console.log('The oldest book:');
oldestBook.printInfo();

const ebookFromBook = EBook.createFromBook(book1, 'EPUB');
console.log('New EBook created:');
ebookFromBook.printInfo();
