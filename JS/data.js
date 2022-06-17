class egg {
    constructor(id, name, price, stock , color) {
        this.id = id
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.color = color
        
    }
}


const eggR1 = new egg ( 101,"Grande", 4500 , 50 , "Colorado" )
const eggR2 = new egg ( 102,"Mediano", 4100 , 25, "Colorado" )
const eggR3 = new egg ( 103,"Chico" , 3700 , 30 , "Colorado" )
const eggR4 = new egg ( 104, "Bolita" , 3200 , 35, "Colorado" )

const eggW1 = new egg (  105,"Grande", 4450 , 50 , "Blanco" )
const eggW2 = new egg ( 106,"Mediano", 4050 , 25 , "Blanco")
const eggW3 = new egg ( 107,"Chico" , 3650 , 30 , "Blanco")
const eggW4 = new egg ( 108, "Bolita" , 3150 , 35 , "Blanco")
     

const eggs = [ eggR1 , eggR2 ,eggR3 , eggR4 ,  eggW1 , eggW2 ,eggW3 , eggW4 ]

