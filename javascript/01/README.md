# JavaScript 1. fogás

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

> Továbbá létezik a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) is, ami valamivel több funkcióval
> rendelkezik, mint egy egyszerű string. Jelölése a `` ` ``.

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
`veryLongVariableName`. Lehetőleg mindig olyan változó nevet adjunk, ami elsősorban jól leírja, hogy az adott változóban mit tárolunk, másodsorban pedig ha
lehet, akkor legyen rövid. Mindenképpen kerüljük az `a` és hasonló neveket, amelyek semmilyen információt nem árulnak el a változó tartalmáról, ezzel is növelve
a kód olvashatóságát, értelmezhetőségét.  
Fontos még megjegyezni, hogy a programozás "nyelve" az angol, így mindig angol nyelvű változókat adjunk. Mi se örülnénk annak, ha például indiai váltózó
nevekkel találkoznánk, és úgy kellene kitalálni, hogy mit csinál a kód.

> A rövidebb példáimban sokszor használok `a` és hasonló változó neveket. Ezek csak a könnyebb átláthatóságot szolgálják, az ilyen változó nevek továbbra is
> __KERÜLENDŐK__. 

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

Az objektumok olyan adatszerkezetek, amelyek a logikailag összetartozó adatokat egységbe zárják. Például egy ételnek van neve, receptje, elkészítési ideje,
hozzávalói, stb., de ilyen példa lehet még egy lakcím is, amihez tartozik irányítószám, település, utca, házszám. Lényegében logikailag összetartozó egyszerű
típusú adatokat tartalmaz egy objektum. Létrehozni a `{}` jelöléssel lehet.

```javascript
let a = {};
```

Ha szeretnénk adatot tárolni egy objektumban, akkor egy kulcs-érték párt kell felvennünk az alábbi formában: `<kulcs>: <érték>`. A kulcs egy olyan egyedi
[property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#properties) (azonosító) lesz, amivel az objektumon belül tudunk hivatkozni
egy értékre. Ha több ilyen kulcs-érték párt szeretnénk felvenni, akkor (a tömbhöz hasonlóan) `,`-vel kell elválasztani őket.

```javascript
let pancake = {
    cookingTime: 20,
    ingredients: ['liszt', 'olaj', 'só', 'tej', 'tojás'],
    name: 'palacsinta'
};
```

Szerintem a fentebbi kód részlet magáért beszél. Létrehoztunk egy `pancake` nevű objektumot, aminek a főzési ideje (`cookingTime`) 20 perc, a hozzávalói
(`ingredients`) liszt, olaj, só, tej, tojás, és a neve (`name`) palacsinta. Ahogy látható az `ingredients` egy tömb. Tehát egy objektum egy értéke akár egy tömb
is lehet, de akár egy másik objektum is. Ez fordítva is igaz, a tömb elemei is lehetnek objektumok, de akár tömbök is.

```javascript
let a = {
    parentName: 'parent',
    parentArray: [5, 10, 15],
    parentString: 'foo',
    childObject: {
        childName: 'child',
        childArray: [3, 6, 9, 12],
        childString: 'bar'
    }
};
```

Ahhoz, hogy ki tudjuk olvasni egy objektum egy értékét, úgy az objektum neve után kell tennünk egy `.`-t, majd a kiolvasni kívánt kulcs nevét.

```javascript
a.parentName;   // 'parent'
a.parentString; // 'foo';
```

Ha egy objektumon belüli objektum egy értékét szeretnénk kiolvasni, akkor csak össze kell fűznünk a logikát.

```javascript
a.childObject.childName;     // 'child'
a.childObject.childString;   // 'bar'
a.childObject.childArray[2]; // 9
```

Ha már létező objektumhoz szeretnénk új kulcs-érték párt hozzáadni, vagy egy korábbi kulcshoz új értéket rendelni, akkor elég a kulcs megnevezése után egy `=`
jelet tennünk.

```javascript
let a = {
    foo: 12
};

a.bar = 34;
a.foo = 57;

a.bar; // 34
a.foo; // 57
```

## Operators (Operátorok)

Az operátorok megértése egyszerű, mint a tojásrántotta, így mindenféle komolyabb bevezető nélkül lássuk a leggyakrabban használt operátorokat.

### [Increment and decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#increment_and_decrement) (Növelés és csökkentés)

- [`++`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment): Eggyel növeli a változó értékét.
  ```javascript
  let a = 5;
  a++; // 6
  ```
- [`--`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement): Eggyel csökkenti a változó értékét.
  ```javascript
  let a = 5;
  a--; // 4
  ```

### [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) (Aritmetikai operátorok)

Az aritmetikai operátorok ugyanúgy működnek, mint ahogy azt megtanultuk az álalános iskolában.

- [`+`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition): Összeadja a két értéket. Ha két [stringet](#string-karakterlánc)
  adunk össze, akkor összefűzi őket.
  ```javascript
  let a = 5 + 2;             // 7
  let b = 'kecske' + 'sajt'; // 'kecskesajt'
  ```
- [`-`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction): Kivonja a jobb oldali értékét a bal oldali értékből.
  ```javascript
  let a = 5 - 2; // 3
  ```
- [`*`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication): Összeszorozza a két értékét.
  ```javascript
  let a = 5 * 2; // 10
  ```
- [`/`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division): A bal oldali értékét elosztja a jobb oldali értékkel.
  ```javascript
  let a = 5 / 2; // 2.5
  ```
- [`%`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder): Visszaadja az osztás maradékát.
  ```javascript
  let a = 5 % 2; // 1
  ```

> Természetesen a zárójelek használata is ugyanúgy működik, mint ahogy azt az általános iskolában tanultuk. Például: `(4 + 3) * 2; // 14`.

### [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators) (Hozzárendelési operátorok)

A hozzárendelési operátorok bal oldalán mindig egy változó áll, amelynek az új értéke a jobb oldalon lévő érték lesz.

- [`=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment): A jobb oldali érték lesz a változó új értéke.
  ```javascript
  let a = 12;
  a = 5;
  a; // 5
  ```
- [`+=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment): A jobb oldalon lévő értékkel növeli a változó
  értékét.
  ```javascript
  let a = 12;
  a += 5;
  a; // 17
  ```
- [`-=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment): A jobb oldalon lévő értékkel csökkenti a változó
  értékét.
  ```javascript
  let a = 12;
  a -= 5;
  a; // 7
  ```
- [`*=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment): A jobb oldalon lévő értékkel szorozza a változó
  értékét.
  ```javascript
  let a = 12;
  a *= 5;
  a; // 60
  ```
- [`/=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment): A jobb oldalon lévő értékkel osztja a változó
  értékét.
  ```javascript
  let a = 12;
  a /= 4;
  a; // 3
  ```
- [`%=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder_assignment): A jobb oldalon lévő értékkel "maradékos osztja" a
  változó értékét.
  ```javascript
  let a = 12;
  a %= 5;
  a; // 2
  ```

### [Relational operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators) (Relációs operátorok)

A relációs operátorok egy [`boolean`](#boolean) értéket fognak visszaadni attól függően, hogy mi a vizsgálat eredménye.

- [`===`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality): Megvizsgálja, hogy a két oldalon lévő érték egyenlő-e.
  Ennek vizsgálatnak a megengedőbb változata a [`==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality), aminek a
  használatát érdemes kerülni.  
  ```javascript
  true === true;           // true
  true === false;          // false
  true === 1;              // false
  true === 'pogácsa';      // false
  false === false;         // true
  false === 1;             // false
  false === 'pogácsa';     // false
  12 === 12;               // true
  5 === 7;                 // false
  30 === '30';             // false
  'pogácsa' === 'pogácsa'; // true
  'POGÁCSA' === 'pogácsa'; // false
  undefined === undefined; // true
  undefined === false;     // false
  ```
- [`!==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality): Megvizsgálja, hogy a két érték egyenlőtlen-e. Igazából
  az `===` operátor értékének az ellentétét fogja visszaadni. Hasonlóan a `===` operátorhoz, ennek is van egy megengedőbb változata, a
  [`!=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality), amit szintén érdemes kerülni.
  ```javascript
  true !== true;           // false
  true !== false;          // true
  true !== 1;              // true
  true !== 'pogácsa';      // true
  false !== false;         // false
  false !== 1;             // true
  false !== 'pogácsa';     // true
  12 !== 12;               // false
  5 !== 7;                 // true
  30 !== '30';             // true
  'pogácsa' !== 'pogácsa'; // false
  'POGÁCSA' !== 'pogácsa'; // true
  undefined !== undefined; // false
  undefined !== false;     // true
  ```
- [`>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than): Megvizsgálja, hogy a bal oldali érték nagyobb-e, mint a jobb
  oldali érték.
  ```javascript
  10 > 5;  // true
  10 > 10; // false
  10 > 15; // false
  ```
- [`<`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than): Megvizsgálja, hogy a bal oldali érték kisebb-e, mint a jobb
  oldali érték.
  ```javascript
  10 < 5;  // false
  10 < 10; // false
  10 < 15; // true
  ```
- [`>=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal): Megvizsgálja, hogy a bal oldali érték nagyobb, vagy
  egyenlő, mint a jobb oldali érték.
  ```javascript
  10 >= 5;  // true
  10 >= 10; // true
  10 >= 15; // false
  ```
- [`<=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal): Megvizsgálja, hogy a bal oldali érték kisebb, vagy
  egyenlő, mint a jobb oldali érték.
  ```javascript
  10 <= 5;  // false
  10 <= 10; // true
  10 <= 15; // true
  ```

### [Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) (Logikai operátorok)

Az alábbi operátorok is mindig egy [boolean](#boolean) értékkel fognak visszatérni.

- [`&&`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND): Csak akkor igaz, ha mind a két érték igaz.
  ```javascript
  true && true;           // true
  true && false;          // false
  false && true;          // false
  false && false;         // false
  (10 < 12) && (12 < 15); // true
  ```
- [`||`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR): Csak akkor hamis, ha mind a két érték hamis.
  ```javascript
  true || true;          // true
  true || false;         // true
  false || true;         // true
  false || false;        // false
  (10 < 8) || (10 < 20); // true
  ```
- [`!`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT): Megfordítja (negálja) az operandus értékét.
  ```javascript
  !true;     // false
  !false;    // true
  !(10 > 8); // false
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