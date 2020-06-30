let years = document.querySelector('.years');
years = parseInt(years.innerHTML);
const hoursYear = years * 365 * 24;


const hours = document.querySelector('.hours');
hours.innerHTML = `${hours.innerHTML} ${hoursYear} horas`;
