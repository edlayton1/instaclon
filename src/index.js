
import './public/styles/css/style.css'
import Header from './public/templates/header';
import Footer from './public/templates/footer';
import Cards from './public/templates/cards'
const x = Header;

document.getElementById("header").innerHTML =   Header();
document.getElementById("footer").innerHTML = Footer(); 
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("1"));
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("2"));
<<<<<<< HEAD

=======
document.getElementById("container").insertAdjacentHTML("beforeend",Cards("3"));
>>>>>>> button
