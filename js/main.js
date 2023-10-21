
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
let listaDeJuegos = ["Selecciona un juego", "Dragon's Dogma", "The Witcher", "Wow", "Dragon Age"];




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
    contenedor.innerHTML = '<section id="selectGame" onLoad="cargaJuegosSelect()"><article><h4>' + tituloSelectGame + '</h4></article><select id="selectGameOption" name="selectGameOption"><option>Selecciona Dragons dogma</option></select></section>';
    console.log(contenedor);
}

function adOpciones(option, listaDeJuegos){
    var select = document.getElementsByName("selectGameOption");

    for (value in array){
        let option = document.createElement('option');
        option.text = listaDeJuegos[value];
        select.add(option);
    }
}

function cargaJuegos(){
    listaDeJuegos.sort();
    adOpciones("selectGameOption", listaDeJuegos);
}
console.log(adOpciones);

function cargaJuegosSelect(){
    cargaJuegos();
}

function hideSect(){
    let sectInicial = document.getElementById('inicial');
    sectInicial.style.display='none';
    buildSelectGame();
    let selectGame = document.getElementById('selectGame');
    selectGame.style.display="block";
    console.log(buildSelectClass);
}

function showSect(){
    
    
    console.log('muestra');
}


function buildIni(){
    console.log('test');
    hideSect();
    showSect();   
}


function buildSelectClass(){
       
}
function buildResult(){
       
}
