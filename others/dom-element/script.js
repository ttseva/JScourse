'use strict'

const body = document.querySelector('body');


const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg
  this.fontSize = fontSize
}

DomElement.prototype.addElement = function (text) {
  let newElem;
  if (this.selector[0] === '.') {
    newElem = document.createElement('div');
    newElem.classList.add(this.selector.slice(1));
  } else if (this.selector[0] === '#') {
    newElem = document.createElement('p');
    newElem.id = this.selector.slice(1);
  }

  newElem.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;
  newElem.textContent = text;
  body.append(newElem);
}

const block1 = new DomElement('.block', '100px', '100px', 'red', '16px');
block1.addElement('Текста для Блока!')

const paragraph1 = new DomElement('#best', '50px', '150px', 'none', '24px');
paragraph1.addElement('Текст для Параграфа!')

