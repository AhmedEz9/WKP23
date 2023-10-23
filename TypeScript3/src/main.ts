import { errorModal, restaurantModal, restaurantRow } from './components';
import { fetchData } from './functions';
import { apiUrl, positionOptions } from './variables';
import Restaurant from './interfaces/Restaurant';
import Menu from './interfaces/Menu';

interface PositionError {
  code: number;
  message: string;
}

const modal: HTMLDialogElement | null = document.querySelector('dialog');
if (!modal) {
  throw new Error('Modal not found');
}
modal.addEventListener('click', () => {
  modal.close();
});

const calculateDistance = (x1: number, y1: number, x2: number, y2: number): number =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

const createTable = (restaurants: Restaurant[]): void => {
  const table: HTMLTableElement | null = document.querySelector('table');
  if (!table) {
    throw new Error('Table not found');
  }
  table.innerHTML = '';

  restaurants.forEach((restaurant) => {
    const tr: HTMLTableRowElement = restaurantRow(restaurant);
    table.appendChild(tr);
    tr.addEventListener('click', async () => {
      try {
        const allHighs: NodeListOf<Element> = document.querySelectorAll('.highlight');
        allHighs.forEach((high) => {
          high.classList.remove('highlight');
        });
        tr.classList.add('highlight');
        modal.innerHTML = '';

        const menu: Menu = await fetchData<Menu>(
          `${apiUrl}/restaurants/daily/${restaurant._id}/fi`
        );

        const menuHtml: string = restaurantModal(restaurant, menu);
        modal.insertAdjacentHTML('beforeend', menuHtml);
        modal.showModal();
      } catch (error) {
        modal.innerHTML = errorModal((error as Error).message);
        modal.showModal();
      }
    });
  });
};

const error = (err: PositionError): void => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

const success = async (pos: GeolocationPosition): Promise<void> => {
  try {
    const crd: GeolocationCoordinates = pos.coords;
    const restaurants: Restaurant[] = await fetchData<Restaurant[]>(`${apiUrl}/restaurants`);

    restaurants.sort((a, b) => {
      const distanceA = calculateDistance(
        crd.latitude,
        crd.longitude,
        a.location.coordinates[1],
        a.location.coordinates[0]
      );
      const distanceB = calculateDistance(
        crd.latitude,
        crd.longitude,
        b.location.coordinates[1],
        b.location.coordinates[0]
      );
      return distanceA - distanceB;
    });

    createTable(restaurants);

    const sodexoBtn: HTMLElement | null = document.querySelector('#sodexo');
    const compassBtn: HTMLElement | null = document.querySelector('#compass');
    const resetBtn: HTMLElement | null = document.querySelector('#reset');

    sodexoBtn?.addEventListener('click', () => {
      const sodexoRestaurants = restaurants.filter(
        (restaurant) => restaurant.company === 'Sodexo'
      );
      createTable(sodexoRestaurants);
    });

    compassBtn?.addEventListener('click', () => {
      const compassRestaurants = restaurants.filter(
        (restaurant) => restaurant.company === 'Compass Group'
      );
      createTable(compassRestaurants);
    });

    resetBtn?.addEventListener('click', () => {
      createTable(restaurants);
    });
  } catch (error) {
    modal.innerHTML = errorModal((error as Error).message);
    modal.showModal();
  }
};

navigator.geolocation.getCurrentPosition(success, error, positionOptions);
