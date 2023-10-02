'use strict';
let restaurants = [];
const table = document.querySelector('table');
const dialog = document.querySelector('dialog');
const url = 'https://sodexo-webscrape-r73sdlmfxa-lz.a.run.app/api/v1/';

// Get restaurant data from API
const getData = async () => {
    try {
        const res = await fetch(`${url}restaurants`);
        if (!res.ok) {
            throw new Error(`Request failed, Status: ${res.status}`);
        }
        const dataJSON = await res.json();
        restaurants = dataJSON;
        console.log(restaurants);
        for (const restaurant of restaurants) {
            const tr = document.createElement('tr');
            const nameTh = document.createElement('th');
            const addressTh = document.createElement('th');
            nameTh.textContent = restaurant.name;
            addressTh.textContent = restaurant.address;

            tr.appendChild(nameTh);
            tr.appendChild(addressTh);
            table.appendChild(tr);

            tr.addEventListener('click', () => {
                document.querySelectorAll('th').forEach(element => {
                    element.classList.remove('highlight');
                });

                nameTh.classList.add('highlight');
                addressTh.classList.add('highlight');

                createModal(restaurant);
                dialog.showModal();
            });
        }
    } catch (error) {
        console.log('Error:', error.message);
    }
};

function createModal(restaurant) {
    Array.from(dialog.children).forEach(child => dialog.removeChild(child));
    const form = document.createElement('form');
    form.method = 'dialog';

    const elements = [
        {tag: 'h2', textContent: restaurant.name, class: 'dialog-content'},
        {tag: 'p', textContent: restaurant.address, class: 'dialog-content'},
        {tag: 'p', textContent: restaurant.postalCode, class: 'dialog-content'},
        {tag: 'p', textContent: restaurant.city, class: 'dialog-content'},
        {tag: 'p', textContent: 'phone: ' + restaurant.phone, class: 'dialog-content'},
        {tag: 'p', textContent: restaurant.company, class: 'dialog-content'},
        {tag: 'button', textContent: 'ok', class: 'dialog-content', event: {name: 'click', handler: () => dialog.close()}}
    ];

    elements.forEach(elementData => {
        const element = document.createElement(elementData.tag);
        element.textContent = elementData.textContent;
        element.className = elementData.class;
        if (elementData.event) {
            element.addEventListener(elementData.event.name, elementData.event.handler);
        }
        form.appendChild(element);
    });

    dialog.appendChild(form);
    createTodaysMenu(restaurant);
}

async function createTodaysMenu(restaurant) {
    try {
        const res = await fetch(`${url}restaurants/daily/${restaurant._id}/fi`);
        if (!res.ok) {
            throw new Error(`Request failed, Status: ${res.status}`);
        }
        const todaysMenu = await res.json();

        const daysMenuContainer = document.createElement('ul');
        todaysMenu.courses.forEach(food => {
            const foodList = document.createElement('li');
            foodList.innerHTML = `
                <h2>${food.name ? food.name : 'No name'}</h2>
                <p>Diets: ${food.diets ? food.diets.join(', ') : ''}</p>
                <p>Price: ${food.price ? food.price : '?'}</p>
            `;
            daysMenuContainer.appendChild(foodList);
        });

        dialog.appendChild(daysMenuContainer);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Initialize
getData();
