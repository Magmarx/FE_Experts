// definición del url donde el json está almacenado
const url = 'https://next.json-generator.com/api/json/get/4Jfe8YWYP';
let s = [];

// función que inicia cuando el documento html está listo
$(document).ready(function ($) {
    // Definición de propiedades css de mi slider
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({
        width: slideWidth,
        height: slideHeight
    });

    $('#slider ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $('#slider ul li:last-child').prependTo('#slider ul');

    // Función para mover hacia la izquierda
    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    // Función para mover hacia la derecha
    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };
    //  Referencia de mis botones en el slider
    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
});

function mostrar() {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(function mostrarjson(mostrar) {
            // Obtengo los valores del json que me interesa
            let inputName = document.getElementById("nombre"),
                inputLast = document.getElementById("apellido"),
                inputEdad = document.getElementById("edad"),
                inputEmail = document.getElementById("email"),
                inputDireccion = document.getElementById("direccion"),
                inputActivos = document.getElementById("activos"),
                inputFechaRegistro = document.getElementById("fechaR"),
                inputOjos = document.getElementById("ojos"),
                inputCompania = document.getElementById("compania"),
                inputTelefono = document.getElementById("telefono"),
                inputFruta = document.getElementById("fruta"),
                inputAcerca = document.getElementById("acerca"),
                // Guardo estos valores dentro de otro objeto
                Datos = {
                    Nombre: inputName.value,
                    Apellido: inputLast.value,
                    Edad: inputEdad.value,
                    Email: inputEmail.value,
                    Dirección: inputDireccion.value,
                    Activos: inputActivos.value,
                    FechaRegistro: inputFechaRegistro.value,
                    ColorOjos: inputOjos.value,
                    Compañia: inputCompania.value,
                    Teléfono: inputTelefono.value,
                    FrutaFavorita: inputFruta.value,
                    AcercaDe: inputAcerca.value
                };
            // convierto mi objeto a tipo string y luego lo muestro en pantalla
            let datoscon = JSON.stringify(Datos);
            let res = datoscon.split(",");
            alert(res)
        })
};


function slider() {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(mostrar => {
            // Recorro todos los elementos de mi objeto
            mostrar.forEach(users => {
                let mainSlider = document.getElementById("mainSlider"),
                    liSlider = document.createElement("LI");
                // Inserto en mi slider los datos que quiero
                liSlider.innerText = `${users.name.first} ${users.name.last}`
                liSlider.style = `background-image: url(${users.image}); font-size: 30px;
        color: whitesmoke;`

                mainSlider.appendChild(liSlider);

                $(liSlider).on('click', function (e) {

                    e.preventDefault();

                    // Obtengo los valores del json para luego insertarlos en los inputs
                    let inputName = document.getElementById("nombre"),
                        inputLast = document.getElementById("apellido"),
                        inputEdad = document.getElementById("edad"),
                        inputEmail = document.getElementById("email"),
                        inputDireccion = document.getElementById("direccion"),
                        inputActivos = document.getElementById("activos"),
                        inputFechaRegistro = document.getElementById("fechaR"),
                        inputOjos = document.getElementById("ojos"),
                        inputCompania = document.getElementById("compania"),
                        inputTelefono = document.getElementById("telefono"),
                        inputFruta = document.getElementById("fruta"),
                        inputAcerca = document.getElementById("acerca"),
                        selectedUser = s.filter(user => (`${user.name.first} ${user.name.last}`) === this.innerText)[0];
                    // El lugar en donde inserto los datos del json
                    inputName.value = selectedUser.name.first;
                    inputLast.value = selectedUser.name.last;
                    inputEdad.value = selectedUser.age;
                    inputEmail.value = selectedUser.email;
                    inputDireccion.value = selectedUser.address;
                    inputActivos.value = selectedUser.balance;
                    inputFechaRegistro.value = selectedUser.registered;
                    inputOjos.value = selectedUser.eyeColor;
                    inputCompania.value = selectedUser.company;
                    inputTelefono.value = selectedUser.phone;
                    inputFruta.value = selectedUser.favoriteFruit;
                    inputAcerca.value = selectedUser.about;
                });
            });
            s = mostrar;
        })
};

// funciones para cambiar de información principal a secundaria y viceversa
function activar2() {
    let variable = document.getElementById("first"),
        va = document.getElementById("second"),
        variable2 = document.getElementById("primer"),
        va2 = document.getElementById("segundo");


    va.className = 'tab-group-child tab active';
    variable.className = "tab-group-child tab";
    variable2.className = 'none';
    va2.className = 'block';
}

function activar() {
    let variable = document.getElementById("first"),
        va = document.getElementById("second"),
        variable2 = document.getElementById("primer"),
        va2 = document.getElementById("segundo");


    va.className = 'tab-group-child tab';
    variable.className = "tab-group-child tab active";
    variable2.className = 'block';
    va2.className = 'none';
}

// funcion para borrar datos de los inputs
function borrar() {
    let inputName = document.getElementById("nombre"),
        inputLast = document.getElementById("apellido"),
        inputEdad = document.getElementById("edad"),
        inputEmail = document.getElementById("email"),
        inputDireccion = document.getElementById("direccion"),
        inputActivos = document.getElementById("activos"),
        inputFechaRegistro = document.getElementById("fechaR"),
        inputOjos = document.getElementById("ojos"),
        inputCompania = document.getElementById("compania"),
        inputTelefono = document.getElementById("telefono"),
        inputFruta = document.getElementById("fruta"),
        inputAcerca = document.getElementById("acerca");

    inputName.value = "";
    inputLast.value = "";
    inputEdad.value = "";
    inputEmail.value = "";
    inputDireccion.value = "";
    inputActivos.value = "";
    inputFechaRegistro.value = "";
    inputOjos.value = "";
    inputCompania.value = "";
    inputTelefono.value = "";
    inputFruta.value = "";
    inputAcerca.value = "";
}