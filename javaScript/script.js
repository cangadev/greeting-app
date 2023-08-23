
function carregar(){
let msgHora = document.querySelector("h4");
let bigGround = document.querySelector(".content");
let card = document.querySelector("section");
let image = document.querySelector("img");


const date = new Date();

let hora = date.getHours();

if(hora >= 0 && hora < 12){

    msgHora.innerHTML = `It's ${hora} hours greet you G'morning`;

    image.src = "./img/manha.jpg";

    bigGround.style.background = '#4883ff';

    card.style.backgroundColor = 'white';
    
    msgHora.style.color= '#4883ff'

}else if(hora >= 12 && hora < 18){

    msgHora.innerHTML = `It's ${hora} hours greet you G'afternoon`;

    image.src = "./img/tarde.jpg"

    bigGround.style.background = 'rgba(0, 0, 255, 0.286)';

    card.style.backgroundColor = 'rgb(49, 49, 77)'

}else{
    msgHora.innerHTML = `It's ${hora} hours greet G'evening`;

    image.src = "./img/noite.jpg";

    bigGround.style.background = 'rgba(0, 0, 0, 0.868)';

    card.style.backgroundColor = 'rgb(100, 89, 89)';
}

}

carregar()
