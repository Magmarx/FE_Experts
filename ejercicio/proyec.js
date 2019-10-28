$(document).ready(function () {
    let fname = document.getElementById("fname"),
        lname = document.getElementById("lname"),
        iedad = document.getElementById("iedad"),
        icorreo = document.getElementById("icorreo"),
        idireccion = document.getElementById("idireccion"),
        iactivo = document.getElementById("iactivo"),
        iregistro = document.getElementById("iregistro"),
        cojos = document.getElementById("cojos"),
        company = document.getElementById("company"),
        itelefono = document.getElementById("itelefono"),
        ifruta = document.getElementById("ifruta"),
        carousel = document.getElementById("contenedorCarusel");

    fetch('https://next.json-generator.com/api/json/get/4Jfe8YWYP')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            carro(myJson);
            
        });

    function carro(array) {
        console.log(array)

        array.forEach(element => {
            
            let div1 = document.createElement("div"),
                img = document.createElement("img"),
                div2 = document.createElement("div"),
                h5 = document.createElement("h5");
                
            div1.setAttribute("class", "carousel-item");

            img.setAttribute("class", "d-block w-100 imgCarusel");
            img.src = element.image;

            div2.setAttribute("class", "carousel-caption d-none d-md-block");

            h5.setAttribute("class","text-body");
            h5.innerText = element.name.first;

            carousel.appendChild(div1);
            div1.appendChild(img);
            div1.appendChild(div2);
            div2.appendChild(h5);
            $(h5).on('click', function () {
                completeForm(element);
            });
        });
    }

function completeForm(formu){
    fname.value = formu.name.first
    lname.value = formu.name.last
    iedad.value = formu.age
    icorreo.value = formu.email
    idireccion.value = formu.address
    iactivo.value = formu.balance
    iregistro.value = formu.registered
    cojos.value = formu.eyeColor
    company.value = formu.company
    itelefono.value = formu.phone
    ifruta.value = formu.favoriteFruit

}
});
function clickbutton(){
    let objeto = {
        nombre: fname.value,
        apellido: lname.value,
        edad:iedad.value,
        correo: icorreo.value,
        direccion:idireccion.value,
        activo:iactivo.value, 
        registro:iregistro.value,
        ojos: cojos.value,  
        conpañia: company.value, 
        telefono:itelefono.value,
        fruta: ifruta.value
    };
    // console.log(objeto);
    alert(JSON.stringify(objeto))
}

// // const url = 'https://next.json-generator.com/api/json/get/4Jfe8YWYP'
// // console.log('element.json')
// let users = []

// $(document).ready(function ($) {

//     let button = document.getElementById("getStarted");

//     $(button).on('click', function (e) {


//         e.preventDefault();

//         let fname = document.getElementById("fname"),
//             lname = document.getElementById("lname"),
//             iedad = document.getElementById("iedad"),
//             icorreo = document.getElementById("icorreo"),
//             idireccion = document.getElementById("idireccion"),
//             iactivos = document.getElementById("iactivos"),
//             iregistro = document.getElementById("iregistro"),

//             jsonData = {
//                 fname: fname.value,
//                 lname: lname.value,
//                 iedad: iedad.value,
//                 icorreo: icorreo.value,
//                 idireccion: idireccion.value,
//                 iactivos: iactivos.value,
//                 iregistro:iregistro.value 
//             };

//         alert(JSON.stringify(jsonData));

//       });
//     });