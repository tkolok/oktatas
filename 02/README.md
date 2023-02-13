# 2. Óra

## [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) utasítás

```javascript
if (number % 2 === 0) {
    console.log('Ez egy páros szám');
} else {
    console.log('Ez egy páratlan szám');
}
```

## [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) utasítás

```javascript
switch (fruit) {
    case 'alma':
        // ...
        break;
    case 'körte':
        // ...
        break;
    default:
        // ...
}
```

## [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) utasítás

```javascript
for (let i = 0; i < array.length; i++) {
    console.log(`A tömb ${i}. eleme ${array[i]}.`);
}
```

## [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) utasítás

```javascript
let number = 0;
while (number < 10) {
    console.log(number++);
}
```

## [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) utasítás

```javascript
let number = 0;
do {
    console.log(number++);
} while (number < 10);
```

## [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) utasítás

```javascript
let number = 0;
while (true) {
    console.log(number++);
    if (number >= 10) {
        break;
    }
}
```

## [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) utasítás

```javascript
let number = 0;
while (number < 10) {
    number++;
    if (number % 2 === 0) {
        continue;
    }
    console.log(number);
}
```

## Házi feladat

1. Írj kód részletet, amelyben összehasonlítasz 2 számot! Ha megegyeznek, akkor azt iratod ki, hogy "Megegyeznek", egyébként "Nem egyeznek meg"!
1. Írj kód részletet, amelyben kiiratod a 100-nál kisebb 5-tel osztható pozitív számokat!
1. Írj kód részletet, amelyben kiiratod a 100-nál kisebb pozitív számok összegét!
1. Írj kód részletet, amelyben kiiratod az első 10 pozitív szám négyzetét!
1. Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd kiiratod a legnagyobb számot közülük!
1. Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd kiiratod, hogy hányszor szerepelt a 4-es a tömbben!
1. Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd az összes elemére kiiratod, hogy osztható 2-vel, 3-mal és 5-tel!
1. Írj kód részletet, amelyben kiiratod a 100-nál kisebb Fibonacci számokat!
