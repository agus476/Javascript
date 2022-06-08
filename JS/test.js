let buttonBuy = document.getElementById('buy')


buttonBuy.addEventListener ('click' , function(){crearProducto()})




let cartText = document.getElementById('cartText')



 function crearProducto(){
  
cartText.innerText = "MI CARRITO DE COMPRAS"    
let addProduct = document.createElement("div")

addProduct.innerHTML=`<div>
          
            </div>
            <div class="debug" >
                ${eggR1.name}
            </div>
            `;
addProduct.classList.add("cart-seccion")

popup.appendChild(addProduct)


}