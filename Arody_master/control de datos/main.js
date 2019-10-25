let users = []

$(document).ready(function ($) {


    //Boton de enviar en el formulario
    let button = document.querySelector("#btn1");

    $(button).on('click', (e) => {

        e.preventDefault();
        let name = document.getElementById("name"),
            lastname = document.getElementById("lastname"),
            age = document.getElementById("age"),
            email = document.getElementById("email"),
            address = document.getElementById("address"),
            balance = document.getElementById("balance"),
            indDate = document.getElementById("inDate"),
            eyes = document.getElementById("eyes"),
            company = document.getElementById("company"),
            phone = document.getElementById("phone"),
            fruit = document.getElementById("fruit"),
            about = document.getElementById("about"),
            greeting = document.getElementById("greeting"),
            jsonData = {
                name: name.value,
                lastname: lastname.value,
                age: age.value,
                email: email.value,
                address: address.value,
                balance: balance.value,
                indDate: indDate.value,
                eyes: eyes.value,
                company: company.value,
                phone: phone.value,
                fruit: fruit.value,
                about: about.value,
                greeting: greeting.innerText
            };
        alert(JSON.stringify(jsonData));
    });

    $.get('https://next.json-generator.com/api/json/get/4kbWK09tw', data => {
        data.forEach(element => {
            let mainSlider = document.getElementById("mainSlider"),
                liSlider = document.createElement("LI");

            liSlider.innerText = `${element.name.first} ${element.name.last}`
            liSlider.style = `background-image: url(${element.image}); font-size: 30px; background-size: cover;`

            mainSlider.appendChild(liSlider);



            $(liSlider).on('click', function (data) {
                data.preventDefault();
                let name = document.getElementById("name"),
                    lastname = document.getElementById("lastname"),
                    age = document.getElementById("age"),
                    email = document.getElementById("email"),
                    address = document.getElementById("address"),
                    balance = document.getElementById("balance"),
                    indDate = document.getElementById("inDate"),
                    eyes = document.getElementById("eyes"),
                    company = document.getElementById("company"),
                    phone = document.getElementById("phone"),
                    fruit = document.getElementById("fruit"),
                    about = document.getElementById("about"),
                    greeting = document.getElementById("greeting"),
                    selectedUser = users.filter(user => (`${user.name.first} ${user.name.last}`) === this.innerText)[0];


                name.value = selectedUser.name.first;
                greeting.value = selectedUser.greeting;
                lastname.value = selectedUser.name.last;
                age.value = selectedUser.age;
                email.value = selectedUser.email;
                address.value = selectedUser.address;
                balance.value = selectedUser.balance;
                inDate.value = selectedUser.registered;
                greeting.innerText = selectedUser.greeting;

                eyes.value = selectedUser.eyeColor;
                company.value = selectedUser.company;
                phone.value = selectedUser.phone;
                fruit.value = selectedUser.favoriteFruit;
                about.value = selectedUser.about;

            });

        });
        users = data;
    });
});