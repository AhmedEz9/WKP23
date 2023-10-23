"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = require("./components");
var functions_1 = require("./functions");
var variables_1 = require("./variables");
var modal = document.querySelector('dialog');
if (!modal) {
    throw new Error('Modal not found');
}
modal.addEventListener('click', function () {
    modal.close();
});
var calculateDistance = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
};
var createTable = function (restaurants) {
    var table = document.querySelector('table');
    if (!table) {
        throw new Error('Table not found');
    }
    table.innerHTML = '';
    restaurants.forEach(function (restaurant) {
        var tr = (0, components_1.restaurantRow)(restaurant);
        table.appendChild(tr);
        tr.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
            var allHighs, menu, menuHtml, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        allHighs = document.querySelectorAll('.highlight');
                        allHighs.forEach(function (high) {
                            high.classList.remove('highlight');
                        });
                        tr.classList.add('highlight');
                        modal.innerHTML = '';
                        return [4 /*yield*/, (0, functions_1.fetchData)("".concat(variables_1.apiUrl, "/restaurants/daily/").concat(restaurant._id, "/fi"))];
                    case 1:
                        menu = _a.sent();
                        menuHtml = (0, components_1.restaurantModal)(restaurant, menu);
                        modal.insertAdjacentHTML('beforeend', menuHtml);
                        modal.showModal();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        modal.innerHTML = (0, components_1.errorModal)(error_1.message);
                        modal.showModal();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });
};
var error = function (err) {
    console.warn("ERROR(".concat(err.code, "): ").concat(err.message));
};
var success = function (pos) { return __awaiter(void 0, void 0, void 0, function () {
    var crd_1, restaurants_1, sodexoBtn, compassBtn, resetBtn, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                crd_1 = pos.coords;
                return [4 /*yield*/, (0, functions_1.fetchData)("".concat(variables_1.apiUrl, "/restaurants"))];
            case 1:
                restaurants_1 = _a.sent();
                restaurants_1.sort(function (a, b) {
                    var distanceA = calculateDistance(crd_1.latitude, crd_1.longitude, a.location.coordinates[1], a.location.coordinates[0]);
                    var distanceB = calculateDistance(crd_1.latitude, crd_1.longitude, b.location.coordinates[1], b.location.coordinates[0]);
                    return distanceA - distanceB;
                });
                createTable(restaurants_1);
                sodexoBtn = document.querySelector('#sodexo');
                compassBtn = document.querySelector('#compass');
                resetBtn = document.querySelector('#reset');
                sodexoBtn === null || sodexoBtn === void 0 ? void 0 : sodexoBtn.addEventListener('click', function () {
                    var sodexoRestaurants = restaurants_1.filter(function (restaurant) { return restaurant.company === 'Sodexo'; });
                    createTable(sodexoRestaurants);
                });
                compassBtn === null || compassBtn === void 0 ? void 0 : compassBtn.addEventListener('click', function () {
                    var compassRestaurants = restaurants_1.filter(function (restaurant) { return restaurant.company === 'Compass Group'; });
                    createTable(compassRestaurants);
                });
                resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', function () {
                    createTable(restaurants_1);
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                modal.innerHTML = (0, components_1.errorModal)(error_2.message);
                modal.showModal();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
navigator.geolocation.getCurrentPosition(success, error, variables_1.positionOptions);
