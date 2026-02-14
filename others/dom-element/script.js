'use strict'

const body = document.querySelector('body');


const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg
  this.fontSize = fontSize

  this.addElement = function (text) {
    if (this.selector[0] === '.') {
      const newDiv = document.createElement('div');
      newDiv.classList.add(this.selector.slice(1));
      newDiv.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;
      newDiv.textContent = text;
      body.append(newDiv);
      
    } else if (this.selector[0] === '#') {
      const newP = document.createElement('p');
      newP.id = this.selector.slice(1);
      newP.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;
      newP.textContent = text;
      body.append(newP);
    }
  }
}

const block1 = new DomElement('.block', '100px', '100px', 'red', '16px');
block1.addElement('Текста для Блока!')

const paragraph1 = new DomElement('#best', '50px', '150px', 'none', '24px');
paragraph1.addElement('Текст для Параграфа!')

