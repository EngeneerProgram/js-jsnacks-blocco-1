/*
SNACK 1 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/


let num1 = prompt("inserisci un numero");
console.log(num1);
let num2 = prompt("Inserisci secondo numero: ");
console.log(num2);

if(num1>num2){
    console.log("num1 è maggiore di num2");
}else{
    console.log("num2 è maggiore di num1");
}