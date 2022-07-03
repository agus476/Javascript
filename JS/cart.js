//Variables globales






//Funciones




//Eventos y logica


//POPUP OPEN//

$("#btn-open").click(function(){

    overlay.classList.add('active')
    popup.classList.add('active')
    Interfaces.putProductInChart();
    

})


$('#btn-close').click(function(){

    overlay.classList.remove('active')
    popup.classList.remove('active')

})

//.....//


 popup.addEventListener('click', e => {
    if (e.target.classList.contains('cart-min')) {
        const id = e.target.parentNode.id;
        const cart= new Cart(Helper.giveLocalStorage('Carrito'));
        cart.decreasedEgg(id);
        Helper.saveInLocalStorage('Carrito', cart.getEgg());
        Interfaces.putProductInChart();

          
    } 
    else if (e.target.classList.contains('cart-max')) {
        const id = e.target.parentNode.id;
        const cart = new Cart(Helper.giveLocalStorage('Carrito'));
        cart.increaseEgg(id);
        Helper.saveInLocalStorage('Carrito', cart.getEgg());
        Interfaces.putProductInChart();

    }
    
    
  
    
});
