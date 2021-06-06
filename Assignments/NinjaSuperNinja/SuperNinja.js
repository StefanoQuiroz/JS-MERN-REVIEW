const Ninja = require("./Ninja");

class Sensei extends Ninja {
    constructor(nombre){
        super(nombre);
        this.nombre=nombre;
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza=10;
        this.sabiduria = 10;
    }
    speakWisdom(){
        super.drinkSake();
        return `Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses`;        
    }
    showStatsSensei(){
        const {sabiduria} = this;
        const stats = super.showStats();
        //extra
        return {...stats, sabiduria};
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
console.table(superSensei.showStats());
console.table(superSensei.showStatsSensei());