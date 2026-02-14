'use strict'

const body = document.querySelector('body');


const DomElement = function (selector, height, width, bg, fontSize, position) {
  let elem;
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
  this.elem = elem;
  this.x = 0;
  this.y = 0;
}

DomElement.prototype.addElement = function (text) {
  if (this.selector[0] === '.') {
    this.elem = document.createElement('div');
    this.elem.classList.add(this.selector.slice(1));
  } else if (this.selector[0] === '#') {
    this.elem = document.createElement('p');
    this.elem.id = this.selector.slice(1);
  }

  this.elem.textContent = text;
  this.elem.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; 
                             font-size: ${this.fontSize}; position: ${this.position}`;
  body.append(this.elem);
}

DomElement.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  this.elem.style.left = this.x + 'px';
  this.elem.style.top = this.y + 'px';
}

const block1 = new DomElement('.block', '100px', '100px', 'red', '16px', 'absolute');

document.addEventListener('DOMContentLoaded', () => {
  block1.addElement('Текст для Блока!')
  console.log(block1);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    block1.move(0, -10)
  } else if (event.key === 'ArrowDown') {
    block1.move(0, 10)
  } else if (event.key === 'ArrowLeft') {
    block1.move(-10, 0)
  } else if (event.key === 'ArrowRight') {
    block1.move(10, 0)
  }

});


// const paragraph1 = new DomElement('#best', '50px', '150px', 'none', '24px');
// paragraph1.addElement('Текст для Параграфа!')

