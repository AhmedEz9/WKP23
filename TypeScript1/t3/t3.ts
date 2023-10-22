type Book = {
    title: string;
    author: string;
    publicationYear: number;
  };

  function promptForBook(): Book {
    const bookTitle = prompt("Enter book title:");
    const bookAuthor = prompt("Enter author:");
    const bookPublicationYear = parseInt(prompt("Enter publication year:"));

    const book: Book = {
      title: bookTitle,
      author: bookAuthor,
      publicationYear: bookPublicationYear,
    };

    return book;
  }

  const bookDetails = promptForBook();
  console.log("Book Details:");
  console.log(`Title: ${bookDetails.title}`);
  console.log(`Author: ${bookDetails.author}`);
  console.log(`Publication Year: ${bookDetails.publicationYear}`);

  export {};
