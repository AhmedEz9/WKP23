export {}; // hack to ignore Book from task 3

// Define the 'ElectronicDevice' interface
interface ElectronicDevice {
  type: 'electronic';
  brand: string;
  model: string;
}

// Define the 'Book' interface
interface Book {
  type: 'book';
  title: string;
  author: string;
}

// Define the 'Product' type alias that can represent either 'ElectronicDevice' or 'Book'
type Product = ElectronicDevice | Book;

// Implement instances of the 'Product' type
function createElectronicDevice(): ElectronicDevice {
  const brand = prompt("Enter brand of electronic device:");
  const model = prompt("Enter model of electronic device:");
  return {
    type: 'electronic',
    brand: brand!,
    model: model!
  };
}

function createBook(): Book {
  const title = prompt("Enter book title:");
  const author = prompt("Enter author's name:");
  return {
    type: 'book',
    title: title!,
    author: author!
  };
}

// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();

// Display the details of each product
function displayProductDetails(product: Product) {
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
