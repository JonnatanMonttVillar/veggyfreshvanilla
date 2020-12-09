var x = document.getElementById("email");
var p = document.getElementById("password");

document.getElementById("form").addEventListener("submit", (ee) => {
    ee.preventDefault();
    console.log(x.value);
    console.log(p.value);
    if (x.value == "admin@gmail.com" && p.value == "qwerty") {
        Swal.fire({
            title: 'Bienvenido',
            html: 'Acceso Logrado',
            type: 'success'
        })
        setTimeout(() => {
            loadPage();
        }, 3000);
    } else {
        Swal.fire({
            title: 'ERROR',
            html: 'Acceso Denegado',
            type: 'error'
        })
    }

    function loadPage(){
        window.location.href="./orders.html";

    }
});