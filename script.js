'use strict';

let rollback = 10;

let title, screens, screenPrice, adaptive;
let allServicePrices, fullPrice, servicePercentPrice;
let service1, service2;


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
  title = prompt('Как называется ваш проект?', 'Калькулятор');
  screens = prompt('Какие типы экранов нужно разработать? (Простые/Сложные/Адаптивные)', 'Простые');
  do {
    screenPrice = prompt('Сколько будет стоить данная работа?');
  } while (!isNumber(screenPrice) && !(screenPrice === null));
  screenPrice = +screenPrice;
  adaptive = prompt('Нужен ли адаптив на сайте? (Да/Нет)', 'Нет').toLowerCase() === 'да';
}

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
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
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
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
  return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase();
}

function getServicePercentPrices(price, percent) {
  return Math.ceil(price - price * (percent / 100));
}


asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle();

screens = screens.toLowerCase().split(', ');


showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(allServicePrices);
console.log(getTitle(title));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
