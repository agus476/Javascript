

//Variables globales
let contendorEgg = document.querySelector('.eggClass')
let overlay = document.getElementById ('overlay')
let popup = document.getElementById ('popup')





//Funciones




//Eventos y logica




contendorEgg.addEventListener ('click', e => {

if (e.target.classList.contains('btn-addCart')) {

    const id = e.target.parentNode.id;
    Interfaces.putProductInChart(id)
    const cart = new Cart(Helper.giveLocalStorage('Carrito'))
    const egg = Helper.giveProduct(id)
    cart.addEgg(egg)
    Helper.saveInLocalStorage("Carrito", cart)
    Helper.saveInLocalStorage("Carrito", cart.getEgg)


}




})


Interfaces.showProducts();



















