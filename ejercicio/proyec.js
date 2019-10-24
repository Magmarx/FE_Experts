// const url = 'https://next.json-generator.com/api/json/get/4Jfe8YWYP'
// console.log('element.json')
let users = []

$(document).ready(function ($) {

    let button = document.getElementById("getStarted");

    $(button).on('click', function (e) {
      
      
        e.preventDefault();

        let fname = document.getElementById("fname"),
            lname = document.getElementById("lname"),
            iedad = document.getElementById("iedad"),
            icorreo = document.getElementById("icorreo"),
            genero = document.getElementById("genero"),
            jsonData = {
                fname: fname.value,
                lname: lname.value,
                iedad: iedad.value,
                icorreo: icorreo.value,
                genero: genero.value,
                
            };

        alert(JSON.stringify(jsonData));

      });