const Cod = document.querySelector('#criptografar')
const Des = document.querySelector('#descriptografar')
const Copiar = document.querySelector('#copiar');
var resultado



function criptografar(){
    let input = document.querySelector('#texto')
    let res = document.querySelector('#mudar')

    resultado = input.value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")

    input.value = ''
    res.style.justifyContent = 'flex-start'
    res.style.textAlign = 'left'
    res.style.alignItems = 'flex-start';
    res.innerHTML = '<div id = "resposta"><p>'+resultado+'</p></div>'
    Copiar.style.display = 'inline'
}
function descriptografar(){
    let input = document.querySelector('#texto')
    let res = document.querySelector('#mudar')

    resultado = input.value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")

    input.value = ''
    res.style.justifyContent = 'flex-start'
    res.style.textAlign = 'left'
    res.style.alignItems = 'flex-start';
    res.innerHTML = '<div id = "resposta"><p>'+resultado+'</p></div>'
    Copiar.style.display = 'inline'
}
function copiar(){

    navigator.clipboard.writeText(resultado).then(function() {
        alert('Texto copiado com sucesso!');
    }).catch(function(err) {
        console.error('Erro ao copiar o texto: ', err);
    });
}

Cod.addEventListener('click', criptografar)
Des.addEventListener('click', descriptografar)
Copiar.addEventListener('click', copiar)

