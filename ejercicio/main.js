$(document).ready(function ($) {
    // document.getElementById('miModal').className = 'modal fade in';
    // document.getElementById('miModal').style = 'display: block';

    let buttonGen = document.getElementById('submitGen'),
        buttonNext = document.getElementById('submitNext'),
        buttonPrev = document.getElementById('submitPrev'),
        detailedLeft = document.getElementById('detailedLeft'),
        detailedRight = document.getElementById('detailedRight'),
        posicion = 0,
        longitud;



    let funcFetch = (position) => {
        fetch('https://next.json-generator.com/api/json/get/4Jfe8YWYP').then(function (response) {
            return response.json();
        }).then(function (Json) {
            console.log(Json[position]);
            longitud = Json.length;
            let objeto = Json[position];
            completeForm(objeto);
        });
    }

    $(buttonGen).on('click', function () {
        if (buttonGen.disabled === false) {
            buttonGen.value = 'Detailed';
            buttonGen.disabled = true;
            buttonNext.disabled = false;
            buttonPrev.disabled = false;
            createDetailed();
            funcFetch(posicion);
        }
    });
    $(buttonNext).on('click', function () {
        if(posicion === longitud - 1){
            posicion = 0;
            funcFetch(posicion);
        }else{
            posicion -= -1;
            funcFetch(posicion);
        }
    });
    $(buttonPrev).on('click', function () {
        if(posicion === 0){
            posicion = longitud - 1;
            funcFetch(posicion);
        }else{
            posicion += -1;
            funcFetch(posicion);
        }
    });

    let createDetailed = () => {
        let br1 = document.createElement('br'),
            br2 = document.createElement('br'),
            input = document.createElement('input'),
            input2 = document.createElement('input'),
            textarea = document.createElement('textarea');

        input.className = 'form';
        input.placeholder = 'registered';
        input.name = 'registered';
        input.id = 'registered';
        input.type = 'text';

        input2.className = 'form';
        input2.placeholder = 'id';
        input2.name = 'id';
        input2.id = 'id';
        input2.type = 'text';

        textarea.className = 'form textarea';
        textarea.placeholder = 'tags';
        textarea.name = 'tags';
        textarea.id = 'tags';
        textarea.style = 'max-height: 125px;'

        detailedLeft.appendChild(br1);
        detailedLeft.appendChild(input);
        detailedLeft.appendChild(input2);
        detailedRight.appendChild(br2);
        detailedRight.appendChild(textarea);
    };

    let completeForm = (obj) =>{
        document.getElementById("name").value = `${obj.name.first} ${obj.name.last}`;
        document.getElementById("mail").value = obj.email;
        document.getElementById("address").value = obj.address;
        document.getElementById("about").value = obj.about;
        document.getElementById("registered").value = obj.registered;
        document.getElementById("id").value = obj._id;
        document.getElementById("tags").value = obj.tags;
    }
})



// let users = []

// $(document).ready(function ($) {

//     let button = document.getElementById('getStarted');

//     $(button).on('click', function (e) {


//         e.preventDefault();

//         let name = document.getElementById('name'),
//             lastname = document.getElementById('lastname'),
//             age = document.getElementById('age'),
//             email = document.getElementById('email'),
//             address = document.getElementById('address'),
//             balance = document.getElementById('balance'),
//             inDate = document.getElementById('inDate'),
//             eyes = document.getElementById('eyes'),
//             company = document.getElementById('company'),
//             phone = document.getElementById('phone'),
//             fruit = document.getElementById('fruit'),
//             about = document.getElementById('about'),
//             greeting = document.getElementById('greeting'),
//             jsonData = {
//                 name: name.value,
//                 lastname: lastname.value,
//                 age: age.value,
//                 email: email.value,
//                 address: address.value,
//                 balance: balance.value,
//                 inDate: inDate.value,
//                 eyes: eyes.value,
//                 company: company.value,
//                 phone: phone.value,
//                 fruit: fruit.value,
//                 about: about.value,
//                 greeting: greeting.innerText
//             };

//         alert(JSON.stringify(jsonData));

//     });

//     $.get('https://next.json-generator.com/api/json/get/4Jfe8YWYP', function (data) {
//         data.forEach(slider => {
//             let mainSlider = document.getElementById('mainSlider'),
//                 liSlider = document.createElement('LI');

//             liSlider.innerText = `${slider.name.first} ${slider.name.last}`
//             liSlider.style = `background-image: url(${slider.image}); font-size: 30px;
//           color: whitesmoke;`

//             mainSlider.appendChild(liSlider);

//             $(liSlider).on('click', function (e) {

//                 e.preventDefault();

//                 let name = document.getElementById('name'),
//                     lastname = document.getElementById('lastname'),
//                     age = document.getElementById('age'),
//                     email = document.getElementById('email'),
//                     address = document.getElementById('address'),
//                     balance = document.getElementById('balance'),
//                     inDate = document.getElementById('inDate'),
//                     eyes = document.getElementById('eyes'),
//                     company = document.getElementById('company'),
//                     phone = document.getElementById('phone'),
//                     fruit = document.getElementById('fruit'),
//                     about = document.getElementById('about'),
//                     greeting = document.getElementById('greeting'),
//                     nameLabel = $('#name').prev('label'),
//                     lastnameLabel = $('#lastname').prev('label'),
//                     ageLabel = $('#age').prev('label'),
//                     emailLabel = $('#email').prev('label'),
//                     addressLabel = $('#address').prev('label'),
//                     balanceLabel = $('#balance').prev('label'),
//                     inDateLabel = $('#inDate').prev('label'),
//                     eyesLabel = $('#eyes').prev('label'),
//                     companyLabel = $('#company').prev('label'),
//                     phoneLabel = $('#phone').prev('label'),
//                     fruitLabel = $('#fruit').prev('label'),
//                     aboutLabel = $('#about').prev('label'),
//                     selectedUser = users.filter(user => (`${user.name.first} ${user.name.last}`) === this.innerText)[0];

//                 //Mover las etiquetas hacia abajo de la primera pantalla
//                 nameLabel.addClass('active highlight');
//                 lastnameLabel.addClass('active highlight');
//                 ageLabel.addClass('active highlight');
//                 emailLabel.addClass('active highlight');
//                 addressLabel.addClass('active highlight');
//                 balanceLabel.addClass('active highlight');
//                 inDateLabel.addClass('active highlight');

//                 //Mover las etiquetas hacia abajo de la segunda pantalla

//                 eyesLabel.addClass('active highlight');
//                 companyLabel.addClass('active highlight');
//                 phoneLabel.addClass('active highlight');
//                 fruitLabel.addClass('active highlight');
//                 aboutLabel.addClass('active highlight');


//                 //Datos primera pantalla
//                 name.value = selectedUser.name.first;
//                 lastname.value = selectedUser.name.last;
//                 age.value = selectedUser.age;
//                 email.value = selectedUser.email;
//                 address.value = selectedUser.address;
//                 balance.value = selectedUser.balance;
//                 inDate.value = selectedUser.registered;
//                 greeting.innerText = selectedUser.greeting;

//                 //Datos segunda pantalla
//                 eyes.value = selectedUser.eyeColor;
//                 company.value = selectedUser.company;
//                 phone.value = selectedUser.phone;
//                 fruit.value = selectedUser.favoriteFruit;
//                 about.value = selectedUser.about;

//             });
//         });

//         users = data;

//     });

//     var slideCount = $('#slider ul li').length;
//     var slideWidth = $('#slider ul li').width();
//     var slideHeight = $('#slider ul li').height();
//     var sliderUlWidth = slideCount * slideWidth;

//     $('#slider').css({
//         width: slideWidth,
//         height: slideHeight
//     });

//     $('#slider ul').css({
//         width: sliderUlWidth,
//         marginLeft: -slideWidth
//     });

//     $('#slider ul li:last-child').prependTo('#slider ul');

//     function moveLeft() {
//         $('#slider ul').animate({
//             left: +slideWidth
//         }, 200, function () {
//             $('#slider ul li:last-child').prependTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };

//     function moveRight() {
//         $('#slider ul').animate({
//             left: -slideWidth
//         }, 200, function () {
//             $('#slider ul li:first-child').appendTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };

//     $('a.control_prev').click(function () {
//         moveLeft();
//     });

//     $('a.control_next').click(function () {
//         moveRight();
//     });

//     $('.form').find('input, textarea').on('keyup blur focus', function (e) {

//         var $this = $(this),
//             label = $this.prev('label');

//         if (e.type === 'keyup') {
//             if ($this.val() === '') {
//                 label.removeClass('active highlight');
//             } else {
//                 label.addClass('active highlight');
//             }
//         } else if (e.type === 'blur') {
//             if ($this.val() === '') {
//                 label.removeClass('active highlight');
//             } else {
//                 label.removeClass('highlight');
//             }
//         } else if (e.type === 'focus') {

//             if ($this.val() === '') {
//                 label.removeClass('highlight');
//             } else if ($this.val() !== '') {
//                 label.addClass('highlight');
//             }
//         }

//     });

//     $('.tab a').on('click', function (e) {

//         e.preventDefault();

//         $(this).parent().addClass('active');
//         $(this).parent().siblings().removeClass('active');

//         target = $(this).attr('href');

//         $('.tab-content > div').not(target).hide();

//         $(target).fadeIn(600);

//     });

// });