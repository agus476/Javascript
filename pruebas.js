

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







 /*function cart (ShoppingCart){

  return ShoppingCart + 2 ;
  
  
  }
  
  
let resultado = cart (3)
alert ("Este numero es " + resultado) */
