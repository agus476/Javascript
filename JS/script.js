

//Variables globales
let contendorEgg = document.querySelector('.eggClass')
let overlay = document.getElementById ('overlay')
let popup = document.getElementById ('popup')





//Funciones

const showProducts = () => {
contendorEgg.innerHTML =''
eggs.forEach(egg => {


if (egg.color == "Colorado") {

contendorEgg.innerHTML += `
                <div class="RedChild" id = "${egg.id}"> 
                        <div>${egg.name}</div>
                          <div class="size">
                               <i class="eggColor"></i>
                               <i></i>
                               <i></i>
                               <i></i>
                               </div>
               <button class= "btn-addCart btn-1" id="buy" >AGREGAR</button>

                                 </div>
</div>`

}


else if (egg.color == "Blanco"){

   
    contendorEgg.innerHTML += `                     
                        <div class="whiteChild" id = "${egg.id}">

                                  <div>${egg.name}</div>
                                  <div class="size">
                                      <i></i>
                                      <i></i>
                                      <i></i>
                                      <i></i>
                                      </div>
                      <button class= "btn-addCart btn-1" id="buy" >AGREGAR</button>
       
                                        </div>
                                        </div>
    `




}




} ) 
}


const giveLocalStorage = (key) =>{

    let cart = [];
    if(localStorage.getItem(key)){

        cart = JSON.parse(localStorage.getItem(key))
    }
    return cart;


}


const saveInLocalStorage = (key,value)=>{

localStorage.setItem(key, JSON.stringify(value))


}


const giveProduct =(id) => {

    return eggs.find(egg => egg.id == id)
}

const putProductInChart = (id) => {
const product = giveProduct(id);
cartText.innerText = "MI CARRITO DE COMPRAS"    
let addProduct = document.createElement("div")

addProduct.innerHTML=`<div>
          
            </div>
            <div class="debug" >
                ${product.name}
            </div>
            `;
addProduct.classList.add("cart-seccion")

popup.appendChild(addProduct)




}






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



















