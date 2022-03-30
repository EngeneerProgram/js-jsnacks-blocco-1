/*
SNACK 4 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all?utente il suo nome e comunicagli se pu� partecipare o no alla festa. 
*/ 

//Creiamo l'array contente gli invitati alla festra
let container = ["rosario", "fabiola" , "fabio", "giovanni" ,"mike", "pippo", "paperino"];
console.log( "Gli invitati sono: " , container);

let partecipa = false;


let nome_utente = prompt("Come ti chiami?");

for(let i = 0; i<container.length; i++){
    
    if(nome_utente == container[i]){
    partecipa = true;
    console.log(`${nome_utente} può partecipare all'evento`);
    }
}   
if(partecipa == false){
    console.log(`${nome_utente} non può partecipare all'evento`);
}

