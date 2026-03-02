'use strict';

const urlDB = 'car.json';

const select = document.getElementById('select');
const info = document.getElementById('info');

const getData = async () => {
  try{
    const response = await fetch(urlDB);
    return await response.json();
  } catch (e) {
    throw new Error(e);
  }
};

getData().then(data => {
  data.cars.forEach((car) => {
    const carBrandOption = document.createElement('option');
    carBrandOption.textContent = car.brand;
    select.append(carBrandOption);
  })
})

select.addEventListener('change', (e) => {
  getData().then(data => {
    data.cars.forEach((car) => {
      info.innerHTML = `Тачка ${car.brand} ${car.model}<br> Цена: ${car.price}`
    })
  });
})

