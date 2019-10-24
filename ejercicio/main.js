$(document).ready(function ($) {
    
    //variables obtenidas a partir de elementos
    let posicion = 0,
        objeto,
        longitud;


    let buttonGen = document.getElementById('submitGen'),
        buttonDet = document.getElementById('submitDet'),
        detailedLeft = document.getElementById('detailedLeft'),
        detailedRight = document.getElementById('detailedRight'),
        carousel = document.getElementById('carousel-inner')

    let inputName = document.getElementById('name'),
        inputMail = document.getElementById('mail'),
        inputAddress = document.getElementById('address'),
        inputAbout = document.getElementById('about'),
        inputRegistered = document.getElementById('registered'),
        inputId = document.getElementById('id'),
        inputTags = document.getElementById('tags');

    //eventos click
    $(buttonDet).on('click', function () {
        detailedLeft.style = "display: block;";
        detailedRight.style = "display: block;";
        buttonDet.disabled = true;
    });

    $(buttonGen).on('click', function () {
        modalExecute();
        inputName.value = '';
        inputMail.value = '';
        inputAddress.value = '';
        inputAbout.value = '';
        inputRegistered.value = '';
        inputId.value = '';
        inputTags.value = '';
        buttonDet.disabled = false;
        detailedLeft.style = 'display: none;';
        detailedRight.style = 'display: none;';
    });

    //funciones
    let funcFetch = () => {
        fetch('https://next.json-generator.com/api/json/get/4Jfe8YWYP').then(function (response) {
            return response.json();
        }).then(function (Json) {
            console.log(Json);
            completeCarousel(Json);
        });
    }

    let completeCarousel = (obj) => {
        for (let i = 0; i < obj.length; i++) {
            let div1 = document.createElement('div'),
                img = document.createElement('img'),
                div2 = document.createElement('div'),
                a = document.createElement('a');
            if (i === 0) {
                div1.className = 'item active';
            } else {
                div1.className = 'item';
            }
            img.src = obj[i].image;
            div2.className = 'carousel-caption';
            a.innerText = obj[i].name.first;
            $(a).on('click', function () {
                completeForm(obj[i]);
            });
            a.href = '#';

            carousel.appendChild(div1);
            div1.appendChild(img);
            div1.appendChild(div2);
            div2.appendChild(a);
        }
    }

    let modalExecute = () => {
        if (posicion === 0) {
            $('#buttonModal').trigger('click');
            funcFetch();
            posicion -= -1;
        } else {
            $('#buttonModal').trigger('click');
        }
    }

    let completeForm = (obj) => {
        inputName.value = `${obj.name.first} ${obj.name.last}`;
        inputMail.value = obj.email;
        inputAddress.value = obj.address;
        inputAbout.value = obj.about;
        inputRegistered.value = obj.registered;
        inputId.value = obj._id;
        inputTags.value = obj.tags;
    }
    modalExecute();
})


