document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('bookForm');
  const bookDetailsDiv = document.getElementById('bookDetails');
  const bookTitleSpan = document.getElementById('bookTitle');
  const bookAuthorSpan = document.getElementById('bookAuthor');
  const bookPublicationYearSpan = document.getElementById('bookPublicationYear');

  form.addEventListener('submit', function (event) {
      event.preventDefault();

      const bookTitle = document.getElementById('title').value;
      const bookAuthor = document.getElementById('author').value;
      const bookPublicationYear = document.getElementById('publicationYear').value;

      bookTitleSpan.textContent = bookTitle;
      bookAuthorSpan.textContent = bookAuthor;
      bookPublicationYearSpan.textContent = bookPublicationYear;

      bookDetailsDiv.style.display = 'block';
  });
});
