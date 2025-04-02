class Book {
	constructor(title, author, year) {
		this._title = title;
		this._author = author;
		this._year = year;
	}

	get title() {
		return this._title;
	}

	set title(newTitle) {
		if (typeof newTitle !== 'string' || newTitle.trim() === '') {
			throw new Error('The book title must be a non-empty string!');
		}
		this._title = newTitle;
	}

	get author() {
		return this._author;
	}

	set author(newAuthor) {
		if (typeof newAuthor !== 'string' || newAuthor.trim() === '') {
			throw new Error("The author's name must be a non-empty string!");
		}
		this._author = newAuthor;
	}

	get year() {
		return this._year;
	}

	set year(newYear) {
		if (!Number.isInteger(newYear) || newYear < 0) {
			throw new Error('Year must be a positive integer!');
		}
		this._year = newYear;
	}

	printInfo() {
		console.log(`${this._title} by ${this._author}, published in ${this._year}.`);
	}

	static findOldestBook(books) {
		return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest));
	}
}
// const book1 = new Book("The Little Prince", "Antoine de Saint-Exupéry", 1943);
// const book2 = new Book("The Notebook", "Nicholas Sparks", 1996);
// const book3 = new Book("1984", "George Orwell", 1949);

// book1.printInfo();
// book2.printInfo();
// book3.printInfo();

module.exports = Book;
