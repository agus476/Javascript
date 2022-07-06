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


    static paintEggs(){

       
        let eggPaintG = document.getElementById('9')
        let eggPaintGH = document.getElementById('13')
        eggPaintG.classList.add("eggColor")
        eggPaintGH.classList.add("eggColor")
        let eggPaintM = document.getElementById('18')
        let eggPaintMH = document.getElementById('22')
        eggPaintM.classList.add("eggColor")
        eggPaintMH.classList.add("eggColor")
        let eggPaintC = document.getElementById('27')
        let eggPaintCH = document.getElementById('31')
        eggPaintC.classList.add("eggColor")
        eggPaintCH.classList.add("eggColor")
        let eggPaintB = document.getElementById('36')
        let eggPaintBH = document.getElementById('40')
        eggPaintB.classList.add("eggColor")
        eggPaintBH.classList.add("eggColor")
        
    
    }





    }





   


class Cart {
     constructor(eggs =  []) {
         this.eggs = eggs;
        }

    getEgg () {
     return this.eggs;
    }


    serachEgg(id){
     
     return this.eggs.find(item => item.egg.id == id)


    }

    addEgg(egg){
         const prod = this.serachEgg(egg.id)

         if (prod){
             prod.quantity++;    
       
         }
         else{
            this.eggs.push({quantity:1, egg : egg });
         
             
         }
           
         
          
         }

         

      
     deleteEgg (id){
      this.eggs = this.eggs.filter(item => item.egg.id != id ) ; 
     }


     increaseEgg(id){
      
        const prod = this.serachEgg(id);
        prod.quantity++;
    }

    decreasedEgg(id){
    const prod = this.serachEgg(id);
    if(prod.quantity > 1){
     
     prod.quantity--;
}
    else{

        this.deleteEgg(id)
    }

    }


}


class Counter{
       constructor(value){
        this.value = value}

    getValue(){ 
    return this.value}

    refreshValue(value){

        this.value += value
    }


}

class Interfaces{
 
 
    static async showProducts(){

        let contendorEgg = document.querySelector('.eggClass')
        contendorEgg.innerHTML =''
        const EggsDB = await Helper.giveProducts()
        
        let counter = 0
        let badge = "$"
        EggsDB.forEach(egg => {
        counter+= 1
        let contendorEgg = document.querySelector('.eggClass')
        contendorEgg.innerHTML += `
                        <div class="EggChild" id = "${egg.id}"> 
                              <div class="product">${egg.name} ${egg.color}</div>
                              <img src="${egg.imagen}" alt="" class="img">
                                
                                  <div class="size">
                                       <i id ="${counter+8}"></i>
                                       <i id ="${counter+16}"></i>
                                       <i id ="${counter+24}"></i>
                                       <i id ="${counter+32}"></i>
                                       </div>

                                       <div class="description" >${egg.description}</div>
                                       <div class="price">${badge}${egg.price}</div>
                                       


                                       
                       <button class= "btn-addCart btn-1" id="buy" >AGREGAR</button>
        
                                         </div>
                             </div>`
        
          
           
            

          
                             
        
        } 
        
        
        ) 

        Helper.paintEggs()
        }


        static refreshTotal(container, value) {
            const div = document.createElement('div');
            div.classList.add('buyFoot');
            const total = document.createElement('span');
            total.textContent = 'Total:  $' + value;
            total.classList.add('name')
            const finalButtom = document.createElement('button')
            finalButtom.classList.add('btn-addCart')
            finalButtom.classList.add('btn-1')
            finalButtom.textContent = "FINALIZAR COMPRA"
            div.appendChild(total);
            div.appendChild(finalButtom)
            container.appendChild(div);
        }


      

     static  putProductInChart(){
        const cart = Helper.giveLocalStorage('Carrito');
        let sectionCart = document.getElementById('sectionCart')
        
         if (cart.length == 0){

            cartText.innerText = "EL CARRITO ESTA VACIO"
            sectionCart.innerHTML = ''
         }

         else{
            const total = new Counter(0);
           sectionCart.innerHTML = ''
           cartText.innerText = "MI CARRITO DE COMPRAS"
            cart.forEach((item) => {
            let addProduct = document.createElement("div")
            addProduct.innerHTML = ` 
                 <div class= "line">
            <img src="${item.egg.imagen}" alt="" class="imgInChart">
              <div class="name">${item.egg.name}</div>
              <div class="description">${item.egg.description}</div> 
              <div class="price">$${item.egg.price * item.quantity} </div>
              <div class="quant" id ="${item.egg.id}"> 
                <button class=" cart-min fa fa-trash fa-lg" aria-hidden="true"></i></button>
                <span> ${item.quantity} cajas</span>
                <button class=" cart-max fa fa-plus fa-lg" aria-hidden="true"></i></button>
                </div>
                </div>
                      

                    
                 
                  `;
                  total.refreshValue(item.egg.price*item.quantity)
                  addProduct.classList.add('egg-Add');
                  sectionCart.appendChild(addProduct);
            })
            
            
                
                Interfaces.refreshTotal(sectionCart, total.getValue())
 
         }
            
            
            
            
            
            
            }
            
        


}

