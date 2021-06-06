class Vehicle{
    constructor(manufacturer, model, color){
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }
    drive(){
        this.miles +=10;
        console.log(`You drove your ${this.constructor.name} and it now has ${this.miles} miles on it.`)
    }
    parentFunction(){
        return `This is coming from the parent!`
    }
}

/*const car = new Vehicle("Ford", "Falcon", "Brown");
car.drive();
console.log(car.miles) */

class M5 extends Vehicle{
    constructor(color){
        super("Ford", "Falcon", color);
        this.hp = 616;
    }
    printSpecSummary(){
        console.log(`BMW M5 with a 4.4L V8 Twin Turbo engine packin ${this.hp} HP and 553 lb-ft TQ`)
    }
    childFunction(){
        const message = super.parentFunction();
        console.log(message);
    }
}

const car = new M5("blue");
//car.drive();
car.childFunction();
console.log(car);