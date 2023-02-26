
document.getElementById('datosPersonales').addEventListener('click',function() {
    mostrarDiv('listaDatos');
});

document.getElementById('experiencia').addEventListener('click',function() {
    mostrarDiv('listaExperiencia');
});   

document.getElementById('habilidades').addEventListener('click',function() {
    mostrarDiv('listaHabilidades');
});   

// Esta es la función que permitirá mostrar el contenido cuando se haga click en la sección correspondiente

function mostrarDiv(elem) {

    let estado = document.getElementById(elem).style.display;
        if(estado == 'block') {
            document.getElementById(elem).style.display = 'none';
        }
        else {
            document.getElementById(elem).style.display = 'block';
        }
   
}



