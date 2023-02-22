# 3. Óra

## [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) (függvények)

```javascript
function sum(a, b) {
    return a + b;
}

let multiplication = (a, b) => a * b;
```

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

### [.localeCompare()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
Összehasonlítja a két stringet. Az eredmény
- 0, ha a két string megegyezik,
- negatív szám, ha a string ábécé szerint a paraméter string előtt van,
- pozitív szám, ha a string ábécé szerint a paraméter string után van.

```javascript
'ALMA'.localeCompare('KORTE'); // negatív
```

### [.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
`true` lesz a visszatérési érték, ha a paraméter string megtalálható a stringben.

```javascript
'ALMA'.includes('A'); // true
```

### [.endsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
`true` lesz a visszatérési érték, ha a paraméter stringre végződik a string.

```javascript
'ALMA'.endsWith('A'); // true
```

### [.startsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
`true` lesz a visszatérési érték, ha a paraméter stringgel kezdődik a string.

```javascript
'ALMA'.startsWith('A'); // true
```

### [.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
Megadja, hogy hányadik indexen helyezkedik el a keresett string.

```javascript
'ALMA'.indexOf('MA'); // 2
```

### [.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
Az első paraméterként megadott string első előfordulását lecseréli a második paraméterként megadott stringre.

```javascript
'ALMA'.replace('AL', 'KAR'); // KARMA
```

### [.substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
Visszaadja a két index közötti stringet.

```javascript
'ALMA'.substring(1, 3); // LM
```

### [.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
A paraméterként megadott string alapján feldarabolja a stringet.

```javascript
'ALMA;KORTE;SZILVA'.split(';'); // ['ALMA', 'KORTE', 'SZILVA']
```

## [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) functions

### [.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```javascript
[10, 20, 30].forEach(console.log);
```

### [.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

```javascript
[10, 20, 30].push(40, 50); // [10, 20, 30, 40, 50]
```

### [.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

```javascript
[10, 20, 30].unshift(0, 5); // [0, 5, 10, 20, 30]
```

### [.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

```javascript
[10, 20, 30].concat([40, 50]); // [10, 20, 30, 40, 50]
```

### [.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

```javascript
[10, 20, 30].pop(); // 30
```

### [.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

```javascript
[10, 20, 30].shift(); // 10
```

### [.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

```javascript
[10, 20, 30].reverse(); // [30, 20, 10]
```

### [.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```javascript
[10, 20, 30].join(' + '); // '10 + 20 + 30'
```

### [.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```javascript
[10, 20, 30].includes(20); // true
[10, 20, 30].includes(25); // false
```

### [.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

```javascript
[10, 20, 30].some(number => number === 20); // true
[10, 20, 30].some(number => number === 25); // false
```

### [.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

```javascript
[10, 20, 30].every(number => number === 20); // false
[10, 20, 30].every(number => number > 5); // true
```

### [.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

```javascript
[10, 20, 30].find(number => number > 25); // 30
```

### [.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

```javascript
[10, 20, 30].findIndex(number => number > 25); // 2
```

### [.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

```javascript
[10, 20, 30].indexOf(20); // 1
[10, 20, 30].indexOf(25); // -1
```

### [.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```javascript
[10, 20, 30].filter(number => number > 15); // [20, 30]
```

### [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```javascript
[10, 20, 30].map(number => number + 100); // [110, 120, 130]
```

### [.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```javascript
[10, 20, 30, 40, 50].splice(1, 2, 'húsz', 'harminc'); // [10, 'húsz', 'harminc', 40, 50]
```

### [.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```javascript
[35, 27, 1, 83, 42].sort((a, b) => a - b); // [1, 27, 35, 42, 83]
```

### [.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

```javascript
[10, 20, 30].reduce((sum, number) => sum + number); // 60
```
