//console.log(magicalUnicorns);
/* console.log(magicalUnicorns);
var magicalUnicorns = "awesome"; */
/* var magicalUnicorns; // la declaración se eleva a la parte superior del alcance por sí sola
console.log(magicalUnicorns); // Lo registramos como indefinido
magicalUnicorns = "awesome"; // la tarea se queda exactamente donde estaba */

/* console.log(magicalUnicorns); 
let magicalUnicorns = "awesome!"; */

/* var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo); */

/* var foo;                  // 'foo' es una declaración, es global y se eleva
function magic(){         // 'magic()' también se eleva a la cima
    var foo;              // aqui 'foo' es declarada dentro de 'magic()' y se eleva a la parte superior de su scope
    foo = "hello world";  // asignamos un valor a nuestra función scoped 'foo'
    console.log(foo);     // lo registramos como 'hola mundo'
}                       
foo = "bar";              // aquí, asignamos un valor al 'foo' global'
magic();                  // magic es llamada y se ejecuta la primera consola.log
console.log(foo);         // finalmente registramos el foo global */


var magicalUnicorns = function(){
    console.log("Will it blend?");
}
magicalUnicorns();
console.log("Don't breathe this!");