// General protocol
const container1 = document.querySelector('.LHJvCe');
/*
const content1 = document.createElement('div');
content1.classList.add('content1');
content1.textContent = 'Remember to go out with only immediate household members.';

const content1A = document.createElement('div');
content1A.classList.add('content1A');
content1A.textContent = '❗ COVID-19 ALERT';

container1.appendChild(content1A);
content1A.appendChild(content1);
*/ 

const alert1 = documemt.createTextNode(" ❗ COVID-19 ALERT ");
const alert2 = document.createTextNode("Remember to go out with only immediate household members.");

container1.appendChild(alert1);
alert1.appendChild(alert2);

// Location tag
const container2 = document.querySelector('.VkpGBb');

const content2 = document.createElement('div');
content2.classList.add('content2');

const link = document.createTextNode("❗ Recent COVID-19 Cases Reported Here.");

const a = document.createElement('a');

a.appendChild(link);
a.title = "❗ Recent COVID-19 Cases Reported Here."
a.href= 'covidRestaurant.html';

content2.appendChild(a);
container2.appendChild(content2);
