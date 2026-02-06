'use strict';


const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  asking: function () {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор');
    appData.screens = prompt('Какие типы экранов нужно разработать? (Простые/Сложные/Адаптивные)', 'Простые');
    do {
      appData.screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(appData.screenPrice) && !(appData.screenPrice === null));
    appData.screenPrice = +appData.screenPrice;
    appData.adaptive = prompt('Нужен ли адаптив на сайте? (Да/Нет)', 'Нет').toLowerCase() === 'да';
  }
}

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}


const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return 'Даем скидку в 10%';
  } else if (price < 30000 && price >= 15000) {
    return 'Даем скидку в 5%';
  } else if (price < 15000 && price > 0) {
    return 'Скидка не предусмотрена';
  } else {
    return 'Что-то пошло не так.';
  }
};

const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    let price;

    if (i === 0) {
      appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else {
      appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
    }

    do {
      price = prompt('Сколько это будет стоить?');
    } while (!isNumber(price) && !(price === null));

    sum += +price;
  }
  return sum;
};

function getFullPrice(priceScreen, priceServices) {
  return priceScreen + priceServices;
}

const getTitle = function () {
  return appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();
}

function getServicePercentPrices(price, percent) {
  return Math.ceil(price - price * (percent / 100));
}


appData.asking();
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullPrice(appData.screenPrice, appData.allServicePrices);
appData.servicePercentPrice = getServicePercentPrices(appData.fullPrice, appData.rollback);
appData.title = getTitle();

appData.screens = appData.screens.toLowerCase().split(', ');

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);