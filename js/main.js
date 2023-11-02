

let nuevoSection = document.createElement('section'); //Creo un select
let nuevoArticle = document.createElement('article'); //Creo un select
let nuevoHeader = document.createElement('header');
let nuevoHeadDos = document.createElement('h2');
let nuevoSelectGen = document.createElement('select');
let nuevoOptionSel = document.createElement('option')
let contenedor = document.getElementById('contenedor');
let insertSecDom = contenedor.appendChild(nuevoSection);
let insertArtDom = contenedor.appendChild(nuevoArticle);
let titulo = 'hola';
let tituloSelectGame = 'Selecciona Dragons dogma';
let listaDeJuegos = ["Dragon's Dogma", "The Witcher", "Wow", "Dragon Age"];
let dragonsDogma = ["Dragon's Dogma", "Luchador", "Strider", "Mago", "Guerrero", "Ranger", "Hechicero", "Asesino",  "Arquero Mágico", "Caballero Místico"];
let theWitcher = ["The Witcher", "Luchador", "Strider", "Mago", "Guerrero"]
let nombreListas =[theWitcher[0], dragonsDogma[0]];

function contenidoIni(){

    contenedor.innerHTML = '<section id="inicial"><header><h2>' + titulo + '</h2><article><button id="btnInicia" onClick="hideSect();">hola</button></article></header></section>';
    /*let sectInicial = document.getElementById('inicial');    
    sectInicial.appendChild(nuevoArticle).setAttribute('id', 'contTitu');
    let artInicial = document.getElementById('contTitu');
    artInicial.appendChild(nuevoHeadDos).setAttribute('id', 'subtitle')
    let headInicial = document.getElementById('subtitle');
    headInicial.innerHTML = "Hola aquí podrás ver las builds que te ofrecen los diferentes juegos RPG";*/
    console.log(contenedor);

    //contenedor.innerHTML('nuevoSection');
}

function buildSelectGame(){
    contenedor.innerHTML = '<section id="selectGame" onLoad="listadoOrdenado()"><article><h4>' + tituloSelectGame + '</h4></article><form action="feeding" method="post"><select id="selectGameOption" name="selectGameOption"<option class="opJuego" >Selecciona un juego</option></select></form><button onclick="imprimeJuegoSelect()">traiga la info porfis</button></section>';
    console.log(contenedor);
}


//////////////////////////////////////////////
/*Cod de internet*/
/*function adOpciones(option, listaDeJuegos){
    var select = document.getElementsByName("selectGameOption");

    for (value in array){
        let option = document.createElement('option');
        option.text = listaDeJuegos[value];
        select.add(option);
    }

function cargaJuegos(){
    listaDeJuegos.sort();
    //adOpciones("selectGameOption", listaDeJuegos);
}
/*function cargaJuegosSelect(){
    cargaJuegos();
}*/
//////////////////////////////////////////////


function hideSect(){
    let sectInicial = document.getElementById('inicial');
    sectInicial.style.display='none';
    buildSelectGame();
    let selectGame = document.getElementById('selectGame');
    selectGame.style.display="block";
    listadoJuegosOrdenado();
    
}

///////////////////////////////////////////////
/*Trabajado por mi*/
let ordenarLista = listaDeJuegos.sort();
function listadoJuegosOrdenado(){
    let selectorLista = document.getElementById('selectGameOption');
    console.log(ordenarLista);
    for (var i = 0; i < ordenarLista.length; i++){
        selectorLista.options[i] = new Option(ordenarLista[i]);
        selectorLista.options[i].value = (ordenarLista[i]);
    };
}



function imprimeJuegoSelect(){ 
    let seleOpt = document.getElementById('selectGameOption');
    let juegoSeleccionado = seleOpt.value;
    if (juegoSeleccionado == dragonsDogma[0]) {
        console.log(dragonsDogma);
    } else if (juegoSeleccionado == theWitcher){
        console.log(theWitcher);
    } else {
        console.log("no hay nada");
    };
    
}

function encuentraLista(){
    if (imprimeJuegoSelect == dragonsDogma[0]) {
        console.log(dragonsDogma);
    }    
}

encuentraLista();


///////////////////////////////////////////////

function showSect(){
    console.log('muestra');
}

/*
function buildIni(){
    console.log('test');
    hideSect();
    showSect();   
}*/


function buildSelectClass(){
       
}
function buildResult(){
       
}
