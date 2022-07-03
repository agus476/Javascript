

//Variables globales
let contendorEgg = document.querySelector('.eggClass')
let overlay = document.getElementById ('overlay')
let popup = document.getElementById ('popup')





//Funciones




//Eventos y logica




contendorEgg.addEventListener ('click', async (e) => {

if (e.target.classList.contains('btn-addCart')) {

    const id = e.target.parentNode.id;
    const cart = new Cart(Helper.giveLocalStorage('Carrito'))
    const egg = await Helper.giveProduct(id)
    cart.addEgg(egg)
    Helper.saveInLocalStorage("Carrito", cart.getEgg())
    alertify.success('Producto agregado al carro'); 
   

}




})


 ;

Interfaces.showProducts();



















