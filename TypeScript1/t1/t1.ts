interface Item {
    name: string;
    price: number;
    quantity: number;
  }

  const cart: Item[] = [];

  const form = document.getElementById('itemForm');
  const totalCostDiv = document.getElementById('totalCost');
  const calculateTotalButton = document.getElementById('calculateTotal');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const itemName = (document.getElementById('itemName') as HTMLInputElement).value;
    const itemPrice = parseFloat((document.getElementById('itemPrice') as HTMLInputElement).value);
    const itemQuantity = parseInt((document.getElementById('itemQuantity') as HTMLInputElement).value);

    const newItem: Item = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);

    (document.getElementById('itemName') as HTMLInputElement).value = '';
    (document.getElementById('itemPrice') as HTMLInputElement).value = '';
    (document.getElementById('itemQuantity') as HTMLInputElement).value = '';
  });

  calculateTotalButton.addEventListener('click', () => {
    const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);
    totalCostDiv.textContent = `Total cost of the shopping cart: $${totalCost.toFixed(2)}`;
  });
