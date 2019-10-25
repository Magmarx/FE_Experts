let usuarios = []



$(document).ready(function ($) {


    let div1 = document.getElementById('primario');
    let div2 = document.getElementById('secas');

    div2.setAttribute('class', 'ocultar');

    let ant = document.getElementById('anterior');
    let sig = document.getElementById('siguiente');

    let generar = document.getElementById('generar');

    $(generar).on('click', function (e) {
      
      
        e.preventDefault();

        let name = document.getElementById("name"),
            lastname = document.getElementById("lastname"),
            age = document.getElementById("age"),
            email2 = document.getElementById("email"),
            address = document.getElementById("address"),
            balance = document.getElementById("balance"),
            inDate = document.getElementById("inDate"),
            eyes = document.getElementById("eyes"),
            company = document.getElementById("company"),
            phone = document.getElementById("phone"),
            fruit = document.getElementById("fruit"),
            about = document.getElementById("description"),
            jsongen = {
                nombre: name.value,
                apellido: lastname.value,
                edad: age.value,
                email: email2.value,
                direccion: address.value,
                ingresos: balance.value,
                fecha_reg: inDate.value,
                color_ojos: eyes.value,
                empresa: company.value,
                num_telefono: phone.value,
                fruta_fav: fruit.value,
                descripcion: about.value
    
            };

            
            let leibolsd = document.getElementById('jsonxd');
            leibolsd.textContent = JSON.stringify(jsongen);
            
            let modal = document.getElementById('contenidoModal');

            modal.appendChild(leibolsd);

            
        });
    

    $.get('https://next.json-generator.com/api/json/get/4Jfe8YWYP', function (data) {

        let perfil = document.getElementById('perfil');
        let posicion = 0;
        usuarios = data;
        
        console.log(usuarios[0]);

        perfil.classList.add("z-depth-4");
        perfil.style = `background-image: url(${usuarios[posicion].image});
    height: 200px; width: 420px; border-radius: 50px;`

        const laberlxxd = document.createElement('label');

        laberlxxd.textContent = usuarios[posicion].name.first + ' ' + usuarios[posicion].name.last;

        laberlxxd.setAttribute('class', 'center-align col s12');

        laberlxxd.style = `margin-top: 80px; font-size: 30px; color: white;`

        perfil.appendChild(laberlxxd);



        let nombre = usuarios[posicion].name.first;
        let apellido = usuarios[posicion].name.last;
        let edad = usuarios[posicion].age;
        let email = usuarios[posicion].email;
        let direccion = usuarios[posicion].address;
        let ingresos = usuarios[posicion].balance;
        let fecha = usuarios[posicion].registered;
        let ojos = usuarios[posicion].eyeColor;
        let empresa = usuarios[posicion].company;
        let telefono = usuarios[posicion].phone;
        let fruta = usuarios[posicion].favoriteFruit;
        let descripcion = usuarios[posicion].about;


        $(ant).on('click', function (e) {
            if (posicion === 0) {
                posicion = 23;
            } else {
                posicion -= 1;
            }

            perfil.style = `background-image: url(${usuarios[posicion].image});
    height: 200px; width: 420px; border-radius: 50px;`
            laberlxxd.textContent = usuarios[posicion].name.first + ' ' + usuarios[posicion].name.last;

            nombre = usuarios[posicion].name.first;
            apellido = usuarios[posicion].name.last;
            edad = usuarios[posicion].age;
            email = usuarios[posicion].email;
            direccion = usuarios[posicion].address;
            ingresos = usuarios[posicion].balance;
            fecha = usuarios[posicion].registered;
            ojos = usuarios[posicion].eyeColor;
            empresa = usuarios[posicion].company;
            telefono = usuarios[posicion].phone;
            fruta = usuarios[posicion].favoriteFruit;
            descripcion = usuarios[posicion].about;
        });

        $(sig).on('click', function (e) {
            if (posicion === 23) {
                posicion = 0;
            } else {
                posicion += 1;
            }

            perfil.style = `background-image: url(${usuarios[posicion].image});
    height: 200px; width: 420px; border-radius: 50px;`
            laberlxxd.textContent = usuarios[posicion].name.first + ' ' + usuarios[posicion].name.last;

            nombre = usuarios[posicion].name.first;
            apellido = usuarios[posicion].name.last;
            edad = usuarios[posicion].age;
            email = usuarios[posicion].email;
            direccion = usuarios[posicion].address;
            ingresos = usuarios[posicion].balance;
            fecha = usuarios[posicion].registered;
            ojos = usuarios[posicion].eyeColor;
            empresa = usuarios[posicion].company;
            telefono = usuarios[posicion].phone;
            fruta = usuarios[posicion].favoriteFruit;
            descripcion = usuarios[posicion].about;
        });







        $(perfil).on('click', function (e) {
            document.getElementById("name").value = nombre;
            document.getElementById("lastname").value = apellido;
            document.getElementById("age").value = edad;
            document.getElementById("email").value = email;
            document.getElementById("address").value = direccion;
            document.getElementById("balance").value = ingresos;
            document.getElementById("inDate").value = fecha;
            document.getElementById("eyes").value = ojos;
            document.getElementById("company").value = empresa;
            document.getElementById("phone").value = telefono;
            document.getElementById("fruit").value = fruta;
            document.getElementById("description").value = descripcion;

        });


    
        
    });


    let infoP = document.getElementById('principal');
    let infoS = document.getElementById('masinfo');
    $(infoP).on('click', function () {

        div1.setAttribute('class', 'mostrar');
        div2.setAttribute('class', 'ocultar');
    });


    $(infoS).on('click', function () {

        div1.setAttribute('class', 'ocultar');
        div2.setAttribute('class', 'mostrar');

    });

});