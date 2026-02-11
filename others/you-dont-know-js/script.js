let books = document.querySelectorAll('.book');
const thirdBookTitle = books[4].querySelector('a');
const sixthBookChapters = books[2].querySelectorAll('li');
const secondBookChapters = books[0].querySelectorAll('li');
const fifthBookChapters = books[5].querySelectorAll('li');

const body = document.querySelector('body');

const advertisement = document.querySelector('.adv');


books[0].before(books[1]);
books[0].after(books[4]);
books[4].after(books[3]);
books[3].after(books[5]);

body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';

thirdBookTitle.textContent = 'Книга 3. this и Прототипы Объектов';

advertisement.remove();

fifthBookChapters[1].after(fifthBookChapters[9]);
fifthBookChapters[9].after(fifthBookChapters[3]);
fifthBookChapters[3].after(fifthBookChapters[4]);
fifthBookChapters[2].after(fifthBookChapters[6]);
fifthBookChapters[6].after(fifthBookChapters[7]);

secondBookChapters[1].after(secondBookChapters[3]);
secondBookChapters[3].after(secondBookChapters[6]);
secondBookChapters[6].after(secondBookChapters[8]);
secondBookChapters[8].after(secondBookChapters[4]);
secondBookChapters[4].after(secondBookChapters[5]);
secondBookChapters[5].after(secondBookChapters[7]);
secondBookChapters[7].after(secondBookChapters[9]);

const eighthChapter = document.createElement('li');
eighthChapter.textContent = 'Глава 8: За пределами ES6';
sixthBookChapters[8].after(eighthChapter);

