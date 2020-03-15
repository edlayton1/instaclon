import Header from "../templates/Header";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";


const routes = {
    "/": Home,
    "/Error404": Error404
    
};

const router = () => {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content-body");

    header.innerHTML =  Header();
    let render = routes[`/`] ? routes[`/`]: Error404; 
    content.innerHTML =  render();
};

export default router;