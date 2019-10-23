const url = 'https://next.json-generator.com/api/json/get/VywQrD_FD';

// $(document).ready(function (datos) {
//     let inputImage = document.getElementById("imagen");

//     datos.forEach(slider => {
//         inputImage.style.backgroundImage.url = `${slider.image}`;
//     });

// });

function mostrarjson() {
    fetch(url)
        .then(response => {
            return response.json();
        }).then(function mostrarjson(mostrar) {
            mostrar.forEach(users => {
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
                    }


                inputName.value = `${users.name.first}`;
                inputLast.value = `${users.name.last}`;
                inputEdad.value = `${users.age}`;
                inputEmail.value = `${users.email}`;
                inputDireccion.value = `${users.address}`;
                inputActivos.value = `${users.balance}`;
                inputFechaRegistro.value = `${users.registered}`;
                inputOjos.value = `${users.eyeColor}`;
                inputCompania.value = `${users.company}`;
                inputTelefono.value = `${users.phone}`;
                inputFruta.value = `${users.favoriteFruit}`;
                inputAcerca.value = `${users.about}`;


                // mainSlider.appendChild(liSlider);
                alert(JSON.stringify(Datos))
            });
        })
}

function slider() {
    data.forEach(slider => {
        let mainSlider = document.getElementById("mainSlider"),
            liSlider = document.createElement("LI");

        liSlider.innerText = `${slider.name.first} ${slider.name.last}`
        liSlider.style = `background-image: url(${slider.image}); font-size: 30px;
    color: whitesmoke;`

        mainSlider.appendChild(liSlider);

        $(liSlider).on('click', function (e) {

            e.preventDefault();

            let name = document.getElementById("nombre"),
                lastname = document.getElementById("lastname"),
                age = document.getElementById("age"),
                email = document.getElementById("email"),
                address = document.getElementById("address"),
                balance = document.getElementById("balance"),
                inDate = document.getElementById("inDate"),
                eyes = document.getElementById("eyes"),
                company = document.getElementById("company"),
                phone = document.getElementById("phone"),
                fruit = document.getElementById("fruit"),
                about = document.getElementById("about"),
                greeting = document.getElementById("greeting"),
                nameLabel = $("#name").prev('label'),
                lastnameLabel = $("#lastname").prev('label'),
                ageLabel = $("#age").prev('label'),
                emailLabel = $("#email").prev('label'),
                addressLabel = $("#address").prev('label'),
                balanceLabel = $("#balance").prev('label'),
                inDateLabel = $("#inDate").prev('label'),
                eyesLabel = $("#eyes").prev('label'),
                companyLabel = $("#company").prev('label'),
                phoneLabel = $("#phone").prev('label'),
                fruitLabel = $("#fruit").prev('label'),
                aboutLabel = $("#about").prev('label'),
                selectedUser = users.filter(user => (`${user.name.first} ${user.name.last}`) === this.innerText)[0];

            //Mover las etiquetas hacia abajo de la primera pantalla
            nameLabel.addClass('active highlight');
            lastnameLabel.addClass('active highlight');
            ageLabel.addClass('active highlight');
            emailLabel.addClass('active highlight');
            addressLabel.addClass('active highlight');
            balanceLabel.addClass('active highlight');
            inDateLabel.addClass('active highlight');

            //Mover las etiquetas hacia abajo de la segunda pantalla

            eyesLabel.addClass('active highlight');
            companyLabel.addClass('active highlight');
            phoneLabel.addClass('active highlight');
            fruitLabel.addClass('active highlight');
            aboutLabel.addClass('active highlight');


            //Datos primera pantalla
            name.value = selectedUser.name.first;
            lastname.value = selectedUser.name.last;
            age.value = selectedUser.age;
            email.value = selectedUser.email;
            address.value = selectedUser.address;
            balance.value = selectedUser.balance;
            inDate.value = selectedUser.registered;
            greeting.innerText = selectedUser.greeting;

            //Datos segunda pantalla
            eyes.value = selectedUser.eyeColor;
            company.value = selectedUser.company;
            phone.value = selectedUser.phone;
            fruit.value = selectedUser.favoriteFruit;
            about.value = selectedUser.about;

        });
    });

    users = data;

};

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

function moveLeft() {
    $('#slider ul').animate({
        left: +slideWidth
    }, 200, function () {
        $('#slider ul li:last-child').prependTo('#slider ul');
        $('#slider ul').css('left', '');
    });
};

function moveRight() {
    $('#slider ul').animate({
        left: -slideWidth
    }, 200, function () {
        $('#slider ul li:first-child').appendTo('#slider ul');
        $('#slider ul').css('left', '');
    });
};

$('a.control_prev').click(function () {
    moveLeft();
});

$('a.control_next').click(function () {
    moveRight();
});





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