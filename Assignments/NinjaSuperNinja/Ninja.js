class Ninja{
    constructor(nombre){
        this.nombre= nombre;
        this.salud = 10;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    
    
    sayName(){
        const {nombre} = this
        return {nombre};
    }
    
    showStats(){
        const {nombre, velocidad, fuerza, salud} = this;
        return {nombre, velocidad, fuerza, salud};
    }

    drinkSake(){
        this.salud += 10;
    }
}
/* 
const ninja1 = new Ninja("Hyabusa");
console.table(ninja1.sayName());
ninja1.drinkSake();
ninja1.drinkSake();
console.table(ninja1.showStats());
 */

module.exports = Ninja;