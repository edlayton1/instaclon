const Cards = (number) => {
    const dic_cards = {
        1:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: El Anti-Cristo.</h3>
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
        `,
        2: `
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: El patriota</h3>
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
        `,
        3:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: El viejo siglo.</h3>
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
        </div>`,
        4: `
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: El patriota</h3>
                <img src="../src/public/assets/images/angel.jpg" alt="angel">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>Soldado Razo</b></h4>
                    <p>Existen muchas formas de libertad</p> 
                    <p>Y tu tienes la oportunidad de vivirlas.</p> 
                </div>
                
            </div>
        </div>          
        `,
        5:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: El Artista.</h3>
                <img src="../src/public/assets/images/el_hijo_del_hombre.jpg" alt="hijo">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>Rene</b></h4>
                    <p>Las personas no son lo que parecen</p> 

                </div>
                
            </div>
        </div>`,
        6:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: El Artista.</h3>
                <img src="../src/public/assets/images/el_nacimiento_de_venus.jpg" alt="venus">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>Venus</b></h4>
                    <p>Qué es más profundo que el mar</p> 

                </div>
                
            </div>
        </div>`,
        7:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: El 100tifico.</h3>
                <img src="../src/public/assets/images/fleming_alexander_penicilin.jpg" alt="fleming">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>BiologoDCorazon</b></h4>
                    <p>Qué hariamos sin la penicilina.</p> 

                </div>
                
            </div>
        </div>`,
        8:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: El 100tifico.</h3>
                <img src="../src/public/assets/images/gregor_mendel.jpg" alt="gregor">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>BiologoDCorazon</b></h4>
                    <p> Grandiosa y peculiar forma de esplicar la genética a travéz de chicharos.</p> 

                </div>
                
            </div>
        </div>`,
        9:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: Aburri 2.</h3>
                <img src="../src/public/assets/images/img_avatar3.png" alt="avatar">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>L sin q Hacer</b></h4>
                    <p>Te has encontrado con el avatar de la suerte, dale like !</p> 

                </div>
                
            </div>
        </div>`,
        10:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: Ramona.</h3>
                <img src="../src/public/assets/images/persona1.jpg" alt="p1">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>@Ramona</b></h4>
                    <p>Aquí como si no me diera cuenta !</p> 

                </div>
                
            </div>
        </div>`,
        11:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: Elvira.</h3>
                <img src="../src/public/assets/images/persona2.jpg" alt="p_2">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>@ElQueVira</b></h4>
                    <p>Sonrie a mi vida !</p> 

                </div>
                
            </div>
        </div>`,
        12:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: Frida Lizeth</h3>
                <img src="../src/public/assets/images/persona3.jpg" alt="p3">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>@FriLi</b></h4>
                    <p>Smile is my passion !</p> 

                </div>
                
            </div>
        </div>`,
        13:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: EstebanElRORO.</h3>
                <img src="../src/public/assets/images/persona4.jpg" alt="p4">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>@EstebAnd</b></h4>
                    <p>Exitirá algún día malo con ella ?!</p> 

                </div>
                
            </div>
        </div>`,
        14:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: Elena.</h3>
                <img src="../src/public/assets/images/persona5.jpg" alt="p5">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>@Elena</b></h4>
                    <p>Un dia increible en la UNICA FI !</p> 

                </div>
                
            </div>
        </div>`,
        15:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: Alumnos WebCourse.</h3>
                <img src="../src/public/assets/images/persona6.jpg" alt="p6">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>@PrebesGen79</b></h4>
                    <p> Yo cuando me enseñan WebPack </p> 

                </div>
                
            </div>
        </div>`,
        16:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: PrrosHaciendoCosas.</h3>
                <img src="../src/public/assets/images/perro1.jpg" alt="perro1">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>@perrosHaciendoCosas</b></h4>
                    <p>Qué me ves humano ?!</p> 

                </div>
                
            </div>
        </div>`,
        17:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: PrrosHaciendoCosas.</h3>
                <img src="../src/public/assets/images/perro2.jpg" alt="perro2">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>@perrosHaciendoCosas</b></h4>
                    <p>Quieres jugar conmigo ?!</p> 

                </div>
                
            </div>
        </div>`,
        18:`
        <div class="card" >
            <div class="container-photo">
                <h3>Publicacion de: PrrosHaciendoCosas.</h3>
                <img src="../src/public/assets/images/perros3.jpeg" alt="perro3">
            </div>
            
            <div class="container-card">
                <div class="buttoms">
                    <button class="green">Like</button>
                    <button class="red">Dislike</button>
                </div>
                <div class="information">
                    <h4><b>@perrosHaciendoCosas</b></h4>
                    <p> Pasa la pelota !!</p> 

                </div>
                
            </div>
        </div>`,
    };
    const view = dic_cards[number];  
        return view;
};

export default Cards;