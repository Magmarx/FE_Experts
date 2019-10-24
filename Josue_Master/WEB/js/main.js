// const requestURL = 'http://www.json-generator.com/api/json/get/cgrHkGkAeq?indent=2';
const requestURL = 'https://next.json-generator.com/api/json/get/4Jfe8YWYP';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// declaracion de la posicion
let posicion = 0;

//declaracion de los objetos que se crean desde JS como variables globales.

let id = document.createElement('input'),
    labelID = document.createElement('label');
id.setAttribute("id", "Identificador");
labelID.textContent = "Identificador";

let eyes = document.createElement('input'),
    labelEyes = document.createElement('label');
eyes.setAttribute("id", "Eyes");
labelEyes.textContent = "Color de Ojos";

let fruit = document.createElement('input'),
    labelFruit = document.createElement('label');
fruit.setAttribute("id", "Fruit");
labelFruit.textContent = "Fruta Favorita";

let address = document.createElement('input'),
    labelAddress = document.createElement('label');
address.setAttribute("id", "Address");
labelAddress.textContent = "Direccion";

let fecRegistred = document.createElement('input'),
    labelFecRegistred = document.createElement('label');
fecRegistred.setAttribute("id", "FechaRegistro");
labelFecRegistred.textContent = "Fecha de Registro";

let MasInfo = document.createElement('textarea');
MasInfo.setAttribute("id", "MasInformacion");
MasInfo.setAttribute("rows", "10");
MasInfo.setAttribute("cols", "40");


//Funciones para cerrar Divs en pantalla menu principal
const CerrarDivInfo = () => {
    let masInfo = document.getElementById("SeccionMasInfo");
    masInfo.remove();
}
const CerrarDiv = () => {
    let detalle = document.getElementById("informacionDetallada");
    detalle.remove();
}

// Funcion que cambia al siguiente por medio de la Variable global posicion
let Next = () => {

    let objetoJson = request.response;
    if (posicion === objetoJson.length - 1) {
        posicion = 0;
        infoGeneral(objetoJson);
        llenadoDetallado(objetoJson);
    } else {
        posicion += 1;
        infoGeneral(objetoJson);
        llenadoDetallado(objetoJson);
    }
}

// Funcion que cambia al anterior por medio de la Variable global posicion
let Prev = () => {

    let objetoJson = request.response;


    if (posicion === 0) {
        posicion = objetoJson.length - 1;
        infoGeneral(objetoJson);
        llenadoDetallado(objetoJson);
    } else {
        posicion -= 1;
        infoGeneral(objetoJson);
        llenadoDetallado(objetoJson);
    }
}

//Funciones que cargan la informacion general del Registro mediante la posicion
const infoGeneral = (jsonObj) => {

    let name = jsonObj[posicion]["name"].first + ' ' + jsonObj[posicion]["name"].last,
        email = jsonObj[posicion]["email"],
        telefono = jsonObj[posicion]["phone"],
        company = jsonObj[posicion]["company"],
        foto = jsonObj[posicion]['image'];

    document.getElementById('Name').value = name;
    document.getElementById('Email').value = email;
    document.getElementById('Telefono').value = telefono;
    document.getElementById('Compañia').value = company;
    document.getElementById('fotoPerfil').src = foto;
    document.getElementById('fotoPerfil').height = "180";
    document.getElementById('fotoPerfil').width = "180";

};

const GenerarinfoGeneral = () => {
    let objetoJson = request.response;
    infoGeneral(objetoJson);
};

//funcion que crea un div de informacion detallada y llama otra fincion para llenar el formulario
const infoDetallada = () => {
    let jsonObj = request.response;

    let seccion2 = document.createElement('div');
    seccion2.setAttribute("id", "informacionDetallada");
    seccion2.setAttribute("class", "container card-panel grey lighten-2 z-depth-5");

    let titulo = document.createElement('h4');
    titulo.setAttribute("id", "Titulo");
    titulo.textContent = "Informacion Detallada";

    let Cerrar = document.createElement('button');
    Cerrar.setAttribute('id', 'Cerrar');
    Cerrar.setAttribute("class", "btn waves-effect waves-light red lighten-1");
    Cerrar.style = "float: right;";
    Cerrar.innerText = "X";
    Cerrar.setAttribute('onclick', 'CerrarDiv()');

    document.getElementById("center").appendChild(seccion2);
    seccion2.appendChild(Cerrar);
    seccion2.appendChild(titulo);
    seccion2.appendChild(eyes);
    seccion2.appendChild(labelEyes);
    seccion2.appendChild(fruit);
    seccion2.appendChild(labelFruit);
    seccion2.appendChild(id);
    seccion2.appendChild(labelID);
    seccion2.appendChild(address);
    seccion2.appendChild(labelAddress);
    seccion2.appendChild(fecRegistred);
    seccion2.appendChild(labelFecRegistred);

    llenadoDetallado(jsonObj);


};

//funcion que llena el formulario de detallado segun la variable global posicion  
const llenadoDetallado = (jsonObj) => {
    let ident = jsonObj[posicion]['_id'],
        fruta = jsonObj[posicion]['favoriteFruit'],
        ojos = jsonObj[posicion]['eyeColor'],
        direc = jsonObj[posicion]['address'],
        masIn = jsonObj[posicion]['about'],
        FecReg = jsonObj[posicion]['registered'];

    id.value = ident;
    fruit.value = fruta;
    eyes.value = ojos;
    address.value = direc;
    MasInfo.value = masIn;
    fecRegistred.value = FecReg;
}

//funcion que muestra el acerda de cada usuario que esta seleccionado
const AcercaDe = () => {

    let jsonObj = request.response;

    let seccion3 = document.createElement('div');
    seccion3.setAttribute("id", "SeccionMasInfo");
    seccion3.setAttribute("class", "container card-panel grey lighten-2 z-depth-5");

    let tituloMasInfo = document.createElement('h4');
    tituloMasInfo.setAttribute("id", "tituloMasInfo");
    tituloMasInfo.textContent = "Mas Informacion";

    let CerrarMasInfo = document.createElement('button');
    CerrarMasInfo.setAttribute('id', 'CerrarMasInfo');
    CerrarMasInfo.setAttribute("class", "btn waves-effect waves-light red lighten-1");
    CerrarMasInfo.style = "float: right;";
    CerrarMasInfo.innerText = "X";
    CerrarMasInfo.setAttribute('onclick', 'CerrarDivInfo()');

    document.getElementById("center").appendChild(seccion3);
    seccion3.appendChild(CerrarMasInfo);
    seccion3.appendChild(tituloMasInfo);
    seccion3.appendChild(MasInfo);

    llenadoDetallado(jsonObj);
};