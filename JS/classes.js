

 class egg {
    constructor(id, name, price, stock , color) {
        this.id = id
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.color = color
        
    }
}


const eggR1 = new egg ( 5,"Grande", 4500 , 50 , "Colorado" )
const eggR2 = new egg ( 6,"Mediano", 4100 , 25, "Colorado" )
const eggR3 = new egg ( 7,"Chico" , 3700 , 30 , "Colorado" )
const eggR4 = new egg ( 8, "Bolita" , 3200 , 35, "Colorado" )

const eggW1 = new egg (  9,"Grande", 4450 , 50 , "Blanco" )
const eggW2 = new egg ( 10,"Mediano", 4050 , 25 , "Blanco")
const eggW3 = new egg ( 11,"Chico" , 3650 , 30 , "Blanco")
const eggW4 = new egg ( 12, "Bolita" , 3150 , 35 , "Blanco")
     

const eggs = [ eggR1 , eggR2 ,eggR3 , eggR4 ,  eggW1 , eggW2 ,eggW3 , eggW4 ]
const cartBuy = []

console.log( "Este es el nombre de " + eggs[5].color)
