const accountId =777779;
let accountEmail = "zzzzz@pizza.com";
var accountPassword ="Password";
accountCity ="Jaipur";
console.table([accountId,accountEmail,accountPassword,accountCity]);
accountEmail="knight@dungeon&dragons.com";
accountPassword="Monty Python";
accountCity="Kolkata";
console.table([accountEmail,accountId,accountPassword,accountCity]);
/* 
Do not use var to declare variables. Because of issue in block scope and functional scope.
*/