const Cards = (number) => {
    const dic_cards = {1:`
    <div class="card" >
        <div class="container-photo">
            <h3>Publicacion de El photografo mas pro.</h3>
            <img src="../src/public/assets/images/albert_einstein.jpg" alt="fotico">
        </div>
        
        <div class="container-card">
            <div class="buttoms">
                <button class="w3-button w3-green">Like</button>
                <button class="w3-button w3-red">Comentario</button>
            </div>
            <div class="information">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p> 
            </div>
            
        </div>
      </div>          
    `,2: `
    <div class="card" >
        <div class="container-photo">
            <h3>Publicacion de  Juanito Bananas</h3>
            <img src="../assets/images/img_avatar3.png" alt="Avatar">
        </div>
        
        <div class="container-card">
            <div class="buttoms">
                <button class="w3-button w3-green">Like</button>
                <button class="w3-button w3-red">Comentario</button>
            </div>
            <div class="information">
                <h4><b>Elba</b></h4>
                <p>Architect & Engineer</p> 
            </div>
            
        </div>
      </div>          
    `};
    const view = dic_cards[number];  
        return view;
};

export default Cards;