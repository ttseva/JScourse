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
  count: 0,
  adaptive: true,
  isCalculated: false,
  rollback: 10,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},

  init: function () {
    this.addTitle();
    startBtn.addEventListener('click', () => this.start());
    addBtn.addEventListener('click', this.addScreenBlock.bind(this));
    rangeInput.addEventListener('change', this.addRollback.bind(this));
    resetBtn.addEventListener('click', this.reset.bind(this));
  },

  start: function () {
    this.isCalculated = true;

    this.addScreens();
    this.addServices();
    this.addPrices();

    this.showResult();

    if (!this.isCalculated) return;
    
    screens.forEach(screen => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      input.disabled = true;
      select.disabled = true;
    })

    resetBtn.style.display = 'block';
    startBtn.style.display = 'none';
  },

  reset: function () {
    this.screenPrice = 0;
    this.servicePricesNumber = 0;
    this.servicePricesPercent = 0;
    this.count = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};
    this.screens = [];

    total.value = 0;
    totalCount.value = 0;
    totalCountOther.value = 0;
    fullTotalCount.value = 0;
    totalCountRollback.value = 0;

    const screens = document.querySelectorAll('.screen');

    screens.forEach((screen, index) => {
      if (index === 0) {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');

        input.disabled = false;
        select.disabled = false;

        input.value = "";
        select.value = ""; 
      } else {
        screen.remove();
      }
    });
    
    resetBtn.style.display = 'none';
    startBtn.style.display = 'block';
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  addRollback: function () {
    rangeValue.textContent = rangeInput.value + '%';
    this.rollback = rangeInput.value;

    if (this.isCalculated) {
      this.servicePercentPrice = Math.ceil(this.fullPrice - this.fullPrice * (+this.rollback / 100));
      totalCountRollback.value = this.servicePercentPrice;
    }
  },

  addScreens: function () {
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      if (+input.value && selectName !== 'Тип экранов') {
        this.count += +input.value
        this.screens.push({
          id: index,
          name: selectName,
          price: +select.value * +input.value
        })
      } else {
        alert('Сначала выберите экран и количество');
        this.isCalculated = false;
      }
    })
    console.log(this.screens);
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },

  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const input = item.querySelector('input[type=text]');
      const label = item.querySelector('label');

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    })

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const input = item.querySelector('input[type=text]');
      const label = item.querySelector('label');

      if (check.checked) this.servicesNumber[label.textContent] = +input.value;
    })
  },

  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

    this.servicePercentPrice = Math.ceil(this.fullPrice - this.fullPrice * (+this.rollback / 100));
  },

  showResult: function () {
    total.value = this.screenPrice;
    totalCount.value = this.count;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },

  logger: function () {
    console.log(appData);
  },
};


appData.init();
