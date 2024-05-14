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

## [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

A `switch` utasítás nagyon hasonló az `if` utasításhoz. Nagyjából úgy lehet elképzelni, mint sok egymásba ágyazott `if...else`. Célja, hogy a lehetséges
kódblokkok közül csak a feltételnek megfelelő fusson le. A `switch` 3 részből áll:

- kifejezés: Ez lesz az az érték, amely alapján eldöntjük, hogy mely utasításokat szeretnénk végrehajtani.
- `case` ág: Ha a `case` ághoz tartozó érték megegyezik a kifejezés értékével, akkor az adott `case` ághoz rendelt utasítások fognak megfutni. Egyszerre több
  `case` ága is lehet egy `switch`-nek.
- `default` ág: Ha egyik `case` ág értékével sem egyezett meg a kifejezés értéke, akkor a `default` ághoz rendelt utasítások fognak megfutni. Legfeljebb egy
  `default` ága lehet egy `switch`-nek.

### Szintaxis

```
switch (<kifejezés>) {
    case <érték 1>:
        // utasítások
        break;
    case <érték 2>:
        // utasítások
        break;
    ...
    default:
        // utasítások
}
```

Képzeljük el, hogy a családnak van egy hagyományőrző étele, amit minden ünnep alkalmával elkészítenek, de az adott ünneptől függően kicsit felturbózzák. Ha
szülinap van, akkor tejszínhabot tesznek rá, ha bolondok napja, akkor jalapeño paprikával bolondítják meg, ha az újévet köszöntik, akkor pezsgővel öntik nyakon
(elég fura ízlése van a családnak).

### Példa

```javascript
let ingredients = ['hús', 'zöldségek'];

switch (holiday) {
    case 'BIRTHDAY':
        ingredients.push('tejszínhab');
        break;
    case 'APRIL_FOOLS_DAY':
        ingredients.push('jalapeño');
        break;
    case 'NEW_YEARS_EVE':
        ingredients.push('pezsgő');
        break;
    default:
        ingredients.push('só');
}

console.log('A családi étel mai hozzávalói:', ingredients);
```

Lássuk, hogy mi történik az egyes sorokban. Először létrehozunk egy `ingredients` nevű tömböt, ami az étel elkészítéséhez szükséges hozzávalókat tartalmazza.
Ezt a tömböt fogjuk bővíteni az adott ünnepnaptól függően.  
A `switch`-ben megvizsgáljuk, hogy mi a `holiday` változó értéke. Ha az értéke `'BIRTHDAY'`, akkor az `ingredients` tömbbe felvesszük még a `'tejszínhab'`-ot
is, mint hozzávaló, majd a `break` utasítás (lentebb ezt is tárgyalni fogjuk) segítségével kilépünk a `switch` utasítás blokkból.  
Ha a `holiday` értéke nem `'BIRTHDAY'`, akkor tovább folytatjuk a vizsgálatot, azaz megnézzük, hogy a `holiday` értéke `'APRIL_FOOLS_DAY'`-e. Ha az, akkor az
`'jalapeño'` kerül a hozzávalók listájába, majd kilépünk a `switch`-ből.  
Ha még ez a feltétel sem teljesült volna, akkor megnézzük, hogy a `holiday` értéke vajon `'NEW_YEARS_EVE'`-e. Ha igen, akkor ezúttal a `'pezsgő'` kerül a
listába.  
Ha a `holiday` értéke nem egyezik meg egyik értékkel sem, ami a `case` ágaknál van megadva (tehát a `holiday` értéke például `'GRADUATION_CEREMONY'`,
`'MONDAY'`, `32`, `true`, vagy `null`), akkor a `default` ágban lévő utasítások fognak megfutni, vagyis jelen esetben a `'só'`-t hozzáadjuk az `ingredients`
tömbhöz. Ahogy látható a `default` ág végén nincs `break`. Ez azért van, mert már amúgy is a `switch` blokk alján vagyunk, így felesleges külön kilépni a
blokkból, hiszen enélkül is kilépünk.  
Végül pedig a képernyőre írjuk, hogy milyen hozzávalók kellenek az étel elkészítéséhez.

## [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

A `for` ciklus célja, hogy egy vagy több utasítást többször is megfuttassunk. 4 részre oszthatjuk a `for` ciklust:

- kezdő érték: Itt olyan utasítások szerepelhetnek, amiket a `for` első megfutása előtt szeretnénk megvalósítani. Ebben a részben általában olyan változókat
  szoktunk létrehozni, amelyek csak a `for` cikluson belül lesznek elérhetőek.
- feltétel: A `for` ciklus addig fogja megismételni a törzsében lévő utasításokat, amíg a feltétel értéke `true`. Amint `false` a kifejezés értéke, a `for`
  ciklus véget ér.
- növelés: Ide olyan utasításokat helyezhetünk el, amik mindig megfutnak egy adott ciklus végét követően.
- törzs: azon utasítások, amelyeket újra és újra végre szeretnénk hajtani.

### Szintaxis

```
for (<kezdő érték>; <feltétel>; <növelés>) {
    // utasítások (törzs)
}
```

Erre egy jó példa, amikor olyan ételt főzünk, amihez időnként (mondjuk 5 percenként) hozzá kell adni egy alapanyagot.

### Példa

```javascript
let ingredients = ['karalábé', 'hagyma', 'borsó'];

for (let index = 0; index < ingredients.length; index++) {
    console.log('Hozzáadjuk a(z) ' + (index + 1) + '. hozzávalót: ' + ingredients[index] + '.');
    console.log('5 percig hagyjuk főni.');
}

console.log('Elkészült az étel. Jó étvágyat!');
```

Megint nézzük meg soronként, hogy mi történik. Egy `ingredients` nevű tömbben letároljuk, hogy milyen hozzávalókat szeretnénk majd hozzáadni. Jelen esetben 3
alapanyagról van szó (`'karalábé'`, `'hagyma'`, `'borsó'`), így 3 elemű lesz a tömb.  
A `for` ciklus inicializáló blokkjában a `let index = 0` kódrészletet találjuk. Ezzel létrehoztunk egy `index` nevű változót, ami csak a `for` cikluson belül
fog létezni. A kezdeti értéke `0` (mert a tömbök indexelése 0-tól kezdődik).  
A feltételnél a `index < ingredients.length` szerepel. Tehát a `for` ciklus addig ismétli az utasításokat, amíg az `index` értéke kisebb, mint az
`ingredients.length`, vagyis amíg kisebb `3`-nál.  
Végül még egy `index++` utasítást láthatunk, amely minden ciklus végén 1-gyel növeli az `index` értékét.  
Belépünk a ciklusba. Ekkor még az `index` értéke `0`. A kiíratásnál behelyetessítünk mindent. Az `(index + 1)` értéke `1`, míg az `ingredients[index]` a 0.
indexű tömb elemre fog mutatni, azaz a `'karalábé'`-ra. Így eredményül a konzolra azt írjuk ki, hogy `'Hozzáadjuk a(z) 1. hozzávalót: karalábé.'`. Ezután
kiíratjuk a következő sort is: `'5 percig hagyjuk főni.'`. Ezzel véget is ért az adott ciklus. Viszont minden ciklus vége után megfut a `for` növelés része,
jelen esetben az `index++`. Tehát 1-gyel növeltük az `index` értékét, ami most már `1`. Ezután újból kezdődik a ciklus.  
Mielőtt az új ciklus futásba belekezdenénk megvizsgáljuk a kifejezésünket. `index < ingredients.length`, azaz `1 < 3`? `true`, ezért kezdődhet az új ciklus.
Ugyanaz fog történni, mint az előző futásnál, annyi különbséggel, hogy az `index` értéke most már `1`. Így az `(index + 1)` értéke `2` lesz, míg az
`ingredients[index]` értéke `'hagyma'`. Kiíratjuk a két `console.log` tartalmát, majd ismételten véget ért a ciklus. Ismételten megfut az `index++`, így most már
`2` az `index` értéke.  
A 3. ciklus megfutása előtt ismét kiértékeljük a `index < ingredients.length` kifejezést. `2 < 3`? `true`, ezért indulhat a 3. ciklus. Ahogy a korábbi ciklus
esetén most is behelyettesítjük az `index` értékét mindenhova, így kapjuk az `(index + 1)` esetén a `3`-at, és `ingredients[index]` esetén a `'borsó'`-t. Ciklus
végén ismét növeljük az `index` értékét, így már `3` az értéke.  
A 4. futásnál ismét megvizsgáljuk, hogy `index < ingredients.length`. `3 < 3`? Hohó, 3 nem kisebb 3-nál, így a kifejezés értéke `false`. Tehát nem indul újabb
ciklus, véget ért a `for`.  
Ezt követően még kiírjuk a `for` utáni `console.log` tartalmát.  
A konzolban a következő sorok fognak megjelenni a fentebbi kód lefutása után:

```text
Hozzáadjuk a(z) 1. hozzávalót: karalábé.
5 percig hagyjuk főni.
Hozzáadjuk a(z) 2. hozzávalót: hagyma.
5 percig hagyjuk főni.
Hozzáadjuk a(z) 3. hozzávalót: borsó.
5 percig hagyjuk főni.
Elkészült az étel. Jó étvágyat!
```

## [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) -

### Szintaxis

```
while (<feltételek>) {
    // utasítások
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
    // utasítások
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