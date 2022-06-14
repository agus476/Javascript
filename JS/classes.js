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


class Chart {
     constructor(eggs =  []) {
         this.eggs = eggs;
        }

    getEgg () {
     return this.eggs;
    }

    addEgg(egg){
         
         const inChart = this.eggs.find(egg => egg.id ===egg.id)
         console.log(inChart)
        
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
        eggs.forEach(egg => {
        
        
        if (egg.color == "Colorado") {
       let contendorEgg = document.querySelector('.eggClass')
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