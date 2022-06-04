
const eggR1 = new eggRed ( 9,"Grande", 4500 , 50 , "Colorado" )
const eggR2 = new eggRed ( 8,"Mediano", 4100 , 25, "Colorado" )
const eggR3 = new eggRed ( 11,"Chico" , 3700 , 30 , "Colorado" )
const eggR4 = new eggRed ( 35, "Bolita" , 3200 , 35, "Colorado" )


const eggW1 = new eggWhite ( 5,"Grande", 4450 , 50 , "Blanco" )
const eggW2 = new eggWhite ( 18,"Mediano", 4050 , 25 , "Blanco")
const eggW3 = new eggWhite ( 22,"Chico" , 3650 , 30 , "Blanco")
const eggW4 = new eggWhite ( 45, "Bolita" , 3150 , 35 , "Blanco")
     

const eggsRed = [ eggR1 , eggR2 ,eggR3 , eggR4 ]
const eggsWhite = [ eggW1 , eggW2 ,eggW3 , eggW4 ]

console.log( "Este es el nombre de " + eggsRed[0].color)





function insufficientstock(stock){
    alert ( "No tenemos stock suficiente de ese huevo, en este momento solo contamos con" + stock + "cajones")
}

function sufficientStock () {
    egg.stock = QuantityBuy;
    
}


let QuantityBuy;



 


let Totalbuy = 0

function finalprice(price) {
    Totalbuy += QuantityBuy * price;
}



function buy (stock, price, name) {
    QuantityBuy = parseInt(prompt("Ingrese la cantidad de cajones que quiere comprar:"));
    if(QuantityBuy <= stock) {
    sufficientStock(stock, name);
    finalprice(price)
    }
    else {
        insufficientstock(stock)
    }
}



function promotion(){
    const promoCode = [455525 , 25553 , 52523 , 255223 , 55522 , 42220] ;
    let CodePromotion = prompt ("Ingrese el codigo de descuento");
    const descount = promoCode.some(el => el == CodePromotion);
    const code = promoCode.filter(el => el == CodePromotion);
    for ( let i = 0; i < promoCode.length ; i ++ ){


        if (descount == true) {
 
            alert ("Genial, tenes un codigo de 15% de descuento en tu compra")

            
             alert ("Su codigo de descuento es el " + code)
         
            break;
           }



           
          else { 

            alert ("Codigo invalido")
        
            break
          }


    }



}


function buyProducts(){

    const buyName = askForName ();
        

        if (buyName == eggsRed[i].name || eggWhite[i].name ) {
            buy( egg1.stock , egg1.price , egg1.name)
        }
        else if (buyName == egg2.name) {
            buy( egg2.stock, egg2.price, egg2.name)
        }

        else if (buyName == egg3.name) {
            buy( egg3.stock, egg3.price, egg3.name)}

            
        else {
            alert('No tenemos ese producto')
        }
    }

    





















