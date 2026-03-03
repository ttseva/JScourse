'use strict';

const form = document.querySelector('form');
const cells = document.querySelectorAll('th, td');
const houseItems = document.querySelectorAll('.house');
console.log(houseItems);
const gardenItems = document.querySelectorAll('.garden');
const list = document.querySelector('.objects');

let flowers = [];

houseItems.forEach(houseItem => {
  houseItem.classList.add('hidden');
  houseItem.removeAttribute('required')
})

gardenItems.forEach(gardenItem => {
  gardenItem.classList.add('hidden');
  gardenItem.removeAttribute('required')
})

class Flower {
  constructor(name, color, height, isPerennial, type) {
    this.name = name;
    this.color = color;
    this.height = height;
    this.isPerennial = isPerennial;
    this.type = type;
  }
}

class HousePlant extends Flower {
  constructor(name, color, height, isPerennial, temperature, needsSunlight) {
    super(name, color, height, isPerennial, "house");
    this.needsSunlight = needsSunlight;
    this.temperature = temperature;
  }
}

class GardenPlant extends Flower {
  constructor(name, color, height, isPerennial, bloomSeason, isFrostResistant) {
    super(name, color, height, isPerennial, "garden");
    this.bloomSeason = bloomSeason;
    this.isFrostResistant = isFrostResistant;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const {name, color, height, type} = data;
  let {'is-perennial': isPerennial} = data;
  isPerennial = !!isPerennial;
  console.log(type)
});

