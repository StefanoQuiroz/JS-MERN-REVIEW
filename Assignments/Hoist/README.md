# Asignación: Hoist de JavaScript

Practica leer JavaScript de la misma manera que el intérprete lo lee.
Vuelve a escribir el código de la forma en que el intérprete lo vería y predice el resultado. Aquí se muestra un ejemplo:

```sh
// GIVEN
console.log(example);
var example = "I'm the example!";
AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";
```

Una vez que hayas hecho tu predicción, ejecuta el código original para averiguar si tenías razón. Si tus predicciones fueron incorrectas, observa cómo el intérprete levanta el código.

# Nota
Ejecuta el mismo código que el anterior con la sintaxis ES6 y compara tus resultados:
```sh
console.log(example);
let example = "I'm the example!";   
```

Incluso si lety constevitan que una gran parte del comportamiento confuso de elevación de JavaScript, hay constructores ES6 y una enorme cantidad de código JavaScript en vivo del mundo que sigue siendo ES5. ¡Comprender cómo ES5 elevavary las reglas de alcance son importantes para todos los desarrolladores de JavaScript!