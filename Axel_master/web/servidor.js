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
    Carusel();

    $('#buttonShow').on('click', function(){
        let nameJ = document.getElementById('name'),
            companyJ = document.getElementById('company'),
            emailJ = document.getElementById('email'),
            phoneJ = document.getElementById('phone'),
            textArea = document.getElementById('text'),
            contImg = document.getElementById('contImg'),
            img = document.createElement('IMG');

            fetch(url).then(response =>{
                return response.json();
            }).then(data =>{
               nameJ.value = data[0].name;
               companyJ.value = data[0].company;
               emailJ.value = data[0].email;
               phoneJ.value = data[0].phone;
               textArea.value = data[0].about;
               img.src = data[0].picture;
            }).catch(error =>{
                console.log('ERROR: ' + error);
            });
            contImg.appendChild(img);
        
    });
});
    


function Carusel(){
    let contCarusel = document.getElementById('caruselContainer'),
        contador = 0;
    
    fetch(urlM).then(response =>{
        return response.json();
    }).then(data =>{

       data.forEach(element => {
        let contImg = document.createElement('DIV'),
        imgCarusel = document.createElement('IMG');
        
        if(contador === 0){
            contImg.className = 'carousel-item active';
        }else{
            contImg.className = 'carousel-item';
        }
        imgCarusel.className = 'd-block w-100';
        imgCarusel.src = element.image;        

        contCarusel.appendChild(contImg);
        contImg.appendChild(imgCarusel);

        contador ++;
       });

    }).catch(error =>{
        console.log('ERROR: ' + error);
    });

}