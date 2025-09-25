const body = document.body;
body.append(document.createElement('footer'));

const footer = document.querySelector('footer');
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = "Cesar D. Verastegui " + "&copy" + thisYear;


footer.append(copyright);