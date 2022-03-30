/*
SNACK 5 Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array. 
*/

//Crea array vuoto
let array = [];

//chiedi per 6 volte all'utente di inserire un numero

for(let i = 0; i<6; i++){
    let numero = parseInt(prompt("Inserisci numero: "));
    
    if(numero %2 != 0){
        console.log(`Il numero ${numero} è dispari quindi verrà aggiunto all'array`);
        array.push(numero);
    }else{
        console.log(`Il numero ${numero} è pari quindi NON verrà aggiunto all'array`);
        
    } 
}


if(array == 0){
    console.log("Array vuoto perchè hai inserito tutti numeri pari");
}else{
    console.log("l'array è composto dai seguenti numeri: ", array);
}