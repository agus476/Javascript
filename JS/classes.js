class Helper {

    static giveLocalStorage(key) { 
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
    }

    static saveInLocalStorage = (key,value)=>{
           localStorage.setItem(key, JSON.stringify(value))
        }

    
     static giveProduct(id){
          return eggs.find(egg => egg.id == id)
    }


    }


class Cart {
     constructor(eggs =  []) {
         this.eggs = eggs;
        }

    getEgg () {
     return this.eggs;
    }

    addEgg(egg){
         
         this.eggs.push(egg);
}

      
     deleteEgg (id){
      this.eggs = this.eggs.filter(egg => egg.id != id )  


     }
    




}

class Interfaces{
 
 
    static showProducts(){

        let contendorEgg = document.querySelector('.eggClass')
        contendorEgg.innerHTML =''
        let counter = 0
        eggs.forEach(egg => {
        
        
        if (egg.color == "Colorado") {
            counter+= 1

       let contendorEgg = document.querySelector('.eggClass')
        contendorEgg.innerHTML += `
                        <div class="RedChild" id = "${egg.id}"> 
                                <div>${egg.name}</div>
                                  <div class="size">
                                       <i id ="${counter+11}"></i>
                                       <i id ="${counter+13}"></i>
                                       <i id ="${counter+22}"></i>
                                       <i id ="${counter+17}"></i>
                                       </div>
                       <button class= "btn-addCart btn-1" id="buy" >AGREGAR</button>
        
                                         </div>
                             </div>`
        
           if (egg.id == 101){let eggPaint = document.getElementById('12')
            eggPaint.classList.add("eggColor")}

           else if (egg.id == 102) { let eggPaint = document.getElementById('15')
            eggPaint.classList.add("eggColor")}

           else if (egg.id == 103) {let eggPaint = document.getElementById('25')
            eggPaint.classList.add("eggColor")
           }

           else if (egg.id == 104) { let eggPaint = document.getElementById('21')
           eggPaint.classList.add("eggColor")}
        
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

     static putProductInChart(id){
            const product = Helper.giveProduct(id);
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
            
        


}

Interfaces.showProducts()