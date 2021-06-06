/* let canAfford = (itemPrice, accountBalance) => {
    if(itemPrice > accountBalance){
        return `Cannot afford! yout are $ ${itemPrice-accountBalance} short`;
    } else {
        return `Can afford!`;
    }
} */

let canAfford = (itemPrice, accountBalance) => ((itemPrice > accountBalance) ? `Cannot afford! yout are $ ${itemPrice-accountBalance} short` : `Can afford!`);

/* console.log(canAfford(75,50)); */
let myBankAccountBalance = 1000;
const drone = 1001;
let droneOnSale = drone-drone * 0.03;

//console.log(canAfford(drone, myBankAccountBalance));
//console.log(canAfford(droneOnSale, myBankAccountBalance));

const myVar = 10 < 20 ? 5 < 10 ? true : false : true;
console.log(myVar);