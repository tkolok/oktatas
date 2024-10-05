// Írj kód részletet, amelyben összehasonlítasz 2 számot! Ha megegyeznek, akkor azt iratod ki, hogy "Megegyeznek", egyébként "Nem egyeznek meg"!
let a = 5;
let b = 10;
if (a === b) {
    console.log('Megegyeznek');
} else {
    console.log('Nem egyeznek meg');
}

// Írj kód részletet, amelyben kiíratod a 100-nál kisebb 5-tel osztható pozitív számokat!
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

// Írj kód részletet, amelyben kiíratod a 100-nál kisebb pozitív számok összegét!
let sum = 0;
for (let number = 1; number < 100; number++) {
    sum += number;
}
console.log(sum);

// Írj kód részletet, amelyben kiíratod az első 10 pozitív szám négyzetét!
for (let number = 1; number <= 10; number++) {
    console.log(number * number);
}

// Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd kiíratod a legnagyobb számot közülük!
let array = [30, 70, 21, 65, 8];
let max = array[0];
for (let index = 1; index < array.length; index++) {
    if (max < array[index]) {
        max = array[index];
    }
}
console.log(max);

// Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd kiíratod, hogy hányszor szerepelt a 4-es a tömbben!
let array = [5, 4, 3, 4, 5];
let count = 0;
for (let index = 0; index < array.length; index++) {
    if (array[index] === 4) {
        count++;
    }
}
console.log(count);

// Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd az összes elemére kiíratod, hogy osztható 2-vel, 3-mal és 5-tel!
let array = [30, 70, 21, 65, 8];
for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
        console.log(array[index] + ' osztható 2-vel');
    }
    if (array[index] % 3 === 0) {
        console.log(array[index] + ' osztható 3-mal');
    }
    if (array[index] % 5 === 0) {
        console.log(array[index] + ' osztható 5-tel');
    }
}

// Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd visszafelé kiíratod az elemeit!
// a)
let array = [1, 2, 3, 4, 5];
for (let index = array.length - 1; index >= 0; index--) {
    console.log(array[index]);
}

// b)
let array = [1, 2, 3, 4, 5];
for (let index = 1; index <= array.length; index++) {
    console.log(array[array.length - index]);
}

// Írj kód részletet, amelyben létrehozol egy akárhány elemű akármilyen tömböt! Ha páros számú elem található benne, akkor előre felé írasd ki az elemeket,
// egyébként visszafelé!
let array = [1, 2, 3, 4, 5, 6];
if (array.length % 2 === 0) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
} else {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

// Írj kód részletet, amelyben kiíratod a 100-nál kisebb Fibonacci számokat!
let a = 0;
let b = 1;
while (b < 100) {
    console.log(b);
    b += a;
    a = b - a;
}

// Írj kód részletet, amelyben kiíratod egy 10 elemű tömb minden második elemét!
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < array.length; index += 2) {
    console.log(array[index]);
}

// Írj kód részletet, amelyben létrehozol 2 darab 5 elemű szám tömböt, majd létrehozol egy üres tömböt! Az üres tömbbe a másik 2 tömb azonos indexű elemeit add
// össze!
let a1 = [1, 2, 3, 4, 5];
let a2 = [5, 4, 3, 2, 1];
let sum = [];
for (let index = 0; index < a1.length; index++) {
    sum.push(a1[index] + a2[index]);
}

// Írj kód részletet, amelyben létrehozol egy 3 elemű tömböt, amelynek minden eleme egy 3 elemű szám tömb! Írasd ki az összes elemét!
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
        console.log(matrix[x][y]);
    }
}

// Írj kód részletet, amelyben létrehozol egy üres tömböt! Ebbe addig teszel boolean értékeket, ameddig 10 elem lesz a tömbben!
let array = [];
while (array.length < 10) {
    array.push(true);
}