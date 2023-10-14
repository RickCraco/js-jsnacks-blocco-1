//esercizio frutta

const frutta = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

frutta.push('pesca');


let cocomeroTrovato = false;
for (let i = 0; i < frutta.length; i++) {
    if (frutta[i] === 'cocomero') {
        cocomeroTrovato = true;
        frutta.splice(i, 1);
        break;
    }
}

if (cocomeroTrovato) {
    console.log('Trovato: cocomero era presente nell\'array e ora è stato rimosso.');
} else {
    console.log('Non trovato: cocomero non era presente nell\'array.');
}

cocomeroTrovato = false;
for (let i = 0; i < frutta.length; i++) {
    if (frutta[i] === 'cocomero') {
        cocomeroTrovato = true;
        break;
    }
}

if (cocomeroTrovato) {
    console.log('Trovato: cocomero è presente nell\'array modificato.');
} else {
    console.log('Non trovato: cocomero non è presente nell\'array modificato.');
}

