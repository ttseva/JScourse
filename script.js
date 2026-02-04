'use strict';

let rollback = 10;

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать? (Простые/Сложные/Адаптивные)", "Простые");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = prompt("Нужен ли адаптив на сайте? (Да/Нет)", "Нет").toLowerCase() === "да";

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");


const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price < 30000 && price >= 15000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price > 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так.";
  }
};

const getAllServicePrices = function (price1, price2) {
  return price1 + price2;
};

function getFullPrice(priceScreen, priceServices) {
  return priceScreen + priceServices;
}

function getTitle(projectTitle) {
  return projectTitle[0].toUpperCase() + projectTitle.substring(1).toLowerCase();
}

function getServicePercentPrices(price, percent) {
  return Math.ceil(price - price * (percent / 100));
}


let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
let fullPrice = getFullPrice(screenPrice, allServicePrices);
let servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

screens = screens.toLowerCase().split(", ");


showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(getTitle(title));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);