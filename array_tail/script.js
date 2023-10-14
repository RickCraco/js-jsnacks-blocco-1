//esercizio coda array

let n = parseInt(prompt('inserire il numero di elementi da generare nel vettore'));
let array = [];

for(let i = 0; i < n; i++){
  array[i] = getRndInteger(1, 100);
  console.log(array[i]);
}

//versione senza usare la funzione slice
/*

//per stampare gli ultimi 5 elementi
for(let i = n - 5; i < n; i++){
  console.log(array[i]);
}

//per stampare gli ultimi x elementi
for(let i = n - x; i < n; i++){
  console.log(array[i]);
}

*/

console.log(array.slice(array.length - 5, array.length));

let x = parseInt(prompt('inserire il numero di elementi da stampare dalla coda del vettore: '));

if(x <= array.length){
  console.log(array.slice(array.length - x, array.length));
}else{
  alert('errore impossibile stampare i dati, grandezza non valida');
}