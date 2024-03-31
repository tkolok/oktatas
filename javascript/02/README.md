# JavaScript 2. fogás

## [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
Az `if` utasítás célja, hogy bizonyos utasítások csak akkor fussanak meg, ha egy logikai kifejezés értéke `true`. Egyfajta kód elágaztatás. Az `else` ágban
található utasítások pedig csak akkor futnak meg, ha a logikai kifejezés értéke `false`, de ezt nem kötelező megadni.  
Az `if` a receptekben azok a részek, amikor azt olvashatjuk, hogy ízlésünk szerint tehetünk bele ezt-azt. Ha olyan kedvünk van, akkor teszünk bele, ha nem
vagyunk olyan hangulatban, akkor nem teszünk.

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

### Példák

```javascript
if (isTasty === true) {
    console.log('Finom volt!');
}
```

A fenti példában ha az `isTasty` értéke `true`, akkor kiírjuk a képernyőre, hogy _"Finom volt!"_.  
Egészítsük ki a példát egy `else` ággal.

```javascript
if (isTasty === true) {
    console.log('Finom volt!');
} else {
    console.log('Ilyet se eszek többet!');
}
```

Abban az esetben, ha az `isTasty` értéke nem `true`, akkor a képernyőn az a szöveg fog megjelenni, hogy _"Ilyet se eszek többet!"_.  
Fontos megjegyezni, hogy az `else` ág nem csak akkor fog megfutni, ha az `isTasty` értéke `false`, hanem bármikor, amikor nem `true`, vagyis akkor is, ha `42`,
`undefined`, vagy akár egy tömb.

Továbbá lehetőségünk van arra is, hogy összefűzzünk több `if` utasítást.

```javascript
let result;

if (rating <= 1) {
    result = 'Borzasztó';
} else if (rating <= 3) {
    result = 'Átlagos';
} else {
    result = 'Remek';
}

console.log(result + ' volt az étel.');
```

Nézzük meg soronként, hogy mi történik a fentebbi kódban. Ha a `rating` kisebb, vagy egyenlő, mint `1`, akkor a `result` értéke `'Borzasztó'` lesz. Ellenkező
esetben (azaz a `rating` legalább `2`) tovább vizsgáljuk a `rating` értékét, és ha kisebb, vagy egyenlő, mint `3`, akkor a `result` értéke `'Átlagos'` lesz. Ha
még ez a feltétel sem teljesül (tehát a `rating` legalább `4`), akkor a `result` értéke `'Remek'` lesz. Végül pedig kiírjuk, hogy milyen volt maga az étel.

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
    console.log('A tömb ' + i + '. eleme ' + array[i] + '.');
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
2. Írj kód részletet, amelyben kiíratod a 100-nál kisebb 5-tel osztható pozitív számokat!
3. Írj kód részletet, amelyben kiíratod a 100-nál kisebb pozitív számok összegét!
4. Írj kód részletet, amelyben kiíratod az első 10 pozitív szám négyzetét!
5. Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd kiíratod a legnagyobb számot közülük!
6. Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd kiíratod, hogy hányszor szerepelt a 4-es a tömbben!
7. Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd az összes elemére kiíratod, hogy osztható 2-vel, 3-mal és 5-tel!
8. Írj kód részletet, amelyben létrehozol egy 5 elemű szám tömböt, majd visszafelé kiíratod az elemeit!
9. Írj kód részletet, amelyben létrehozol egy akárhány elemű akármilyen tömböt! Ha páros számú elem található benne, akkor előre felé írasd ki az elemeket,
   egyébként visszafelé!
10. Írj kód részletet, amelyben kiíratod a 100-nál kisebb [Fibonacci számokat](https://hu.wikipedia.org/wiki/Fibonacci-sz%C3%A1mok)!
11. Írj kód részletet, amelyben kiíratod egy 10 elemű tömb minden második elemét!
12. Írj kód részletet, amelyben létrehozol 2 darab 5 elemű szám tömböt, majd létrehozol egy üres tömböt! Az üres tömbbe a másik 2 tömb azonos indexű elemeit add
   össze!
13. Írj kód részletet, amelyben létrehozol egy 3 elemű tömböt, amelynek minden eleme egy 3 elemű szám tömb! Írasd ki az összes elemét!
14. Írj kód részletet, amelyben létrehozol egy üres tömböt! Ebbe addig teszel boolean értékeket, ameddig 10 elem lesz a tömbben!