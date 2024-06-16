document.addEventListener("DOMContentLoaded", () => {
    const bookInput = document.getElementById("book-input");
    const bookLists = document.getElementById("books");
    const addBookBtn = document.getElementById('add-book');
    const removeBookBtn = document.getElementById('remove-book');
    const favoriteBookBtn = document.getElementById('favorite-book'); // Added this line
    const searchBar = document.getElementById('search-bar'); // Added this line

    function addBook() {
        const bookName = bookInput.value.trim();
        if (bookName) {
            const li = document.createElement("li");
            li.textContent = bookName;
            li.addEventListener('click', () => {
                li.classList.toggle('selected');
            });
            bookLists.appendChild(li); // Add the new list item to the book list
            bookInput.value = ''; // Clear the input field
        }
    }

    // Function to remove selected books
    function removeBook() {
        const selectedBooks = document.querySelectorAll('#books li.selected');
        selectedBooks.forEach(book => book.remove());
    }

    // Function to mark selected books as favorite
    function favoriteBook() {
        const selectedBooks = document.querySelectorAll('#books li.selected');
        selectedBooks.forEach(book => book.classList.toggle('favorite'));
    }

    // Function to filter books
    function searchBooks() {
        const query = searchBar.value.toLowerCase();
        const books = document.querySelectorAll('#books li');
        books.forEach(book => {
            if (book.textContent.toLowerCase().includes(query)) {
                book.style.display = '';
            } else {
                book.style.display = 'none';
            }
        });
    }

    addBookBtn.addEventListener('click', addBook);
    removeBookBtn.addEventListener('click', removeBook);
    favoriteBookBtn.addEventListener('click', favoriteBook);
    searchBar.addEventListener('input', searchBooks);
});
