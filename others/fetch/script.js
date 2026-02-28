'use strict';

const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

const sendData = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json, charset=UTF-8'},
  }).then(response => response.json())
    .catch((error) => console.log(error));
}


getData('db.json')
  .then((data) => sendData('https://jsonplaceholder.typicode.com/posts', data));
