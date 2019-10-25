'use strict'
//Se selecciona el id del div 
let div_slider = document.querySelector('#slider');

getUsuarios()
.then(data=> data.json ())
.then (users =>{
    listadoUsuarios(users.data);
        return getUsuarios();
})


function getUsuarios(){
    return fetch ('https://reqres.in/api/users?page=2');
}

function listadoUsuarios(usuarios){
    usuarios.map((users, i)=>{
        let nombre = document.getElementById('mainSlider'),
            liSlider = document.createElement("LI");
            avatar.src = users.avatar;


            liSlider.innerHTML= `${users.firs_name} ${users.last_name}.`;

    });

}

