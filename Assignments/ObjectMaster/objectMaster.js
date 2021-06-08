const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const bListPkmn = pokemon.filter(({name}) => name[0]==="B").map(({name}) => name);
//console.log(bListPkmn);
const pkmnIds = pokemon.map(({id}) => id);
//console.log(pkmnIds);

const pokmnsIds3 = pokemon.filter(({id}) => !(id%3));
//console.log(pokmnsIds3);

const pkmnFuego = pokemon.filter(({types}) => types.includes("fire"));
//console.log(pkmnFuego);

const pkmnTypes = pokemon.filter(({types})=> types.length > 1);
//console.log(pkmnTypes);

const pkmnNames = pokemon.map(({name}) => name);
//console.log(pkmnNames);

const pkmnIds99 = pokemon.filter(({id}) => id>99).map(({name}) => name);
//console.log(pkmnIds99);

const pkmnVeneno = pokemon.filter(({types}) => types.includes("poison")).map(({name})=> name);
//console.log(pkmnVeneno);

const pkmnVolador = pokemon.filter(({types}) => types[1] === "flying").map(({types}) => types[0]);
//console.log(pkmnVolador);

const pkmnNormal = pokemon.filter(({types}) => types.includes("normal")).length;
console.log(pkmnNormal);