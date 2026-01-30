let title = "Название проекта (под редакцией)";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 3000;
let rollback = 10;
let fullPrice = 12000;
let adaptive = false;

console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");

screens = screens.toLowerCase().split(", ");
console.log(screens);

console.log(fullPrice * (rollback / 100));
