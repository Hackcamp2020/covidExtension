// General protocol
const container1 = document.querySelector('#lb');

const content1 = document.createElement('div');
content1.classList.add('content1');
content1.textContent = 'Remember to go out with only immediate household members.';

const content1A = document.createElement('div');
content1A.classList.add('content1A');
content1A.textContent = '❗ COVID-19 alert';

container1.appendChild(content1A);
content1A.appendChild(content1);

// Location tag
const container2 = document.querySelector('.cXedhc');

const content2 = document.createElement('div');
content2.classList.add('content2');
content2.textContent = '❗ COVID-19 Cases Reported Here.';
content2.href= 'covidResaurant.html';

container2.appendChild(content2);
