

/* const func = async()=>{
    try{
        console.log("inicio");
        await setTimeout( function() { 
            console.log("start") 
        }, 3000 );
              
        console.log("end");
    }
    catch (e){
        console.error(e)
    }
}

func(); */

/* var exampleFunction =(message) =>{
    console.log( message );
};
      
exampleFunction( "Hello from exampleFunction" );

function parentFunction( callback ) {
    callback( "information from the parent function" );
  }
parentFunction(function(message) {console.log(message)}); */


/* const arr = Object.freeze([1,2,3,4,5]);
arr.push(3000);
console.log(arr); */

/* const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

//Para hacer una copia y agregar un item
const needThyme = [...groceryList, { "item": "thyme", "haveIngredient": false}]
console.log(needThyme);

const needThyme1 = groceryList.concat({ "item": "thyme", "haveIngredient": false});
console.log(needThyme1); 

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];
//devueleve una copia de las posiciones 0 - 4 del [{}] y sobreescribe la el objeto de la posicion 5 thyme con haveIngredient : "true"
console.log(gotTheThyme);

const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];
//Hace una copia de las posiciones 0 - 1 y luego copia las posiciones 3 en adelante, quedando la 2 celery en el aire
console.log(notNeceCelery); */


/* const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
//items.sort(); // esto lanzará un error, orque sort no devuelve otra o matriz ordenada
const sortedItems = [...items].sort();
console.log(sortedItems);

const numbers = [10, 5, 3, 12, 22, 8];
console.log(numbers.sort());
console.log(numbers.sort((a,b)=>a-b)); //0 -> n a-b  n->0 b-a  */


/* const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
console.log(groceryList)

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
console.log(cubes); */

/* const values = [1, 2, 3, 4, 5];
const evens = values.filter( val => !(val % 2) );
console.log(evens); */

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );
console.log(oFoods); 

const values=[1,2,3,4,5];
const oddCubes = values.filter(items => items%2).map(items => items**3);
console.log(oddCubes);

