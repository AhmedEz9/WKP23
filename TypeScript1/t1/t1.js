var cart = [];
var form = document.getElementById('itemForm');
var totalCostDiv = document.getElementById('totalCost');
var calculateTotalButton = document.getElementById('calculateTotal');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var itemName = document.getElementById('itemName').value;
    var itemPrice = parseFloat(document.getElementById('itemPrice').value);
    var itemQuantity = parseInt(document.getElementById('itemQuantity').value);
    var newItem = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);

    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
    document.getElementById('itemQuantity').value = '';
});
calculateTotalButton.addEventListener('click', function () {
    var totalCost = cart.map(function (item) { return item.price * item.quantity; }).reduce(function (sum, cost) { return sum + cost; }, 0);
    totalCostDiv.textContent = "Total cost of the shopping cart: $".concat(totalCost.toFixed(2));
});
