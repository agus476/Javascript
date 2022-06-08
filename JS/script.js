

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
                               <i></i>
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

        carrito = JSON.parse(localStorage.getItem(key))
    }
    return carrito;


}


const saveInLocalStorage = (key,value)=>{

localStorage.setItem(key, JSON.stringify(value))


}


const giveProduct =(id) => {

    return eggs.find(egg => egg.id == id)
}

const putProductInChart = (id) => {
const product = giveProduct(id);
popup.innerHTML += ` <div>${product.name}</div>`



}


showProducts()




















