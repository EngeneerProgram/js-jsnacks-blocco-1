/*
SNACK 4 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all?utente il suo nome e comunicagli se pu� partecipare o no alla festa. 
*/ 

//Creiamo l'array contente gli invitati alla festra
let container = ["rosario", "fabiola" , "fabio", "giovanni" ,"mike", "pippo", "paperino"];
console.log(container);

let partecipa = false;

let nome_utente = prompt("Come ti chiami?");
console.log(nome_utente);
for(let i = 0; i<container.length; i++){
    
    if(nome_utente == container[i]){
    partecipa = true;
    console.log("puoi partecipare all'evento");
    }else{
        console.log("Il tuo nome non è presente nella lista");
    }
}   