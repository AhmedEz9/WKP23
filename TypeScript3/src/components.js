"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorModal = exports.restaurantModal = exports.restaurantRow = void 0;
var restaurantRow = function (restaurant) {
    var name = restaurant.name, address = restaurant.address, company = restaurant.company;
    var tr = document.createElement('tr');
    var nameCell = document.createElement('td');
    nameCell.innerText = name;
    var addressCell = document.createElement('td');
    addressCell.innerText = address;
    var companyCell = document.createElement('td');
    companyCell.innerText = company;
    tr.appendChild(nameCell);
    tr.appendChild(addressCell);
    tr.appendChild(companyCell);
    return tr;
};
exports.restaurantRow = restaurantRow;
var restaurantModal = function (restaurant, menu) {
    var name = restaurant.name, address = restaurant.address, city = restaurant.city, postalCode = restaurant.postalCode, phone = restaurant.phone, company = restaurant.company;
    var html = "<h3>".concat(name, "</h3>\n    <p>").concat(company, "</p>\n    <p>").concat(address, " ").concat(postalCode, " ").concat(city, "</p>\n    <p>").concat(phone, "</p>\n    <table>\n      <tr>\n        <th>Course</th>\n        <th>Diet</th>\n        <th>Price</th>\n      </tr>\n    ");
    menu.courses.forEach(function (course) {
        var _a;
        var name = course.name, diets = course.diets, price = course.price;
        html += "\n      <tr>\n        <td>".concat(name, "</td>\n        <td>").concat((_a = diets === null || diets === void 0 ? void 0 : diets.join(', ')) !== null && _a !== void 0 ? _a : ' - ', "</td>\n        <td>").concat(price !== null && price !== void 0 ? price : ' - ', "</td>\n      </tr>\n    ");
    });
    html += '</table>';
    return html;
};
exports.restaurantModal = restaurantModal;
var errorModal = function (message) {
    var html = "\n    <h3>Error</h3>\n    <p>".concat(message, "</p>\n  ");
    return html;
};
exports.errorModal = errorModal;
