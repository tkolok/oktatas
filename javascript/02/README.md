# JavaScript 2. fogás

## [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) -
Az `if` utasítás célja, hogy bizonyos utasításokat csak akkor futtassunk meg, ha egy logikai kifejezés értéke `true`. Egyfajta kód elágaztatás. Az `else` ágban
található utasítások csak akkor futnak meg, ha a logikai kifejezés értéke `false`, de ezt nem kötelező megadni.

### Szintaxis

```
if (<logikai kifejezés>) {
    // utasítások
}
```

```
if (<logikai kifejezés>) {
    // utasítások
} else {
    // utasítások
}
```

### Példa

```javascript
if (number % 2 === 0) {
    console.log('Ez egy páros szám');
} else {
    console.log('Ez egy páratlan szám');
}
```

## [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) -

### Szintaxis

```
switch (<kifejezés>) {
    case <érték 1>:
        <utasítások>
        break;
    case <érték 2>:
        <utasítások>
        break;
    ...
    default:
        <utasítások>
}
```

### Példa

```javascript
switch (fruit) {
    case 'alma':
        console.log('Az alma egy gyümölcs');
        break;
    case 'körte':
        console.log('A körte latin neve pyrus');
        break;
    default:
        console.log('Szívesen csinálnék egy gyümölcssalátát!');
}
```

## [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) -

### Szintaxis

```
for (<változók deklarálása>; <feltételek>; <ciklusiteráció után megfutó utasítások>) {
    <utasítások>
}
```

### Példa

```javascript
for (let i = 0; i < array.length; i++) {
    console.log(`A tömb ${i}. eleme ${array[i]}.`);
}
```

## [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) -

### Szintaxis

```
while (<feltételek>) {
    <utasítások>
}
```

### Példa

```javascript
let number = 0;
while (number < 10) {
    console.log(number++);
}
```

## [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) -

### Szintaxis

```
do {
    <utasítások>
} while (<feltételek>);
```

### Példa

```javascript
let number = 0;
do {
    console.log(number++);
} while (number < 10);
```

## [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) -

```javascript
let number = 0;
while (true) {
    console.log(number++);
    if (number >= 10) {
        break;
    }
}
```

## [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) -

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
2. Írj kód részletet, amelyben kiiratod a 100-nál kisebb 5-tel osztható pozitív számokat!
3. Írj kód részletet, amelyben kiiratod a 100-nál kisebb pozitív számok összegét!
4. Írj kód részletet, amelyben kiiratod az első 10 pozitív szám négyzetét!
5. Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd kiiratod a legnagyobb számot közülük!
6. Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd kiiratod, hogy hányszor szerepelt a 4-es a tömbben!
7. Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd az összes elemére kiiratod, hogy osztható 2-vel, 3-mal és 5-tel!
8. Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd visszafelé kiiratod az elemeit!
9. Írj kód részletet, amelyben létrehozol egy akárhány elemű akármilyen tömböt! Ha páros számú elem található benne, akkor előre felé irasd ki az elemeket,
   egyébként visszafelé!
10. Írj kód részletet, amelyben kiiratod a 100-nál kisebb Fibonacci számokat!
11. Írj kód részletet, amelyben kiiratod egy 10 elemű tömb minden második elemét!
12. Írj kód részletet, amelyben kiiratod létrehozol 2 darab 5 elemű szám tömböt, majd létrehozol egy üres tömböt! Az üres tömbbe a másik 2 tömb azonos indexű
   elemeit összeadod!
13. Írj kód részletet, amelyben létrehozol egy 3 elemű tömböt, amelynek minden eleme egy 3 elemű szám tömb! Irasd ki az összes elemét!
14. Írj kód részletet, amelyben létrehozol egy üres tömböt! Ebbe addig teszel boolean értékeket, ameddig 10 elem lesz a tömbben!