const Cards = (number) => {
    const dic_cards = {1:`
    <div class="card" >
        <div class="container-photo">
            <h3>Publicacion de El Anti-Cristo.</h3>
            <img src="../src/public/assets/images/la_ultima_cena.jpg" alt="fotico">
        </div>
        
        <div class="container-card">
            <div class="buttoms">
                <button class="green">Like</button>
                <button class="red">Dislike</button>
            </div>
            <div class="information">
                <h4><b>Luz y Fer</b></h4>
                <p>Fotos tomadas antes de la tragedia.</p> 
            </div>
            
        </div>
      </div>          
    `,2: `
    <div class="card" >
        <div class="container-photo">
            <h3>Publicacion de El patriota</h3>
            <img src="../src/public/assets/images/plaza_de_la_costitucion.jpg" alt="Plaza">
        </div>
        
        <div class="container-card">
            <div class="buttoms">
                <button class="green">Like</button>
                <button class="red">Dislike</button>
            </div>
            <div class="information">
                <h4><b>Soldado Razo</b></h4>
                <p>Parece que muchas veces los nombres que</p> 
                <p>usamos de manera coloquial no son los correctos.</p> 
            </div>
            
        </div>
      </div>          
    `,3:`
    <div class="card" >
        <div class="container-photo">
            <h3>Publicacion de El viejo siglo.</h3>
            <img src="../src/public/assets/images/monumento_recolucion.jpg" alt="Plaza">
        </div>
        
        <div class="container-card">
            <div class="buttoms">
                <button class="green">Like</button>
                <button class="red">Dislike</button>
            </div>
            <div class="information">
                <h4><b>Carranzista</b></h4>
                <p>Antigua plantilla de algo grande.</p> 

            </div>
            
        </div>
      </div>`    };
    const view = dic_cards[number];  
        return view;
};

export default Cards;