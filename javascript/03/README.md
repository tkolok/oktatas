# JavaScript 3. fogás

## [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) (függvények)

A functionök nem mások, mint újrafelhasználható paraméterezhető utasítás blokkok, amelyek a paraméterektől függően csinálnak valamit.  
A functionökre gondoljunk úgy, mintha konyhai műveletek lennének, például főzés. Általában hogyan hajtjuk végre a főzést? Fogunk egy edényt, vizet engedünk
bele, felforraljuk a vizet, az edénybe tesszük a főzésre váró ételt, néha megkavarjuk. De ez nem mindig van így. Az ételtől függ, hogy mennyi ideig főzzük, hogy
kell-e kavargatni, hogy vizet forralunk-e, és így tovább. Ezek a változó dolgok lesznek a function (jelen esetben a főzés) paraméterei. Az eredménye viszont
mindig egy megfőzött étel lesz.

### Function létrehozás

Ahhoz, hogy egy functiont újra és újra fel tudjunk használni, először is létre kell hozni.  
Ezt JavaScriptben az alábbi 2 módon tehetjük meg:

```
function <function neve>(<paraméter lista>) {
    <function törzse> // utasítások
}
```

vagy

```
let <function neve> = (<paraméter lista>) => { // ebben az esetben a function egy változó
    <function törzse> // utasítások
}
```

#### Példák

```javascript
function sum(a, b) {
    return a + b;
}

let multiply1 = (a, b) => {
    return a * b;
};

let multiply2 = (a, b) => a * b;
```

A fentebbi példában létrehoztunk 3 functiont. Mindegyik egy két paraméteres function. A `sum` function össze fogja adni a paraméterként kapott számokat. A
`multiply1` és a `multiply2` functionök pedig össze fogják szorozni a paramétereket. A `multiply2` function egy rövidített változata a `multiply1` function,
működésük teljes mértékben megegyezik.

### [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

A `return` kulcsszó után a function futása véget ér, és a function visszatér a `return` után álló értékkel. JavaScriptben ha ez az érték nincs definiálva, vagy
a function nem fut bele `return` utasításba, akkor `undefined` értékkel tér vissza a function.

### Paraméterek

Egy functionnek akárhány paramétere lehet, melyeket vesszővel választunk el. Ezeket úgy kell elképzelni, mint egyszerű blokk szintű változókat, amelyek csak a
function törzsén belül léteznek. JavaScriptben lehetőség van
[default értéket](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) megadni egy paraméternek. Ha a function
meghívásakor a paraméter értéke nincs megadva, vagy `undefined`, akkor a default értéket fogja a paraméter tartalmazni. Ezen kívül lehetőség van
[rest paraméter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) megadására is, mely célja, hogy nem meghatározott
számú paramétert is át tudjunk adni egy functionnek. A rest paraméter típusa tömb.  
A paraméter típusától függően kétféle módon adhatjuk át őket a functionnek. Érték szerint az egyszerű típusokat (string, boolean, number, stb.) és referencia
szerint az összetett típusokat (object, array). Ezeket úgy kell elképzelni, mintha egy fájlt szeretnénk megosztani. Az érték szerinti átadás esetében ez olyan,
mintha a fájlt átküldenénk a másik fél számára, így mind a kettőnk számítógépén ott lesz a fájl. Ha az egyikünk módosítja a saját példányát, az nem lesz
kihatással a másik példányára. A referencia szerinti átadás esetében úgy kell elképzelni ezt, minta a felhőben osztanánk meg egymással a fájlt. Egyetlen egy
példány létezik a fájlból, és ha az egyikünk módosítja, akkor a másik is látni fogja a módosításokat. Így, ha egy paraméterként kapott stringet módosítunk a
functionön belül, akkor az nem lesz kihatással az eredeti stringre, de ha egy objektum paramétert módosítunk, akkor az eredeti objektum is módosulni fog (hiszen
a két objektum ugyanaz). (Sajnos erre nem találtam konyhai példát. :disappointed: )

### Function meghívása

A function meghívásakor lefuttatjuk a function törzsében található kódrészletet azokkal a paraméterekkel, amiket átadtunk a function meghívásakor.

#### Szintaxis

```
<function neve>(<paraméter lista>)
```

#### Példák

```javascript
sum1(1, 2);
sum2(3, sum3(4, 5));
```

### Functionök működés közben

Vegyük az alábbi kódrészletet és elmezzük ki, hogy mi történik az egyes sorokban.

```javascript
function multiply(a, b = 1) { // b változó default értéke 1
    return a * b;
}

mutliply(3, 5); // 15
mutliply(5); // 5
mutliply(5, mutliply(4, 3)); // 60

function list(...params) { // rest paraméter
    for (let i = 0; i < params.length; i++) {
        console.log(params[i]);
    }
}

list(5, 'alma', null, true, {name: 'Jóska'});
```

Először is definiáltuk a `mutliply` functiont, amely 2 paramétert vár `a`-t és `b`-t. Ha a `b` nincs megadva, akkor annak az értéke `1` lesz. Maga a `mutliply`
function a két szám szorzatával tér vissza.  
Ezután meghívtuk a `mutliply` functiont a `3` és `5` értékekkel. Ebben az esetben a `mutliply` törzsén belül az `a` értéke `3`, míg a `b`-é `5` lesz. A function
törzsén belül összeszorozzuk a 2 számot, majd visszatérünk ennek az értékével, azaz `15`-tel.  
Az ezt követő sorban a `mutliply` functiont csak egy paraméterrel hívjuk meg, `5`-tel. Mivel a `b` értéke nincs megadva, így az automatikusan felveszi a default
értékét, azaz az `1`-t. Így az eredmény `5 * 1`, azaz (komoly számolások után) `5` lesz.  
Ezután kétszer is meghívjuk a `mutliply` functiont. Először a belső function hívás fog megfutni, vagyis a `mutliply(4, 3)`, aminek az értéke `12` lesz. Ez az
érték kerül majd a külső function hívás `b` paraméterébe, tehát a külső function hívás a behelyettesítés után így néz ki: `mutliply(5, 12)`. Így a végeredmény
`60`.  
Végül létrehozunk egy `list` nevű functiont, amely rest paramétert tartalmaz. Mivel a rest paraméter egy tömb, ezért a function törzsében a összes elemnén
végighaladunk, majd kiíratjuk azokat.

## [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) functions

Most pedig lássunk pár beépített functiont. Először kezdjük a stringekkel.

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

Megadja, hogy hányadik indexen helyezkedik el a `searchString`. Ha a `searchString` nem található meg a strinben, akkor `-1` lesz a visszatérési érték.

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

Végezetül nézzünk meg pár gyakran használt tömbökhöz tartozó beépített functiont.

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

Visszatér az első olyan elemmel, amelyre a `predicate` function `true` értékkel tér vissza. Ha nincs ilyen, akkor `undefined` értékkel tér vissza.

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

## Házi feladat

1. Írj functiont, amely 3 paramétert vár! Az első paraméter lehet `'+'`, `'-'`, `'*'`, `'/'`. Az első paramétertől függően összeadja, kivonja, szorozza, osztja
   a maradék 2 paramétert.
2. Írj functiont, amely paraméterként vár egy számot, és ennyiszer írja ki a `'*'` karaktert!
3. Írj functiont, amely paraméterként vár egy számot és egy stringet! Írjon ki annyi sort, amennyi a szám, és minden sorban annyiszor szerepeljen a string,
   amennyi a szám!
4. Írj functiont, amely paraméterként nem meghatározott számú számot vár, majd összeadja őket!
5. Írj functiont, amely paraméterként nem meghatározott számú számot vár, majd felváltva összeadja, kivonja őket! (p1 + p2 - p3 + p4 - p5 + ...)
6. Írj functiont, amely paraméterként 3 stringet vár, majd visszatér egy objecttel, amelybe ezeket a paramétereket tároljuk, mint firstName, lastName, address!
7. Írj functiont, amely paraméterként vár egy számot, és nem meghatározott számú további paramétereket, majd kiírja ezek közül a szám indexű paramétert!