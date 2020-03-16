
import './public/styles/css/style.css'
import Header from './public/templates/header';
import Footer from './public/templates/footer';
import Cards from './public/templates/cards';
const x = Header;

document.getElementById("header").innerHTML =   Header();
document.getElementById("footer").innerHTML = Footer();
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("10"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("1"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("11"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("2"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("12"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("3"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("13"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("4"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("14"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("5"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("15"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("6"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("16"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("7"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("17"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("8"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("18"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("9"));
