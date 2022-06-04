let buttonBuy = document.getElementById('buy')


buttonBuy.addEventListener ('click' , function(){


crearProducto()


}
)




let cartText = document.getElementById('cartText')
cartText.innerText = "SU CARRO ESTA VACIO"


 function crearProducto(){
  
cartText.innerText = "MI CARRITO DE COMPRAS"    
let addProduct = document.createElement("div")
addProduct.classList.add("cart-seccion")

popup.appendChild(addProduct)


}