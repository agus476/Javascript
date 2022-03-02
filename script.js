
class egg {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;

    }
}


const egg1 = new egg ("Grande", 4500 , 50 )
const egg2 = new egg ("Mediano", 4100 , 25)
const egg3 = new egg ("Chico" , 3700 , 30 )
     




function menu(){
    let opcion = prompt("Menu: \n1 - Ver productos y precios \n2 - Visualizar peso por maple \n3 - Canjear codigo de descuento \nESC- Salir")

    switch(opcion){
        case "1":
            prices();
            buyProducts();
            break;
        case "2":
            weight();
            menu();
            break;

        case "3": 
        promotion()
        menu()
        ;    
        case "ESC":
            alert ("Gracias por vistarnos")
            break;
        default:
            alert("Opcion Incorrecta")
            menu()
            break;
    }
}


function prices(){
    alert ("Tamaños y precios: \n Huevo grande : $4500 \n Huevo mediano : $4100 \n Huevo chico : $3700" )
}


function insufficientstock(stock){
    alert ( "No tenemos stock suficiente de ese huevo, en este momento solo contamos con" + stock + "cajones")
}

function sufficientStock() {
    stock -= QuantityBuy;
    
}


let QuantityBuy;

let Totalbuy = 0;

function weight() {

    alert ( " Pesos de los maples \n Huevo grande: Mayor a 2.5kg  \n Huevo mediano: Entre 1.8kg a 2.4kg  \n Huevo chico: Entre 1.5kg a 1.8kg ")
}
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
    const promoCode = [455525 , 25553 , 52523];
    let CodePromotion = prompt ("Ingrese el codigo de descuento");
    for ( let i = 0; i < promoCode.length ; i ++ ){


        if (CodePromotion == promoCode [0]) {
 
            alert ("Genial, tenes un codigo de 15% de descuento en tu compra")
         
            break;
           }



           else if (CodePromotion == promoCode [1]) {


            alert ("Genial,  tenes un codigo de 20% de descuento en tu compra")
        
            break;
        
          }


          else if (CodePromotion == promoCode [2]) {


            alert ("Buenisimo, vas a tener un 50% de descuento en tu proxima compra")
        
            break;
        
          }

          else { 

            alert ("Codigo invalido")
        
            break
          }


    }



}

function Totalbuy (){

    alert("El precio de su compra es de: $" + Totalbuy);

}

const askForSize = () => {
    let number = parseInt(prompt("Escriba un tamaño entre 1 y 3"));
    while (isNaN(number) || number <= 0 || number >= 4) {
        number = parseInt(prompt("Por favor, escriba el tamaño entre 1 y 3 (incluídos)"));
    }
    return number;
}

function askForName () {
nameegg= prompt("Ingrese el tamaño de huevo que desea comprar:")

return nameegg
    
}






function buyProducts(){

    const sizeNumber = askForSize();

    for (let i = 0; i < sizeNumber; i++) {

        const buyName = askForName ();
        

        if (buyName == egg1.name) {
            buy( egg1.stock , egg1.price , egg1.name)
        }
        else if (buyName == egg2.name) {
            buy( egg2.stock, egg2.price, egg2.name)
        }

        else if (buyName == egg3.namename) {
            buy( egg3.stock, egg3.price, egg3.name)}

            
        else {
            alert('No tenemos ese producto')
        }
    }

    Totalbuy()
}



    

    


menu()








