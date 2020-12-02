const getRefranURL = 'http://localhost:3000/api/refran/';
const addRefranURL = 'http://localhost:3000/api/addRefran/';
const segundosPausa = 5;
const inicioHTML = document.querySelector('#inicio');
const finalHTML = document.querySelector('#final');
const nuevoInicioHTML = document.querySelector('#nuevoInicio');
const nuevoFinalHTML = document.querySelector('#nuevoFinal');
const enviarHTML = document.querySelector('#enviar');
var img = document.querySelector('#gatos');

function borrar(){
    nuevoInicioHTML.value = '';
    nuevoFinalHTML.value = '';
}
function getRefran () {
    fetch(getRefranURL)
        .then(
             resp=>resp.json()
        )
        .then(
             obj=>{
                inicioHTML.innerText = obj.inicio;
                //finalHTML.innerText = obj.final;
                finalHTML.innerText = 'El cielo se cae...¡¡por Tutatis!!';
            }
        )
    
    img.src = `https://robohash.org/${inicioHTML.innerText}.png?set=set4`;
    setTimeout(getRefran,segundosPausa*1000);
   
}
function enviar(){
   
    var data = {
        inicio: nuevoInicioHTML.value,
        final: nuevoFinalHTML.value,
    };
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
        },
    };
    fetch(addRefranURL,requestOptions)
        .then(res=>{
            window.alert('Gracias por participar;p');
            borrar();
        })
        .catch(res=>window.alert('¡¡La cagaste!!'))
    
}

enviarHTML.onclick = enviar;

getRefran();