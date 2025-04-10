const Book = require('./Book');

class EBook extends Book {
	constructor(title, author, year, fileFormat) {
		super(title, author, year);
		this._fileFormat = fileFormat;
	}

	get fileFormat() {
		return this._fileFormat;
	}

	set fileFormat(newFormat) {
		if (typeof newFormat !== 'string' || newFormat.trim() === '') {
			throw new Error('The file format must be a non-empty string!');
		}
		this._fileFormat = newFormat;
	}

	printInfo() {
		console.log(`${this._title} by ${this._author}, published in ${this._year}. Format: ${this._fileFormat}.`);
	}

	static createFromBook(book, fileFormat) {
		if (!(book instanceof Book)) {
			throw new Error('The provided object must be an instance of the Book class!');
		}
		return new EBook(book.title, book.author, book.year, fileFormat);
	}
}
// const book1 = new Book("The Little Prince", "Antoine de Saint-Exupéry", 1943);
// const book2 = new Book("The Notebook", "Nicholas Sparks", 1996);
// const book3 = new Book("1984", "George Orwell", 1949);
// const ebook1 = new EBook("Empire of the Angels", "Bernard Werber", 2000, "PDF");

// const books = [book1, book2, book3, ebook1];

// const oldestBook = Book.findOldestBook(books);
// console.log("The oldest book:");
// oldestBook.printInfo();

// const ebookFromBook = EBook.createFromBook(book1, "EPUB");
// console.log("New EBook created:");
// ebookFromBook.printInfo();

module.exports = EBook;
