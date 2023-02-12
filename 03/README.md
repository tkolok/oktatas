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

```javascript
'ALMA'.indexOf('M'); // 2
```

### [.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

```javascript
'ALMA'.replace('AL', 'KAR'); // KARMA
```

### [.substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

```javascript
'ALMA'.substring(1, 3); // LM
```

### [.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

```javascript
'ALMA;KORTE;SZILVA'.split(';'); // ['ALMA', 'KORTE', 'SZILVA']
```

## [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) functions
