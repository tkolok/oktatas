// Írj kód részletet, amelyben összehasonlítasz 2 számot! Ha megegyeznek, akkor azt iratod ki, hogy "Megegyeznek", egyébként "Nem egyeznek meg"!
let a = 5;
let b = 10;
if (a === b) {
    console.log('Megegyeznek');
} else {
    console.log('Nem egyeznek meg');
}

// Írj kód részletet, amelyben kiiratod a 100-nál kisebb 5-tel osztható pozitív számokat!
// a)
for (let number = 1; number < 100; number++) {
    if (number % 5 === 0) {
        console.log(number);
    }
}

// b)
for (let number = 1; number < 100; number++) {
    if (number % 5 !== 0) {
        continue;
    }
    console.log(number);
}

// c)
for (let number = 5; number < 100; number += 5) {
    console.log(number);
}

// Írj kód részletet, amelyben kiiratod a 100-nál kisebb pozitív számok összegét!
let sum = 0;
for (let number = 1; number < 100; number++) {
    sum += number;
}
console.log(sum);

// Írj kód részletet, amelyben kiiratod az első 10 pozitív szám négyzetét!
for (let number = 1; number <= 10; number++) {
    console.log(number * number);
}

// Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd kiiratod a legnagyobb számot közülük!
let array = [30, 70, 21, 65, 8];
let max = array[0];
for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i];
    }
}
console.log(max);

// Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd kiiratod, hogy hányszor szerepelt a 4-es a tömbben!
let array = [5, 4, 3, 4, 5];
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === 4) {
        count++;
    }
}
console.log(count);

// Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd az összes elemére kiiratod, hogy osztható 2-vel, 3-mal és 5-tel!
let array = [30, 70, 21, 65, 8];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(`${array[i]} osztható 2-vel`);
    }
    if (array[i] % 3 === 0) {
        console.log(`${array[i]} osztható 3-mal`);
    }
    if (array[i] % 5 === 0) {
        console.log(`${array[i]} osztható 5-tel`);
    }
}

// Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd visszafelé kiiratod az elemeit!
// a)
let array = [1, 2, 3, 4, 5];
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

// b)
let array = [1, 2, 3, 4, 5];
for (let i = 1; i <= array.length; i++) {
    console.log(array[array.length - i]);
}

// Írj kód részletet, amelyben létrehozol egy akárhány elemű akármilyen tömböt! Ha páros számú elem található benne, akkor előre felé irasd ki az elemeket,
// egyébként visszafelé!
let array = [1, 2, 3, 4, 5, 6];
if (array.length % 2 === 0) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
} else {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

// Írj kód részletet, amelyben kiiratod a 100-nál kisebb Fibonacci számokat!
let a = 0;
let b = 1;
while (b < 100) {
    console.log(b);
    b += a;
    a = b - a;
}

// Írj kód részletet, amelyben kiiratod egy 10 elemű tömb minden második elemét!
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
}

// Írj kód részletet, amelyben kiiratod létrehozol 2 darab 5 elemű szám tömböt, majd létrehozol egy üres tömböt! Az üres tömbbe a másik 2 tömb azonos indexű
// elemeit összeadod!
let a1 = [1, 2, 3, 4, 5];
let a2 = [5, 4, 3, 2, 1];
let sum = [];
for (let i = 0; i < a1.length; i++) {
    sum.push(a1[i] + a2[i]);
}

// Írj kód részletet, amelyben létrehozol egy 3 elemű tömböt, amelynek minden eleme egy 3 elemű szám tömb! Irasd ki az összes elemét!
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// Írj kód részletet, amelyben létrehozol egy üres tömböt! Ebbe addig teszel boolean értékeket, ameddig 10 elem lesz a tömbben!
let array = [];
while (array.length < 10) {
    array.push(true);
}