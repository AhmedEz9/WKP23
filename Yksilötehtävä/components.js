const restaurantRow = restaurant => {
  const {name, address} = restaurant;
  const tr = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.innerText = name;
  const addressCell = document.createElement('td');
  addressCell.innerText = address;

  tr.appendChild(nameCell);
  tr.appendChild(addressCell);

  return tr;
};

const restaurantModal = (restaurant, menu) => {
  const {name, address, city, postalCode, phone, company} = restaurant;

  let html = `
    <div class="modal-header">
      <h3>${name}</h3>
      <p>${company}</p>
      <p>${address}, ${postalCode} ${city}</p>
      <p>${phone}</p>
    </div>
    <button class="btn modal-close" id="close-modal">Close</button>
    <div class="modal-body">
      <h4>Daily Menu</h4>
      <table class="menu-table">
        <tr>
          <th>Course</th>
          <th>Diets</th>
          <th>Price</th>
        </tr>
    `;

  menu.days.forEach(day => {
    const {courses, date} = day;
    html += `
      <tr>
        <td colspan="3">${date ?? ' - '}</td>
      </tr>`;

    courses.forEach(course => {
      html += `
        <tr>
          <td>${course.name ?? ' - '}</td>
          <td>${course.diets ?? ' - '}</td>
          <td>${course.price ?? ' - '}</td>
        </tr>
      `;
    });
  });

  html += `</table></div>`;
  return html;
};

const errorModal = message => {
  return `<div class="modal-error"><h3>Error</h3><p>${message}</p></div>`;
};

export { restaurantRow, restaurantModal, errorModal };
