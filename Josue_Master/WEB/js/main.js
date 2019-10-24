// const requestURL = 'http://www.json-generator.com/api/json/get/cgrHkGkAeq?indent=2';
const requestURL = 'https://next.json-generator.com/api/json/get/4Jfe8YWYP';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// declaracion de la variable posicion esta controla de que posicion se toman los datos del Json
let posicion = 0;

//declaracion de los elementos que se crean desde JS se les asigna como variables globales.

const id = document.createElement('input'),
    labelID = document.createElement('label');
id.setAttribute("id", "Identificador");
labelID.textContent = "Identificador";

const eyes = document.createElement('input'),
    labelEyes = document.createElement('label');
eyes.setAttribute("id", "Eyes");
labelEyes.textContent = "Color de Ojos";

const fruit = document.createElement('input'),
    labelFruit = document.createElement('label');
fruit.setAttribute("id", "Fruit");
labelFruit.textContent = "Fruta Favorita";

const address = document.createElement('input'),
    labelAddress = document.createElement('label');
address.setAttribute("id", "Address");
labelAddress.textContent = "Direccion";

const fecRegistred = document.createElement('input'),
    labelFecRegistred = document.createElement('label');
fecRegistred.setAttribute("id", "FechaRegistro");
labelFecRegistred.textContent = "Fecha de Registro";

const MasInfo = document.createElement('textarea');
MasInfo.setAttribute("id", "MasInformacion");
MasInfo.setAttribute("rows", "20");
MasInfo.setAttribute("cols", "40");

// Funcion que cambia al siguiente por medio de la Variable global posicion
let Next = () => {

    const objetoJson = request.response;
    if (posicion === objetoJson.length - 1) {
        posicion = 0;
        infoGeneral(objetoJson);
        lenadoDeObjetos(objetoJson);
    } else {
        posicion += 1;
        infoGeneral(objetoJson);
        lenadoDeObjetos(objetoJson);
    }
}

// Funcion que cambia al anterior por medio de la Variable global posicion
let Prev = () => {

    const objetoJson = request.response;


    if (posicion === 0) {
        posicion = objetoJson.length - 1;
        infoGeneral(objetoJson);
        lenadoDeObjetos(objetoJson);
    } else {
        posicion -= 1;
        infoGeneral(objetoJson);
        lenadoDeObjetos(objetoJson);
    }
}

//Funciones que cargan la informacion general del Registro mediante la posicion
const infoGeneral = (jsonObj) => {
    //se obtienen los datos del objeto Json y se asiganan a variable locales
    const name = jsonObj[posicion]["name"].first + ' ' + jsonObj[posicion]["name"].last,
        email = jsonObj[posicion]["email"],
        telefono = jsonObj[posicion]["phone"],
        company = jsonObj[posicion]["company"],
        foto = jsonObj[posicion]['image'];
    //se llenan los elementos del doc. HTML estos elementos ya estan en html
    document.getElementById('Name').value = name;
    document.getElementById('Email').value = email;
    document.getElementById('Telefono').value = telefono;
    document.getElementById('Compañia').value = company;
    document.getElementById('fotoPerfil').src = foto;
    document.getElementById('fotoPerfil').height = "180";
    document.getElementById('fotoPerfil').width = "180";

};

const GenerarinfoGeneral = () => {
    const objetoJson = request.response;
    infoGeneral(objetoJson);
};

//funcion que crea un div de informacion detallada y llama otra fincion para llenar el formulario
const infoDetallada = () => {
    const jsonObj = request.response;

    //Creacion del modal que se muestra en la pantalla
    const basemodal = document.getElementById('modal1');
    //creacion del DIV dentro del modal cuando el usuario desida dar click al boton Detallado
    const seccion2 = document.createElement('div');
    seccion2.setAttribute("id", "informacionDetallada");
    seccion2.setAttribute("class", "container");
    //titulo del div que tambien se crea al dar click al boton Detallado
    const titulo = document.createElement('h4');
    titulo.setAttribute("id", "Titulo");
    titulo.textContent = "Informacion Detallada";
    //Creacion del boton de cerrar.
    const Cerrar = document.createElement('button');
    Cerrar.setAttribute('id', 'Cerrar');
    Cerrar.setAttribute("class", "btn waves-effect waves-light red lighten-1 modal-close");
    Cerrar.style = "float: right;";
    Cerrar.innerText = "X";
    Cerrar.setAttribute('onclick', 'document.getElementById("informacionDetallada").remove()');
    //Asignacion de Elementos al Div que se creo estos elementos estan creados como variables globales al inico del codigo

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
    basemodal.appendChild(seccion2);
    //llamado a la funcion que llena los elementos con los datos del objeto Json.
    lenadoDeObjetos(jsonObj);

};

//funcion que llena los formulario segun la variable global posicion
//Esta funcion es llamada dentro de las funciones Next(),Prev(),infoDetallada(),AcercaDe() para que se llenen los elementos siempre.
const lenadoDeObjetos = (jsonObj) => {
    //declaracion de variables locales las cuales obtienene la informacion del Json.
    const ident = jsonObj[posicion]['_id'],
        fruta = jsonObj[posicion]['favoriteFruit'],
        ojos = jsonObj[posicion]['eyeColor'],
        direc = jsonObj[posicion]['address'],
        masIn = jsonObj[posicion]['about'],
        FecReg = jsonObj[posicion]['registered'];
    //llenado de Inputs de la seccion de Informacion Detallada, asignandoles las variables locales declaradas arriba.
    id.value = ident;
    fruit.value = fruta;
    eyes.value = ojos;
    address.value = direc;
    fecRegistred.value = FecReg;
    //Llenado de seccion de Acerca de, asignandoles las variables locales declaradas arriba.
    MasInfo.value = masIn;
}

//funcion que muestra el acerda de cada usuario que esta seleccionado
const AcercaDe = () => {

    const jsonObj = request.response;
    //Creacion del modal que se muestra en la pantalla
    const basemodal = document.getElementById('modal2.1');
    //creacion del div dentro del modal cuando el usuario desida dar click al boton Acerca De
    const seccion3 = document.createElement('div');
    seccion3.setAttribute("id", "SeccionMasInfo");
    seccion3.setAttribute("class", "container");
    //titulo del div que tambien se crea al dar click al boton Acerca De
    const tituloMasInfo = document.createElement('h4');
    tituloMasInfo.setAttribute("id", "tituloMasInfo");
    tituloMasInfo.textContent = "Mas Informacion";
    //Creacion del boton Cerrar
    const CerrarMasInfo = document.createElement('button');
    CerrarMasInfo.setAttribute('id', 'CerrarMasInfo');
    CerrarMasInfo.setAttribute("class", "btn waves-effect waves-light red lighten-1 modal-close");
    CerrarMasInfo.style = "float: right;";
    CerrarMasInfo.innerText = "X";
    CerrarMasInfo.setAttribute('onclick', 'document.getElementById("SeccionMasInfo").remove()');
    //Asignacion de Elementos al Div que se creo estos elementos estan creados como variables globales al inico del codigo
    seccion3.appendChild(CerrarMasInfo);
    seccion3.appendChild(tituloMasInfo);
    seccion3.appendChild(MasInfo);
    basemodal.appendChild(seccion3);
    //llamado a la funcion que llena los elementos con los datos del objeto Json.
    lenadoDeObjetos(jsonObj);
};