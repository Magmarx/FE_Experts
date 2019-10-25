// definición del url donde el json está almacenado
const url = 'https://next.json-generator.com/api/json/get/4Jfe8YWYP';
let newArray = [];

// función que inicia cuando el documento html está listo
$(document).ready(function ($) {
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


                    let inputs = $("#formulario :input");
                    inputs.each(function () {
                        if (this.type !== "button") {
                            if (this.getAttribute("json2")) {
                                let atributo = this.getAttribute("json"),
                                    atributo2 = this.getAttribute("json2");

                                this.value = users[atributo][atributo2]
                            } else {
                                let atributo = this.getAttribute("json");
                                this.value = users[atributo];
                            }
                        }

                    });
                });
            });
            newArray = mostrar;
        });



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
        .then(mostrar => {
            mostrar.forEach(users => {
                // Obtengo los valores del json que me interesa
                let inputs = $("#formulario :input");
                inputs.each(function () {
                    if (this.type !== "button") {
                        if (this.getAttribute("json2")) {
                            let atributo = this.getAttribute("json"),
                                atributo2 = this.getAttribute("json2");

                            this.value = users[atributo][atributo2];
                        } else {
                            let atributo = this.getAttribute("json");
                            this.value = users[atributo];
                        }
                    }
                    let valor = {}
                    valor = this.value;
                    console.log(valor);
                });
                // convierto mi objeto a tipo string y luego lo muestro en pantalla
            });
        });
};


// funciones para cambiar de información principal a secundaria y viceversa
function activarSecundaria() {
    let primer = document.getElementById("first"),
        segundo = document.getElementById("second"),
        primer2 = document.getElementById("primer"),
        segundo2 = document.getElementById("segundo");

    primer.className = "tab-group-child tab";
    segundo.className = 'tab-group-child tab active';
    primer2.className = 'none';
    segundo2.className = 'block';
}

function activarPrincipal() {
    let primer = document.getElementById("first"),
        segundo = document.getElementById("second"),
        primer2 = document.getElementById("primer"),
        segundo2 = document.getElementById("segundo");

    primer.className = "tab-group-child tab active";
    segundo.className = 'tab-group-child tab';
    primer2.className = 'block';
    segundo2.className = 'none';
}

function borrar() {
    let inputs = $("#formulario :input");
    inputs.each(function () {
        if (this.type !== "button") {
            this.value = "";
        }
    });
}
