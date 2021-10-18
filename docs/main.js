let bolillas = [];

const btnSortear = document.querySelector('#btnSortear');
const btnReset = document.querySelector('#btnReset');

const container = document.querySelector('.container-numero');

const mezclarNumeros = () => {
    for(let i = 1; i<=75; i++){
        bolillas.push(i);
    }

    bolillas = _.shuffle(bolillas);
    return bolillas;
}

const sortearNumeros = () => {

    if( bolillas.length === 0){
        alert('Se acabo el juego. No hay más bolillas');
        throw 'Game Over';
    } 

    const bolillaFuera = bolillas.pop();
    console.log(bolillaFuera);
    return bolillaFuera;    
}

mezclarNumeros();


btnSortear.addEventListener('click', () => {

    const bolaFuera = sortearNumeros();

    container.innerText = bolaFuera;

    const numero = document.querySelector(`#numero${bolaFuera}`);

    for(let i = 1; i<= 75; i++){

        if(bolaFuera == i){
            numero.classList.add('pintarNumero');
        }

    }



})

btnReset.addEventListener('click', () => {

    console.clear();
    bolillas = [];
    bolillas = mezclarNumeros();

    container.innerText = '0';

    const numero1 = document.querySelectorAll('td');

    for(let i=0; i<=numero1.length; i++){
        numero1[i].classList.remove('pintarNumero');
    }
    
})