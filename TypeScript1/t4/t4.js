function createElectronicDevice() {
  const brand = prompt("Enter brand of electronic device:");
  const model = prompt("Enter model of electronic device:");
  return {
    type: 'electronic',
    brand,
    model
  };
}

function createBook() {
  const title = prompt("Enter book title:");
  const author = prompt("Enter author's name:");
  return {
    type: 'book',
    title,
    author
  };
}

const electronicProduct = createElectronicDevice();
const bookProduct = createBook();

function displayProductDetails(product) {
  console.log(`Product Type: ${product.type}`);
  if (product.type === 'electronic') {
    console.log(`Brand: ${product.brand}`);
    console.log(`Model: ${product.model}`);
  } else {
    console.log(`Title: ${product.title}`);
    console.log(`Author: ${product.author}`);
  }
}

console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);

console.log();

console.log('Book Details:');
displayProductDetails(bookProduct);
