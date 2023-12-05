import { errorModal, restaurantModal, restaurantRow } from './components.js';
import { fetchData } from './functions.js';
import { apiUrl, positionOptions } from './variables.js';

const modal = document.querySelector('dialog');
const tableBody = document.querySelector('table tbody');
let allRestaurants = []; // To store all restaurants

// Function to create table rows
const createTable = (restaurants, filter = '') => {
  tableBody.innerHTML = '';
  const filteredRestaurants = filter
    ? restaurants.filter(r => r.company === filter)
    : restaurants;

  filteredRestaurants.forEach(restaurant => {
    const tr = restaurantRow(restaurant);
    tableBody.appendChild(tr);
    tr.addEventListener('click', async () => {
      try {
        modal.innerHTML = '';
        const menu = await fetchData(apiUrl + `/restaurants/weekly/${restaurant._id}/fi`);
        const menuHtml = restaurantModal(restaurant, menu);
        modal.insertAdjacentHTML('beforeend', menuHtml);

        document.getElementById('close-modal').addEventListener('click', () => {
          modal.close();
        });

        modal.showModal();
      } catch (error) {
        modal.innerHTML = errorModal(error.message);
        modal.showModal();
      }
    });
  });
};

// Fetch and store all restaurants initially
navigator.geolocation.getCurrentPosition(async pos => {
  try {
    allRestaurants = await fetchData(apiUrl + '/restaurants');
    createTable(allRestaurants);
  } catch (error) {
    console.error(error);
    modal.innerHTML = errorModal('Unable to fetch restaurant data.');
    modal.showModal();
  }
}, error => {
  console.error(error);
  modal.innerHTML = errorModal('Geolocation error.');
  modal.showModal();
}, positionOptions);

// Event listeners for filtering buttons
document.getElementById('sodexo').addEventListener('click', () => createTable(allRestaurants, 'Sodexo'));
document.getElementById('compass').addEventListener('click', () => createTable(allRestaurants, 'Compass Group'));
document.getElementById('reset').addEventListener('click', () => createTable(allRestaurants));

// Theme switch event listener
document.getElementById('theme-switch-checkbox').addEventListener('change', function() {
  document.body.classList.toggle('dark');
});

// Mock Login/Register
document.getElementById('login-btn').addEventListener('click', function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if(email && password) {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('profile-management').style.display = 'block';
    loadProfileForm();
  } else {
    alert('Please enter email and password');
  }
});

// Load Profile Form
function loadProfileForm() {
  const user = JSON.parse(localStorage.getItem('user'));
  if(!user) return;

  // Populate favorite restaurant dropdown
  const favoriteRestaurantSelect = document.getElementById('favorite-restaurant');
  allRestaurants.forEach(restaurant => {
    const option = document.createElement('option');
    option.value = restaurant._id;
    option.textContent = restaurant.name;
    favoriteRestaurantSelect.appendChild(option);
  });
}

// Save Profile
document.getElementById('save-profile').addEventListener('click', function() {
  const profilePicture = document.getElementById('profile-picture').files[0];
  const favoriteRestaurant = document.getElementById('favorite-restaurant').value;
  const user = JSON.parse(localStorage.getItem('user'));

  if(user && profilePicture && favoriteRestaurant) {
    user.profilePicture = URL.createObjectURL(profilePicture);
    user.favoriteRestaurant = favoriteRestaurant;
    localStorage.setItem('user', JSON.stringify(user));
    alert('Profile saved successfully!');
  } else {
    alert('Please complete your profile');
  }
});

// Check if user is logged in
window.onload = function() {
  const user = JSON.parse(localStorage.getItem('user'));
  if(user) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('profile-management').style.display = 'block';
    loadProfileForm();
  }
};
