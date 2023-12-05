'use strict';

function createTableRow(restaurantData) {
    const { name, address, company } = restaurantData;
    const row = document.createElement('tr');
    const nameTD = document.createElement('td');
    const addressTD = document.createElement('td');
    const companyTD = document.createElement('td');

    nameTD.textContent = name;
    addressTD.textContent = address;
    companyTD.textContent = company;

    [nameTD, addressTD, companyTD].forEach(td => row.appendChild(td));

    return row;
}

function generateRestaurantModalContent(restaurantData, menuData) {
    const { name, address, city, postalCode, phone, company } = restaurantData;

    let content = `
        <h3>${name}</h3>
        <p>${company}</p>
        <p>${address}, ${city} ${postalCode}</p>
        <p>${phone}</p>
        <table>
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Diet</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let course of menuData.courses) {
        content += `
            <tr>
                <td>${course.name}</td>
                <td>${course.diets || ' - '}</td>
                <td>${course.price || ' - '}</td>
            </tr>
        `;
    }

    content += '</tbody></table>';
    return content;
}

function showErrorModal(messageText) {
    return `
        <h3>Error</h3>
        <p>${messageText}</p>
    `;
}

async function retrieveData(endpoint, requestOptions = {}) {
    const response = await fetch(endpoint, requestOptions);
    if (!response.ok) throw new Error(`Error ${response.status}`);
    return await response.json();
}

const BASE_URL = 'https://sodexo-webscrape-r73sdlmfxa-lz.a.run.app/api/v1';
const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

const dialogModal = document.querySelector('dialog');
if (!dialogModal) throw new Error('Modal not found');
dialogModal.addEventListener('click', () => dialogModal.close());

function getDistance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}

function populateTableWithRestaurants(restaurantList) {
    const tableElem = document.querySelector('table');
    if (!tableElem) throw new Error('Table element not found');
    tableElem.innerHTML = '';

    for (let restaurant of restaurantList) {
        const tableRow = createTableRow(restaurant);
        tableElem.appendChild(tableRow);
        tableRow.addEventListener('click', async () => {
            try {
                document.querySelectorAll('.highlight').forEach(highlighted => highlighted.classList.remove('highlight'));
                tableRow.classList.add('highlight');
                dialogModal.innerHTML = '';
                const menuData = await retrieveData(`${BASE_URL}/restaurants/daily/${restaurant._id}/fi`);
                const modalContent = generateRestaurantModalContent(restaurant, menuData);
                dialogModal.insertAdjacentHTML('beforeend', modalContent);
                dialogModal.showModal();
            } catch (err) {
                dialogModal.innerHTML = showErrorModal(err.message);
                dialogModal.showModal();
            }
        });
    }
}

function handleError(err) {
    console.error(`ERROR(${err.code}): ${err.message}`);
}

async function handleGeolocationSuccess(position) {
    try {
        const { latitude, longitude } = position.coords;
        const restaurants = await retrieveData(`${BASE_URL}/restaurants`);

        restaurants.sort((a, b) => {
            const [latA, longA] = a.location.coordinates;
            const [latB, longB] = b.location.coordinates;
            return getDistance(latitude, longitude, latA, longA) - getDistance(latitude, longitude, latB, longB);
        });

        populateTableWithRestaurants(restaurants);

        const buttons = {
            sodexo: document.querySelector('#sodexo'),
            compass: document.querySelector('#compass'),
            reset: document.querySelector('#reset')
        };

        if (!buttons.sodexo || !buttons.compass || !buttons.reset) throw new Error('Button not found');

        buttons.sodexo.addEventListener('click', () => {
            const filteredRestaurants = restaurants.filter(r => r.company === 'Sodexo');
            populateTableWithRestaurants(filteredRestaurants);
        });

        buttons.compass.addEventListener('click', () => {
            const filteredRestaurants = restaurants.filter(r => r.company === 'Compass Group');
            populateTableWithRestaurants(filteredRestaurants);
        });

        buttons.reset.addEventListener('click', () => populateTableWithRestaurants(restaurants));

    } catch (err) {
        dialogModal.innerHTML = showErrorModal(err.message);
        dialogModal.showModal();
    }
}

navigator.geolocation.getCurrentPosition(handleGeolocationSuccess, handleError, geoOptions);
