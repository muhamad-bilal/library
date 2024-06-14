const myLibrary = [];

// Book Constructor (Defines book properties)
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Toggle Read Status (Prototype method)
Book.prototype.toggleReadStatus = function() {
    this.isRead = !this.isRead;
};

// Add Book to Library (Function to handle user input)
function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').checked;

    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    displayBooks();
}

// Display Books (Renders books to the page)
function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Clear existing books

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        // Display book details... (Customize to your liking)
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.isRead ? 'Read' : 'Not Read'}</p>
        `;

        // Add buttons (Remove and Toggle Read)
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeBook(index));
        bookDiv.appendChild(removeButton);

        const toggleReadButton = document.createElement('button');
        toggleReadButton.textContent = 'Toggle Read';
        toggleReadButton.addEventListener('click', () => {
            book.toggleReadStatus();
            displayBooks();
        });
        bookDiv.appendChild(toggleReadButton);

        bookList.appendChild(bookDiv);
    });
}

// Remove Book
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// Event Listeners (For form and "New Book" button)
const newBookForm = document.getElementById('newBookForm');
newBookForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    addBookToLibrary();
});

const newBookButton = document.getElementById('newBookButton');
newBookButton.addEventListener('click', () => {
    // Show or toggle the form's visibility (e.g., with a class)
});
