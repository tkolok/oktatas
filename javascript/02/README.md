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

### Példa

Képzeljük el, hogy a családnak van egy hagyományőrző étele, amit minden ünnep alkalmával elkészítenek, de az adott ünneptől függően kicsit felturbózzák. Ha
szülinap van, akkor tejszínhabot tesznek rá, ha bolondok napja, akkor jalapeño paprikával bolondítják meg, ha az újévet köszöntik, akkor pezsgővel öntik nyakon
(elég fura ízlése van a családnak).

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

### Példa

Erre egy jó példa, amikor olyan ételt főzünk, amihez időnként (mondjuk 5 percenként) hozzá kell adni egy alapanyagot.

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

## [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)

A `break` arra szolgál, hogy egy adott ciklust (`for`, `while`, `do...while`) véglegesen lezárjunk. Egy cikluson belül kell elhelyezni, és amikor a kód eléri a
`break` utasítást, akkor kilép a ciklusból.

### Szintaxis

```
break;
```

Igen, ennyire egyszerű a szintaxisa.

### Példa

Ez hasonló, amikor valaki a mikróban szeretne melegíteni valamit 5 percig, de a mikrót indokolatlanul sok időre állítja be. Ekkor vár 5 percet, majd saját
kezűleg megállítja a mikrót.

```javascript
let initialMinutes = 42;

for (let elapsedMinutes = 0; elapsedMinutes < initialMinutes; elapsedMinutes++) {
    console.log('Az étel már ' + elapsedMinutes + ' perce melegszik.');

    if (elapsedMinutes === 5) {
        console.log('Kikapcsolom a mikrót.');
        break;
    }
}

console.log('A mikró leállt.');
```

Ismét nézzük meg soronként, hogy mi történik. Létrehoztunk 2 változót. Az `initialMinutes` jelenti, hogy hány percre állítottuk a mikrót, az `elapsedMinutes`
pedig, hogy hány perc telt el a mikrózás kezdete óta. Létrehoztunk egy `for` ciklust, amely addig megy míg el nem érjük a beállított időt.  
Belépünk a ciklusba, majd rögtön kiírjuk, hogy `'Az étel már 0 perce melegszik.'`. A következő lépésben megvizsgáljuk, hogy az `elapsedMinutes` értéke 5-e.
Jelenleg `0` az értéke, így nem lépünk be az `if`-be. Több utasítás nincs, kezdődhet elölről.  
Az `elapsedMinutes` értéke most már `1`, így a `'Az étel már 1 perce melegszik.'` szöveg kerül a konzolra. Ismét megvizsgáljuk, hogy az `elapsedMinutes` értéke
5-e, de most sem annyi, így most is kihagyjuk az `if`-et.  
Ez a folyamat folytatódik, míg az `elapsedMinutes` érétke `5` nem lesz. Ekkor végre belépünk az `if` törzsébe. Először kiírjuk a `'Kikapcsolom a mikrót.'`
szöveget. Ezután a `break` utasításnak köszönhetően kilépünk a teljes `for` ciklusból, nem fut meg többször a ciklus magja. Végül még kiírjuk, hogy `'A mikró
leállt.'`. Így a konzolon végül az alábbi sorokat láthatjuk:

```text
Az étel már 0 perce melegszik.
Az étel már 1 perce melegszik.
Az étel már 2 perce melegszik.
Az étel már 3 perce melegszik.
Az étel már 4 perce melegszik.
Az étel már 5 perce melegszik.
Kikapcsolom a mikrót.
A mikró leállt.
```

Vajon mi történt volna, ha nem szerepel a kódban a `break` utasítást tartalmazó sor? Akkor ha már 5 perce melegítjük az ételt, akkor a konzolra kiírjuk, hogy
`'Kikapcsolom a mikrót.'`, de a `for` ciklus futása valóban nem szakad meg, így végigvártuk volna, míg letelik az idő (és szénné ég az ételünk). Így a konzolban
az alábbi sorokat látnánk:

```text
Az étel már 0 perce melegszik.
Az étel már 1 perce melegszik.
...
Az étel már 5 perce melegszik.
Kikapcsolom a mikrót.
Az étel már 6 perce melegszik.
Az étel már 7 perce melegszik.
...
Az étel már 41 perce melegszik.
A mikró leállt.
```

## [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)

A `continue`, akárcsak a `break`, egy ciklus utasításon belül helyezhető el. Amikor a kód futása eléri a `continue` utasítást, akkor az adott ciklus véget ér, a
`continue` után következő utasítások már nem futnak le, helyette elindul a következő ciklus.

### Szintaxis

```javascript
continue;
```

Igen, a `break`-hez hasonlóan, ennek is ennyire egyszerű a szintaxisa.

### Példa

Képzeljük el, hogy átjön egyik barátunk beszélgetni, és szeretnénk meglepni valamilyen étellel. Még nem tudjuk, hogy mit szeretnénk elkészíteni, de a barátunk
vegetáriánus, ezért a hozzávalókból ki szeretnénk válogatni azokat, amiket felhasználhatunk a sütés-főzés közben.

```javascript
let ingredients = [
    {name: 'paprika', vegetarian: true},
    {name: 'brokkoli', vegetarian: true},
    {name: 'szalámi', vegetarian: false},
    {name: 'májkrém', vegetarian: false},
    {name: 'rizs', vegetarian: true}
];

for (let index = 0; index < ingredients.length; index++) {
    if (!ingredients[index].vegetarian) {
        continue;
    }
    console.log(ingredients[index].name);
}
```

Ismételten soronként fogjuk elemezni a kódot. Először is létrehozunk egy tömböt, amiben tároljuk az összes alapanyagot. Egy alapanyagnak tudjuk a nevét (`name`) 
és azt, hogy vegetáriánusok ehetik-e (`vegetarian`).  
A `for` ciklus segítségével végigmegyünk az összes elemen. Először a 0. indexű elemet vizsgáljuk meg. Mivel a paprika zöldség, azaz a `vegetarian` értéke
`true`, ezért nem lépünk bele az `if` ágba. Ezt követően kiíratjuk a képernyőre, hogy `paprika`.  
A következő elemünk az 1. indexű elem, ami nem más, mint a brokkoli. A brokkolit is fogyaszthatja a vegetáriánus barátunk, így ismételten nem fut meg az `if`
tartalma. Viszont a képernyőn meg fog jelenni a `brokkoli`.  
A következő vizsgált elem a szalámi. Mivel a szalámi nem vegetáriánus étel, ezért belépünk az `if`-be. Itt elérjük a `continue` utasítást, aminek köszönhetően a
jelenlegi ciklus véget ér, nem fut meg több utasítás. Azaz, az összes utasítás, ami a `continue` után következik már nem fut le, tehát jelen esetben nem íratunk
már ki semmit a képernyőre.  
Most már az `index` értéke `3`, így a következő vizsgált elem a májkrém. A májkrém szintén hústermék, így ebben az esetben is belépünk az `if`-be. Ismételten
elérjük a `continue` utasítást, ami miatt a ciklus véget ér, nem írunk ki semmit.  
Elértünk az utolsó tételhez, a rizshez. A rizs vegetáriánus étel, így nem fut meg az `if`-en belül található utasítás. Helyette kiíratjuk a képernyőre, hogy
`rizs`.  
Végigértünk a hozzávalók listáján, most már ellenőrizzük le, hogy mit látunk a képernyőn:

```text
paprika
brokkoli
rizs
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