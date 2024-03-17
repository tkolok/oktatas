# JavaScript 1. fogás

A [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) egy általános programozási nyelv. Az általános prpogramozási nyelveket általános
problémák megoldására használjuk (micsoda fordulat), például egyszerűbb és bonyolultabb számítások elvégzésére, adatok szűrésére, rendezésére.  
Két ok miatt választottam ezt a nyelvet a programozás bemutatásához. Először is, mert egy böngészőn és egy egyszerű szövegszerkesztőn kívül nincs szükség
komplex alkalmazások letöltésére, ezek pedig szinte minden számítógépen elérhetőek. Másodszor pedig ebben dolgozom már évek óta.

## A böngésző [fejlesztői környezetének](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) megnyitása

Ahhoz, hogy egy kódot futtatni tudjunk, szükség van egy úgynevezett fejlesztői környezetre. Ezt az alábbi módon érhetjük el:
1. Kattintsunk az egér jobb gombjával a weboldal bármely elemére.
2. Válasszuk a Vizsgálat/Inspect lehetőséget.
3. Válasszuk a Konzol/Console fület.

## [Comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments) (kommentek, megjegyzések)

A kommentek nem befolyásolják a kód futását, ezek célja, hogy megjegyzéseket, dokumentációt fűzzünk a kódhoz. Például mit csinál a kód, ki készítette.  
Létezik egysoros és többsoros komment, és a nevük sugallja is, hogy mire használjuk őket. Az egysoros komment jelölése `//`. A többsoros komment jelölése
`/* ... */`.

```javascript
// Ez egy komment.

/*
    Ez
    is
    egy
    komment.
 */
```

## [Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#literals) (Literálok)

A literálok értékeket jelentenek. Ezek rögzített értékek, amelyeket szó szerint megadunk a kódban. Nézzünk pár példát. 

```javascript
5;                 // egész szám
-12.5;             // negatív tört szám
.08;               // tört szám
'alma'             // szöveg
"KÖRTE ÉS CITROM"; // szöveg
true;              // egy beépített kulcsszó, amelyet később tárgyalunk
false;             // egy beépített kulcsszó, amelyet később tárgyalunk
undefined;         // egy beépített kulcsszó, amelyet később tárgyalunk
```

## Data types (Típusok)

Megkülönböztetjük az adatokat az alapján, hogy milyen adatról van szó. Két családba sorolhatjuk a típusokat:
[primitve](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) (egyszerű) és reference (összetett, referencia alapú). Először csak az egyszerű
típusokon rágjuk át magunkat.

### [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (szám)

Ezek ugyanolyan számok, mint a való életben is használt egész, vagy tört számok.  
Például: `5`, `12.5`, `-87`.

### [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (karakterlánc)

Ezekre úgy gondoljunk, mint egyszerű szöveges adatra. Ezeket `'` vagy `"` jelek közé kell írni.  
Például: `'alma'`, `"Körte és citrom"`, `"123"`.

### [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

A boolean nem más, mint igazságértéket tartalmazó adat. Egy ilyen adat csak 2 értéket vehet fel: `true` (igaz) vagy `false` (hamis).

### [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

Az `undefined` kicsit kilóg a többi adat közül, mert ezzel jelöljük azt, ha nincs adat.

## [Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables) (Változók)

A változók adatok tárolására szolgáló nevesített konténerek. Egy változó a számítógép memóriájában lefoglal egy memóriacímet, ahol ezután adatokat
tárolhatunk.  
Képzeljük el, hogy a konyhánkban rengeteg fűszeres doboz van és mindegyik címkéjén más áll (só, bors, stb.). Bármelyikbe tehetünk bármilyen fűszert (adatot), a
címke csak javaslat. Csak rajtunk áll, hogy melyikbe mit teszünk, és mikor használjuk fel a tartalmát. Viszont sosem a doboz tartalma alapján fogunk hivatkozni
egy fűszeres dobozra, hanem a címkéje (neve) alapján. Például: "Erzsike! Ideadnád a kakaós dobozt, tudod, amelyikben a babérlevelek vannak?". Nagyjából így
működnek a változók is.  
A gyakorlatban a következő módon [deklarálunk](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) (azaz hozunk létre)
egy változót:

```javascript
let a;
```

A [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) kulcsszóval jeleztük, hogy egy változót fogunk létrehozni. Ezután
megadtuk a változó nevét, ami jelen esetben `a`.  
Most adjunk értéket az `a` változónak:

```javascript
a = 5;
```

Az [`=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment) egy olyan utasítás, amellyel a bal oldalon lévő változó értékét
felülírjuk a jobb oldalon lévő értékkel. Ebben az esetben az `a` értéke legyen `5`. Így ha most lekérdeznénk, hogy milyen adat van az `a` változóban, akkor azt
kapnánk, hogy `5`.  
A változó létrehozást és értékadást össze is lehet vonni:

```javascript
let a = 5;
```

Így egy sorban létrehoztuk a változót és értéket is adtunk neki.

> Ameddig nem adunk értéket egy változónak, addig alapértelmezetten `undefined` lesz az értéke.

De hogyan lehet kiolvasni egy változó értékét? Egyszerűen csak a változó nevét meg kell adni.

```javascript
let b = a + a;
```

A fenti példában létrehoztunk egy `b` nevű változózt, aminek az értéke `a + a`. Tudjuk, hogy az `a` értéke `5`, így ez `5 + 5` műveletnek felel meg. Tehát a `b`
értéke `10` lesz.  
Ha már létrehoztunk egy változót, akkor bármikor bármire átírhatjuk annak az értékét.

```javascript
a = 5;               // 5
a = 'Ez egy string'; // 'Ez egy string'
```

A fentebbi példában az `a` értéke először egy szám, majd azt felülírjuk egy stringgel. Ennek semmi akadálya nincs JavaScriptben.

```javascript
a = 5;     // 5
a = 3 * a; // 15
```

Az 1. sorban értéket adtunk az `a` változónak. A 2. sorban először lekérdeztük az `a` értékét (`5`), majd azt beszoroztuk `3`-mal, és az így kapott értékkel
(`15`) felülírtuk az `a` jelenlegi értékét.

> A [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) és
> [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) kulcsszavakkal is hasonló módon hozhatunk létre változókat. Van
> eltérés a változók viselkedésében attól függően, hogy milyen módon hoztuk őket létre, de az nem része ennek a fogásnak. Az egyszerűség kedvéért a továbbiakban
> a `let`-es változatot fogom használni.

### Változó névadás

Konvenció szerint JavaScriptben a változók neveit [camel case](https://developer.mozilla.org/en-US/docs/Glossary/Camel_case) formátumban írjuk, azaz az első szó
minden betűjét kisbetűsen írjuk, míg a többi szó első betűjét nagybetűvel, a többit kicsivel, és egybeírjuk a szavakat. Például: `userName`, `isHidden`,
`veryLongVariableName`. Lehetőleg mindig olyan változó nevet adjunk, ami rövid és jól leírja, hogy az adott változóban mit tárolunk, és kerüljük az `a` és
hasonló neveket, ezzel is növelve a kód olvashatóságát.

![Változó név választás](/assets/variable-name.png)

## Reference types (összetett, referencia alapú típusok)

Miután megismerkedtünk a literálokkal, változókkal és az egyszerű típusokkal, harapjunk bele az összetett típusokba is.

### [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) (tömb)

A tömb egy olyan típus, ami sorrendben tárol adatokat, például, hogy milyen sorrendben szeretnénk felszolgálni a különböző fogásokat.  
Egy tömböt a `[]` jelekkel lehet létrehozni. Ekkor egy üres tömböt hozunk létre, aminek még egy eleme sincs.

```javascript
let a = [];
```

Ha szeretnénk adatokkal együtt létrehozni egy tömböt, akkor a `[]` jelek közt soroljuk fel a kívánt elemeket `,`-vel elválasztva.

```javascript
let a = ['tatár beefsteak', 'palócleves', 'pikáns halrudak párolt zöldségekkel', 'somlói galuska'];
let b = [1, 4, 9, 16, 25];
```

Ha szeretnénk megtudni, hogy hány elem van egy tömbben, akkor a
[`.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) lesz a segítségünkre.

```javascript
let a = [];
let b = [1, 2, 3];
let c = ['A', 'B', 'C', 'D', 'E'];

a.length; // 0
b.length; // 3
c.length; // 5
```

Ha a tömb egyik elemére vagyunk kíváncsiak, akkor azt az indexén keresztül érhetjük el. Ehhez meg kell adni a változó nevét, majd utána `[]` jelek közt az elem
indexét. Igen, létrehozni egy tömböt, és hivatkozni egy elemére ugyanúgy a `[]` jelekkel kell.  
Fontos megjegyezni, hogy a modern programozási nyelveknél az indexelés `0`-tól kezdődik, azaz ha a tömb 1. elemére vagyunk kíváncsiak, akkor a tömb 0. indexére
kell hivatkoznunk, a 2. elemnél az 1. indexre, a 3. elemnél a 2. elemre, és így tovább.

```javascript
let a = ['tatár beefsteak', 'palócleves', 'pikáns halrudak párolt zöldségekkel', 'somlói galuska'];
a[0]; // 'tatár beefsteak'
a[1]; // 'palócleves'
a[3]; // 'somlói galuska'
```

Ha szeretnénk egy új elemet hozzáadni a tömbünkhöz, akkor azt a
[`push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) function meghívásával érhetjük el.

```javascript
let a = [1, 2];
a.length; // 2

a.push(3);
a.length; // 3
```

> A `push` egy function, de a functionöket a [3. JavaScript](/javascript/03) fogásban tárgyaljuk, most csak fogadjuk el, hogy így kell hozzáadni egy új elemet a
> tömbhöz.

### [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) (objektum)

```javascript
let a = {
    address: {
        city: 'Debrecen',
        street: 'Piac utca'
    },
    firstname: 'József',
    lastname: 'Példa'
};
`${a.firstname} ${a.lastname}`;
a.address.city;
a.age = 99;
a.age;
```

## Operators (Operátorok)

- Arithmetic operators:
    - `a + b`: Összeadja a két operandus értéket.
      ```javascript
      let a = 5 + 2; // 7
      ```
    - `a - b`: Kivonja a jobb operandus értékét a bal oldali operandusból.
      ```javascript
      let a = 5 - 2; // 3
      ```
    - `a * b`: Összeszorozza a két operandus értékét.
      ```javascript
      let a = 5 * 2; // 10
      ```
    - `a / b`: A bal oldali operadnus értékét elosztja a jobb oldali operandus értékével.
      ```javascript
      let a = 5 / 2; // 2.5
      ```
    - `a % b`: Maradékos osztás.
      ```javascript
      let a = 5 % 2; // 1
      ```
    - `a++`: Eggyel növelő az operandus értékét.
      ```javascript
      let a = 5;
      a++; // 6
      ```
    - `a--`: Eggyel csökkenti az operandus értékét.
      ```javascript
      let a = 5;
      a--; // 4
      ```
- Assignment operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- Comparison operators: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- Logical operators:
    - `a && b`: Csak akkor igaz, ha mind a két operandus igaz.
      ```javascript
      true && true; // true
      true && false; // false
      false && true; // false
      false && false; // false
      ```
    - `a || b`: Csak akkor hamis, ha mind a két operandus hamis.
      ```javascript
      true || true; // true
      true || false; // true
      false || true; // true
      false || false; // false
      ```
    - `!a`: Megfordítja az operandus értékét.
      ```javascript
      !true; // false
      !false; // true
      ```

## Kiíratás

Amennyiben szeretnénk a képernyőre kiíratni adatokat úgy a [`console.log`](https://developer.mozilla.org/en-US/docs/Web/API/console/log_static) function
segítségével tehetjük meg ezt. `,`-vel elválasztva soroljuk fel, hogy mire vagyunk kíváncsiak.

```javascript
console.log('Szöveg', 150, true);
```

> Ahogy látható minden sor végén található egy `;`. Általában ezzel jelezzük, ha egy utasítás véget ért. Más nyelvekben ez kötelező, de JavaScriptben nem, én
> mégis ajánlom, hogy minden utasítást zárjunk le.

## Házi feladat

1. Írj kód részletet, amelyben létrehozol 2 szám változót, majd ezek összegét letárolod egy új változóban!
2. Írj kód részletet, amelyben létrehozol 2 akármilyen változót, majd azok értékeit megcseréled!
3. Írj kód részletet, amelyben létrehozol egy szám változót, majd egy újabb változóban letárolod, hogy a szám osztható-e 2-vel és 5-tel!
4. Írj kód részletet, amelyben létrehozol egy 5 számot tartalmazó tömböt, majd egy új változóban letárolod ezek összegét!
5. Írj kód részletet, amelyben létrehozol 3 akármilyen változót, majd ezek értékét egy object típusú változóba lemented! Ezután irasd ki az objektum összes
   attribútumát!