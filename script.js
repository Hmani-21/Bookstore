document.addEventListener("DOMContentLoaded", function () {
    fetchBooks("javascript"); 
});

function fetchBooks(query) {
    const apiUrl = `https://openlibrary.org/search.json?q=${query}&limit=10`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayBooks(data.docs);
        })
        .catch(error => console.error("Error fetching books:", error));
}

function displayBooks(books) {
    const booksContainer = document.getElementById("booksContainer");
    booksContainer.innerHTML = ""; 

    books.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");

        const title = book.title ? book.title : "Unknown Title";
        const author = book.author_name ? book.author_name.join(", ") : "Unknown Author";
        const coverId = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "https://via.placeholder.com/150";

        bookElement.innerHTML = `
            <img src="${coverId}" alt="Book Cover">
            <h3>${title}</h3>
            <p><strong>Author:</strong> ${author}</p>
        `;

        booksContainer.appendChild(bookElement);
    });
}

function searchBooks() {
    const query = document.getElementById("searchBox").value;
    if (query.length > 2) {
        fetchBooks(query);
    }
}
