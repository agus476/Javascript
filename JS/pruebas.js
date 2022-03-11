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


    



  



  








