'use strict';

const title = document.getElementsByTagName('h1')[0];
const buttons = document.getElementsByTagName('handler_btn');
const addBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const rangeInput = document.querySelector('.rollback input');
const rangeSpan = document.querySelector('.rollback span.range-value');
const totalInputCollection = document.getElementsByClassName('total-input');
let screens = document.querySelectorAll('.screen');

const totalInput = [];

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  isNumber: function(num) {
    return (
      num !== null && num !== '' && !isNaN(parseFloat(num)) && isFinite(num)
    );
  },

  asking: function() {
    do {
      appData.title = prompt('Как называется ваш проект?', 'Калькулятор');
    } while (appData.isNumber(appData.title));

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt('Какие типы экранов нужно разработать?', 'Простые');
      } while (appData.isNumber(name));
      do {
        price = prompt('Сколько будет стоить данная работа?');
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price });
    }

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt('Какой дополнительный тип услуги нужен?') + `_${i}`;
      } while (appData.isNumber(name));
      do {
        price = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price));

      appData.services[name] = +price;
    }
  },

  addPrices: function() {
    appData.screenPrice = appData.screens.reduce(function(sum, screen) {
      return sum + +screen.price;
    }, 0);

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getRollbackMessage: function(price) {
    if (price >= 30000) {
      return 'Даем скидку в 10%';
    } else if (price < 30000 && price >= 15000) {
      return 'Даем скидку в 5%';
    } else if (price < 15000 && price > 0) {
      return 'Скидка не предусмотрена';
    } else {
      return 'Что-то пошло не так.';
    }
  },

  getFullPrice: function(priceScreen, priceServices) {
    appData.fullPrice = priceScreen + priceServices;
  },

  getTitle: function() {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substring(1).toLowerCase();
  },

  getServicePercentPrices: function(price, percent) {
    appData.servicePercentPrice = Math.ceil(price - price * (percent / 100));
  },

  logger: function() {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },

  start: function() {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
    appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    appData.getTitle();
    appData.logger();
  },
};

for (let i = 0; i < totalInputCollection.length; i++) {
  totalInput.push(totalInputCollection[i]);
}


// appData.start();
