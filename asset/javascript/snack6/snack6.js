/*
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
*/

let inserisci_numeri = parseInt(prompt("Quanti numeri vuoi inserire? "));
console.log(`I numeri che vuoi inserire sono ${inserisci_numeri}`);

for(let i = 0; i<inserisci_numeri; i++){
    let numero = parseInt(prompt("Inserisci numero:"));
    console.log(`Hai inserito il numero: ${numero}`);
    let cubo = numero * numero *numero;
    console.log(`il cubo di ${numero} è ${cubo}`);
    

}