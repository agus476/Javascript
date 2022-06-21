class Helper {

    static giveLocalStorage(key) { 
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
    }

    static saveInLocalStorage = (key,value)=>{
           localStorage.setItem(key, JSON.stringify(value))
        }

    
     static async giveProduct(idProduct){
          const EggsDB = await Helper.giveProducts();
          const id = parseInt(idProduct)
          return EggsDB.find(egg => egg.id == id)
    }

    static async  giveProducts() {
        const response = await fetch('../data.json');
        const json = await response.json();
        return json;
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
 
 
    static async showProducts(){

        let contendorEgg = document.querySelector('.eggClass')
        contendorEgg.innerHTML =''
        const EggsDB = await Helper.giveProducts()
        let counter = 0
        EggsDB.forEach(egg => {
        
        
        if (egg.color == "Colorado") {
            counter+= 1

       let contendorEgg = document.querySelector('.eggClass')
        contendorEgg.innerHTML += `
                        <div class="RedChild" id = "${egg.id}"> 
                                
                                  <div class="size">
                                       <i id ="${counter+11}"></i>
                                       <i id ="${counter+13}"></i>
                                       <i id ="${counter+22}"></i>
                                       <i id ="${counter+17}"></i>
                                       </div>
                                       <div>${egg.name}</div>
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

     static async putProductInChart(id){
         const EggsDB = await Helper.giveProducts();
         const product = EggsDB.find(product => product.id == id);
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

