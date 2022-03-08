let titulo = document.getElementById("titulo")

console.log (titulo.innerText)

let subtitulo= document.createElement("h2")
subtitulo.innerText = "Los putos"

document.body.append (subtitulo);

subtitulo.remove();

//console.log (document.body.innerHTML)

//document.body.innerHTML= '<h1> Boa noite </h1><p>Re trolitos</p>'

let paisnuevo = document.createElement("li")
paisnuevo.innerText = "CO"

let listapaises = document.getElementById ("listapaises")
 
listapaises.prepend (paisnuevo);