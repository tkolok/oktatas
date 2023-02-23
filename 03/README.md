# 3. Óra

## [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) (függvények)
A functionök (függvények) nem mások, mint újrafelhasználható paraméterezhető utasítás blokkok.

```javascript
function sum1(a, b) {
    return a + b;
}

let sum2 = (a, b) => {
    return a + b;
};

let sum3 = (a, b) => a + b;
```

## return
A `return` kulcsszó után a function futása véget ér, és a function visszatér a `return` után álló érétkkel. Ha ez az érték nincs definiálva, vagy a function nem
fut bele `return` utasításba, akkor `undefined` értékkel tér vissza a function. 

## [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) functions

### [.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
Kisbetűssé alakítja a stringet.

```javascript
'HELLO'.toLowerCase(); // hello
```

### [.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
Nagybetűssé alakítja a stringet.

```javascript
'Hello World'.toUpperCase(); // HELLO WORLD
```

### [.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
Eltávolítja a szóközöket a string elejéről és végéről.

```javascript
'   Hello world!   '.trim(); // Hello world!
```

### [.localeCompare(that)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
Összehasonlítja a két stringet. Az eredmény
- 0, ha a két string megegyezik,
- negatív szám, ha a string ábécé szerint a paraméter string előtt van,
- pozitív szám, ha a string ábécé szerint a paraméter string után van.

```javascript
'ALMA'.localeCompare('KORTE'); // negatív
```

### [.includes(searchString)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
`true` lesz a visszatérési érték, ha a `searchString` megtalálható a stringben.

```javascript
'ALMA'.includes('A'); // true
```

### [.endsWith(searchString)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
`true` lesz a visszatérési érték, ha a `searchString`-re végződik a string.

```javascript
'ALMA'.endsWith('A'); // true
```

### [.startsWith(searchString)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
`true` lesz a visszatérési érték, ha a `searchString`-gel kezdődik a string.

```javascript
'ALMA'.startsWith('A'); // true
```

### [.indexOf(searchString)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
Megadja, hogy hányadik indexen helyezkedik el a `searchString`.

```javascript
'ALMA'.indexOf('MA'); // 2
```

### [.replace(searchValue, replaceValue)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
Az `searchValue` első előfordulását lecseréli a `replaceValue`-ra.

```javascript
'ALMA'.replace('AL', 'KAR'); // KARMA
```

### [.substring(start, end?)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
Visszaadja a két index közötti stringet. Ha az `end` nincs megadva, akkor a string végéig vágja ki a stringet.

```javascript
'ALMA'.substring(1, 3); // LM
```

### [.split(separator)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
A `separator` alapján feldarabolja a stringet.

```javascript
'ALMA;KORTE;SZILVA'.split(';'); // ['ALMA', 'KORTE', 'SZILVA']
```

## [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) functions

### [.forEach(callbackfn)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
A tömb minden elemére végrehajtja a `callbackfn` functiont.

```javascript
[10, 20, 30].forEach(console.log);
```

### [.push(...items)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
A tömb végéhez hozzáfűzi a megadott paramétereket.

```javascript
[10, 20, 30].push(40, 50); // [10, 20, 30, 40, 50]
```

### [.unshift(...items)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
A tömb elejéhez hozzáfűzi a megadott paramétereket.

```javascript
[10, 20, 30].unshift(0, 5); // [0, 5, 10, 20, 30]
```

### [.concat(...items)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
A tömb végéhez hozzáfűzi a paraméterként megadott tömb(ök) elemeit.

```javascript
[10, 20, 30].concat([40, 50]); // [10, 20, 30, 40, 50]
```

### [.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
Kiveszi a tömb utolsó elemét.

```javascript
[10, 20, 30].pop(); // 30
```

### [.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
Kiveszi a tömb első elemét.

```javascript
[10, 20, 30].shift(); // 10
```

### [.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
Megfordítja a tömb elemeinek sorrendjét.

```javascript
[10, 20, 30].reverse(); // [30, 20, 10]
```

### [.join(separator)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
Stringgé fűzi össze a tömb elemeit a `separator` stringgel.

```javascript
[10, 20, 30].join(' + '); // '10 + 20 + 30'
```

### [.includes(searchElement)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
`true` értékkel tér vissza, ha a tömb tartalmazza a `searchElement` értékét.

```javascript
[10, 20, 30].includes(20); // true
[10, 20, 30].includes(25); // false
```

### [.some(predicate)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
`true` értékkel tér vissza, ha a tömb valamely elemére a `predicate` function `true` értékkel tér vissza.

```javascript
[10, 20, 30].some(number => number === 20); // true
[10, 20, 30].some(number => number === 25); // false
```

### [.every(predicate)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
`true` értékkel tér vissza, ha a tömb minden elemére a `predicate` function `true` értékkel tér vissza.

```javascript
[10, 20, 30].every(number => number === 20); // false
[10, 20, 30].every(number => number > 5); // true
```

### [.find(predicate)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
Visszatér az első olyan elemmel, amelyre a `predicate` function `true` értékkel tér vissza. Ha nincs ilyen, akkor `null` értékkel tér vissza.

```javascript
[10, 20, 30].find(number => number > 25); // 30
```

### [.findIndex(predicate)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
Visszatér az első olyan elem indexével, amelyre a `predicate` function `true` értékkel tér vissza. Ha nincs ilyen, akkor `-1`-gyel tér vissza.

```javascript
[10, 20, 30].findIndex(number => number > 25); // 2
```

### [.indexOf(searchElement)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
Visszatér az első olyan elemmel indexével, amely megegyezik a `searchElement` értékével. Ha nincs ilyen, akkor `-1`-gyel tér vissza.

```javascript
[10, 20, 30].indexOf(20); // 1
[10, 20, 30].indexOf(25); // -1
```

### [.filter(predicate)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
Egy új tömbbel tér vissza, amelyben csak azok az elemek vannak, amelyekre a `predicate` function `true` értékkel tér vissza.

```javascript
[10, 20, 30].filter(number => number > 15); // [20, 30]
```

### [.map(callbackFn)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
Egy új tömbbel tér vissza, amelyben a `callbackFn` által átalakított elemek lesznek.

```javascript
[10, 20, 30].map(number => number + 100); // [110, 120, 130]
```

### [.splice(start, deleteCount, ...items)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
A `start` indextől kezdve kitörli a következő `deleteCount` darab elemet a tömbből, és beszúrja az `...items` elemeket a tömbbe.

```javascript
[10, 20, 30, 40, 50].splice(1, 2, 'húsz', 'harminc'); // [10, 'húsz', 'harminc', 40, 50]
```

### [.sort(compareFn)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
A `compareFn` alapján sorbarendezi a tömbböt. A `compareFn` visszatérési értéke
- 0, ha a két elem megegyezik megegyezik,
- negatív szám, ha sorrend szerint az első elem előrébb van, mint a második,
- pozitív szám, ha sorrend szerint az első elem hátrébb van, mint a második.

```javascript
[35, 27, 1, 83, 42].sort((a, b) => a - b); // [1, 27, 35, 42, 83]
```

### [.reduce(callbackFn, initialValue?)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
Az összes elemet felhasználva létrehoz egy új értéket. Az `initialValue` lesz a kezdő érték.

```javascript
[10, 20, 30].reduce((sum, number) => sum + number, 0); // 60
```
