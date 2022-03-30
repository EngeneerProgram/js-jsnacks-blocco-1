/*
NACK 2 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/


let parola1 = prompt("Inserisci prima parola");


let parola2 = prompt("Inserisci seconda parola");
if(parola2 == 0){
    alert("Inserisci una stringa");
    
}

if(parola1.length > parola2.length){
    console.log(parola2);
    console.log(parola1);
}else if(parola1.length == parola2.length) {
    console.log("le stringhe hanno stessa lunghezza");
}else{
    console.log(parola1);
    console.log(parola2);
}