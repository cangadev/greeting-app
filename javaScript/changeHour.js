let btnEdit = document.querySelector("#AddHour")

btnEdit.onclick = () =>{
let divEdit = document.querySelector("#sectionEdit")
divEdit.style.display = 'flex';
}

let btnEditHour = document.querySelector("#sectionEdit button")

btnEditHour.onclick= () =>{
let inputEdit = document.querySelector("#sectionEdit input");
let msgHora = document.querySelector("h4");
let bigGround = document.querySelector(".content");
let card = document.querySelector("section");
let image = document.querySelector("img");

let hora = inputEdit.value;

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

}else if(hora >= 18 && hora < 24){
    msgHora.innerHTML = `It's ${hora} hours greet G'evening`;

    image.src = "./img/noite.jpg";

    bigGround.style.background = 'rgba(0, 0, 0, 0.868)';

    card.style.backgroundColor = 'rgb(100, 89, 89)';

}else{
    msgHora.innerHTML = `${hora} hours is invalid!`;

    image.src = "./img/lkiu.png";

    bigGround.style.background = 'rgba(0, 0, 0, 0.868)';

    card.style.backgroundColor = 'yellow';
}
}
