function autoClick() {
    $("#download").click();
}

$(document).ready(function(){
    let element = $("#signature");

    $("#download").on('click', function() {
        html2canvas(element, {
            onrendered: function(canvas) {
                let imageData = canvas.toDataURL("image/jpg");
                let newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-strean");

                $("#download").attr("download", "image.jpg").attr("href", newData);
            }
        });
    });
})


let nombre = document.querySelector('.signature-right h5');
let cargo = document.querySelector('.signature-right_position');
let correo = document.querySelector('.signature-right_email p');

let nano = document.getElementById('name');

let objeto = {
    names: " ",
    lastnames: " ",
    position: " ",
    email: " "
}

function saveLocal() {
    localStorage.setItem("datos", JSON.stringify(objeto));
}


function setName (e) {
    objeto.names = e.target.value;
    saveLocal();

    let dato = JSON.parse(localStorage.getItem("datos"));

    nombre.innerHTML = objeto.names + ' ' +  dato.lastnames;
}

function setLastName (e) {
    objeto.lastnames = e.target.value;
    saveLocal();

    let dato = JSON.parse(localStorage.getItem("datos"));
    nombre.innerHTML = dato.names + ' ' + objeto.lastnames;
}

function setPosition (e) {
    objeto.position = e.target.value;
    saveLocal();

    cargo.innerHTML = objeto.position;
}

function setEmail (e) {
    objeto.email = e.target.value;
    saveLocal();

    correo.innerHTML = objeto.email;
}

function change () {
    let dato = JSON.parse(localStorage.getItem("datos"));

    nombre.innerHTML = dato.names + ' ' +  dato.lastnames;
    cargo.innerHTML = dato.position;
    correo.innerHTML = dato.email;
}
