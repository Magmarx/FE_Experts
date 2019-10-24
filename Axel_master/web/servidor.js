//URL del JSON
const url = 'http://www.json-generator.com/api/json/get/bPBDkSDgvC?indent=2';
const urlM = 'https://next.json-generator.com/api/json/get/4Jfe8YWYP';

//  ------------- METODO XMLttpRequest -------------
// const xhr = new XMLHttpRequest();
// xhr.open('GET', url);

// xhr.responseType = 'json';
// xhr.send();


// function mensaje(){
//     const datosJson = xhr.response;
//     alert(datosJson[0].name);
// };

//  ------------- METODO FETCH -------------
$(document).ready(function(){
    //Llama a la funcion que Crea la lista e ingresa Datos
     list();

     //JQuery para el Diseño - cambia formulario principal / formulario Segundario
    $('#btnPrimary').on('click', function(){
        $('#contPrimary').css({display: 'block'});
        $('#contSecondary').css({display: 'none'});

        $('#btnPrimary').removeClass('btn-secondary').addClass('btn-primary');
        $('#btnSecondary').removeClass('btn-primary').addClass('btn-secondary');
    });
    $('#btnSecondary').on('click', function(){
        $('#contPrimary').css({display: 'none'});
        $('#contSecondary').css({display: 'block'});

        $('#btnPrimary').removeClass('btn-primary').addClass('btn-secondary');
        $('#btnSecondary').removeClass('btn-secondary').addClass('btn-primary');
    });

    $('#JsonButton').on('click', function(){
        let nameFirst = document.getElementById('firstName'),
            nameLast = document.getElementById('lastName'),
            age = document.getElementById('age'),
            email = document.getElementById('email'),
            address = document.getElementById('address'),
            active = document.getElementById('active'),
            date = document.getElementById('date'),
            colorEyes = document.getElementById('colorEyes'),
            company = document.getElementById('company'),
            phone = document.getElementById('phone'),
            frut = document.getElementById('frut'),
            byPerson = document.getElementById('person');

        if(nameFirst.value === "" || nameLast === ""){
            alert("Los campos estan vacios")
        }
        else{
            let codJson = {
                    nombre: `${nameFirst.value} ${nameLast.value}`,
                    años: age.value,
                    email: email.value,
                    direccion: address.value,
                    balance: active.value,
                    fecha: date.value,
                    coloOjos: colorEyes.value,
                    compania: company.value,
                    Telefono: phone.value,
                    FrutaFavorita: frut.value,
                    detallesPersona: byPerson.value
                };
                alert(JSON.stringify(codJson));
        };
    });
});
//funcion que Crea la lista e ingresa Datos
function list(){
    let containerData = document.getElementById('containerData');
    
    //Metodo de FETCH para llamar al JSON
    fetch(urlM).then(response =>{
        return response.json();
    }).then(data =>{
        // ForEach para poder acceder a cada elemento de JSON|
        data.forEach(element => {
            let listPerson = document.createElement('LI');

            listPerson.className = "list-group-item listItemH"; 
            listPerson.innerText = `${element.index}) ${element.name.first} ${element.name.last}`;

            containerData.appendChild(listPerson);

            $(listPerson).on('click',function(){
                let img = document.getElementById('fondoImg'),
                    namePerson = document.getElementById('namePerson');
                
                img.style = `background-image: url(${element.image});`
                namePerson.innerText = element.name.first;
                
                //Llama a la funcion para llenar los Datos del JSON
                LlenarDatos(element);
            });
        });
    }).catch(error =>{
        console.log("Error de JSON: " + error)
    });
};
//funcion para llenar los Datos del JSON
function LlenarDatos(data){
    let nameFirst = document.getElementById('firstName'),
        nameLast = document.getElementById('lastName'),
        age = document.getElementById('age'),
        email = document.getElementById('email'),
        address = document.getElementById('address'),
        active = document.getElementById('active'),
        date = document.getElementById('date'),
        colorEyes = document.getElementById('colorEyes'),
        company = document.getElementById('company'),
        phone = document.getElementById('phone'),
        frut = document.getElementById('frut'),
        byPerson = document.getElementById('person');

        nameFirst.value = data.name.first;
        nameLast.value = data.name.last;
        age.value = data.age;
        email.value = data.email;
        address.innerText = data.address;
        active.value = data.balance;
        date.value = data.registered;
        colorEyes.value = data.eyeColor;
        company.value = data.company;
        phone.value = data.phone;
        frut.value = data.favoriteFruit;
        byPerson.innerText = data.greeting;
        // console.log('Datos' + nameFirst)
};