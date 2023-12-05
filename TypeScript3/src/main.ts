import { errorModal, restaurantModal, restaurantRow } from './components';
import { fetchData } from './functions';
import { apiUrl, positionOptions } from './variables';
import { Restaurant } from './interfaces/Restaurant';
import { Menu } from './interfaces/Menu';
import { Point } from './interfaces/Point';

const modal = document.querySelector('dialog');
if (!modal) {
  throw new Error('Modal not found');
}
modal.addEventListener('click', () => {
  modal.close();
});

const calculateDistance = (x1: number, y1: number, x2: number, y2: number): number =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

const createTable = (restaurants: Restaurant[]): void => {
  const table = document.querySelector('table');
  if (!table) {
    throw new Error('Table not found');
  }
  table.innerHTML = '';
  restaurants.forEach((restaurant: Restaurant) => {
    const tr = restaurantRow(restaurant);
    table.appendChild(tr);
    tr.addEventListener('click', async () => {
      // ... (rest of the code remains the same)
    });
  });
};

const error = (err: PositionError): void => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

const success = async (pos: GeolocationPosition): Promise<void> => {
  // ... (rest of the code remains the same)
};

navigator.geolocation.getCurrentPosition(success, error, positionOptions);
