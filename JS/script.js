

//Variables globales
let contendorEgg = document.querySelector('.eggClass')
let overlay = document.getElementById ('overlay')
let popup = document.getElementById ('popup')





//Funciones




//Eventos y logica




contendorEgg.addEventListener ('click', e => {

if (e.target.classList.contains('btn-addCart')) {

    const id = e.target.parentNode.id;
    putProductInChart(id)
    const cart = giveLocalStorage("Carrito")
    const egg = giveProduct (id)
    cart.push(egg)
    saveInLocalStorage("Carrito", cart)


}




})






showProducts()



















