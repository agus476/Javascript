let eggname1 = 'Grande';
let eggprice1= 4500;
let eggstock1= 50;



let eggname2 = 'Mediano';
let eggprice2= 4100;
let eggstock2 = 25;



let eggname3 = 'Chico';
let eggprice3 = 3700;
let eggstock3 = 30;




function menu(){
    let opcion = prompt("Menu: \n1 - Ver productos y precios \n2 - Visualizar peso por maple  \nESC- Salir")

    switch(opcion){
        case "1":
            prices();
            buyProducts();
            break;
        case "2":
            weight();
            menu();
            break;
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
    alert ("Tamaños y precios: \n Huevo grande : $4500 \n Huevo mediano : 4100 \n Huevo chico : 3700" )
}


function insufficientstock(stock){
    alert ( "No tenemos stock suficiente de ese huevo, en este momento solo contamos con" + stock + "cajones")
}

function sufficientStock(stock) {
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

function buyProducts(){

    let sizeNumber = parseInt(prompt("Ingrese la cantidad de tamaños distintos que desea comprar"))

    for (let i = 0; i < sizeNumber; i++) {

        let buyName = prompt("Ingrese el tamaño de huevo que desea comprar:")

        if (buyName == eggname1) {
            buy( eggstock1, eggprice1, eggname1)
        }
        else if (buyName == eggname2) {
            buy( eggstock2, eggprice2, eggname2)
        }

        else if (buyName == eggname3) {
            buy( eggstock3, eggprice3, eggname3)}

            
        else {
            alert('No tenemos ese producto')
        }
    }

    alert("El precio de su compra es de: $" + Totalbuy);
}



menu()











