//esercizio bonus

let vettore1 = [1, 2, 3, 4, 5];
let vettore2 = [1, 2, 3];

for(let i = 0; i < (vettore1.length + 1) - vettore2.length; i++){
  vettore2.push(getRndInteger(1, 100));
}

if(vettore1.length === vettore2.length){
  console.log('i due vettori hanno la stessa lunghezza');
}else{
  console.log('i due vettori hanno ancora lunghezze diverse');
}

//utility

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }