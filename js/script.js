'use strict';

const title = document.getElementsByTagName('h1')[0];
const addBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const rangeInput = document.querySelector('.rollback input');
const rangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];


let screens = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},

  init: function () {
    appData.addTitle();
    startBtn.addEventListener('click', appData.start);
    addBtn.addEventListener('click', appData.addScreenBlock);
  },

  start: function () {
    appData.addScreens();
    appData.addServices();
    // appData.asking();
    // appData.addPrices();
    // appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
    // appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    // appData.getTitle();
    // appData.logger();
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  addScreens: function () {
    screens = document.querySelectorAll('.screen');
    screens.forEach(function (screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value
      });
    })
    console.log(appData.screens);
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },

  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const input = item.querySelector('input[type=text]');
      const label = item.querySelector('label');
      
      console.log(check);
      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    })

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const input = item.querySelector('input[type=text]');
      const label = item.querySelector('label');

      console.log(check);
      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    })
    
    console.log(appData);
  },

  asking: function () {
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

  addPrices: function () {
    appData.screenPrice = appData.screens.reduce(function (sum, screen) {
      return sum + +screen.price;
    }, 0);

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getRollbackMessage: function (price) {
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

  getFullPrice: function (priceScreen, priceServices) {
    appData.fullPrice = priceScreen + priceServices;
  },

  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substring(1).toLowerCase();
  },

  getServicePercentPrices: function (price, percent) {
    appData.servicePercentPrice = Math.ceil(price - price * (percent / 100));
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },

};


appData.init();
