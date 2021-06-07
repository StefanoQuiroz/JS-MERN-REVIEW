class Card{
    constructor(name, cost){
        this.name=name;
        this.cost=cost
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power=power;
        this.res=res;
        this.effects = []; //efectos vienen de las unidades
    }
    attack(target){
        if(target instanceof Unit){
            //para reducir el poder el atacante
            //reduce target res by power, la propiedad res de target
            target.res -= this.power;
            if(target.res <= 0){
                console.log(`Enemy´s name ${target.name} was defeated by: ${this.name}`)
            }
        }else{
            throw new Error("Target must be a unit");
        }
    }
}

class Effect extends Card{
    //effects have a card text and target a units stat by increasing or reducng it by magnitude they have to be play ed with a Unit to target
    constructor(name, cost, text, stat, magnitud){
        super(name, cost);
        this.text=text;
        this.stat=stat;
        this.magnitud=magnitud;
    }

    played(target){
        if(target instanceof Unit){
            target.effects.push(this.name);
            target[this.stat] += this.magnitud;
        } else {
            throw new Error("Target must be Unit");
        }
    }
}

const ninjaRedBelt = new Unit('Ninja Cinturon Rojo',3,3,4);
const ninjaBlackBelt = new Unit('Ninja Cinturon Negro',4,5,4);

const algoritmoDuro = new Effect('Algoritmo Dificil',2,'aumentar la resistencia del objetivo en 3', 'res', 3);
const rechazoDePromesaNoManejado = new Effect('Rechazo de promesa no manejado', 1, 'reducir la resistencia del objetivo en 2', 'res', -2);
const programacionEnPareja = new Effect('Programacion en Pareja', 3, 'aumentar el poder del objetivo en 2', 'power', 2);
//attack()
// redBelt.attack(blackBelt);
//played effects
//programacionEnPareja.played(redBelt);
//Game
//1. redBelt
algoritmoDuro.played(ninjaRedBelt);
//2. blackBelt
rechazoDePromesaNoManejado.played(ninjaRedBelt);
programacionEnPareja.played(ninjaRedBelt);
ninjaRedBelt.attack(ninjaBlackBelt);
console.table({ninjaRedBelt, ninjaBlackBelt});
//Finished own version