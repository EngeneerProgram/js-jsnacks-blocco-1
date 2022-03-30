/*
SNACK 3 Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. 
SNACK 3 Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. 
*/

//chiediamo all'utente 10 volte di inserire un numero tramite un ciclo for
let somma = 0;
for(let i = 0; i<10; i++){
    let numero = parseInt(prompt("Inserisci numero"));
    console.log(numero);
    //sommiamo 
    somma = somma + numero;
    
}

console.log(somma);
