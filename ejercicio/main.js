$(document).ready(function ($) {

    //variables obtenidas a partir de elementos
    let posicion = 0;

    //Variables que se utilizan para mostrar el carousel
    let buttonGen = document.getElementById('submitGen'),
        buttonDet = document.getElementById('submitDet'),
        detailedLeft = document.getElementById('detailedLeft'),
        detailedRight = document.getElementById('detailedRight'),
        carousel = document.getElementById('carousel-inner');

    /**
     * Declaramos los inputs dinamicos
     * que se encuentran dentro del formulario detras del modal 
     * que tiene el id contact-us y estos inputs los utilizamos
     * dentro de las siguientes funciones que tienen las etiquetas:
     * @deleteInputValues
     * @insertJsonInputValues
     */
    let inputs = $('#contact-us :input');
    
    
    //eventos click
    $(buttonDet).on('click', function () {
        detailedLeft.style = 'display: block;';
        detailedRight.style = 'display: block;';
        buttonDet.disabled = true;
    });

    //@deleteInputValues
    $(buttonGen).on('click', function () {
        modalExecute();
        inputs.each(function () {
            if (this.type !== 'button') {
                this.value = '';
            }
        });

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

    //@insertJsonInputValues
    let completeForm = (obj) => {
        inputs.each(function () {
            if (this.type !== 'button') {
                let atr = this.getAttribute('jsonValue');
                if (this.getAttribute('jsonValue2')) {
                    let atr2 = this.getAttribute('jsonValue2');
                    if (this.getAttribute('jsonValue3')) {
                        let atr3 = this.getAttribute('jsonValue3');
                        this.value = `${ obj[atr][atr2]} ${obj[atr][atr3]}`;
                    } else {
                        this.value = obj[atr][atr2];
                    }
                } else {
                    this.value = obj[atr];
                }
            }
        });
    }
    modalExecute();
})