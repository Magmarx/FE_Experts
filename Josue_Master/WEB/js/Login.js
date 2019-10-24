const Login = () => {
    let Usuario = document.getElementById("Ususario").value;
    let Pass = document.getElementById("Pass").value;

    if (Usuario === "admin" && Pass === "admin") {
        location.href = "menu.html";
    } else if (Usuario === "") {
        alert("Debe ingresar un Usuario.");
    } else if (Pass === "") {
        alert("Debe ingresar una contraseña.");
    } else if (Usuario !== "admin" || Pass !== "admin") {
        alert("Usuario o contraseña no validos!")
    }
}