# 1. Óra

## Bevezetés

Az informatika önálló tudományág, amely a különböző eszközökkel – de különösen a számítógéppel – megvalósított információkezeléssel, azaz az információ
megszerzésével, gyűjtésével, feldolgozásával, tárolásával, sokszorosításával és továbbításával foglalkozik. Az általános célú programozási nyelvek (esetünkben
a JavaScript) olyan programozási nyelvek, amiket széleskörűen fel lehet használni szoftverek írására.

## "Fejlesztői környezet" megnyitása

- [Google Chrome](https://www.google.com/chrome) / [Microsoft Edge](https://www.microsoft.com/edge): Kattints az egér jobb gombjával a weboldal bármely elemére,
  majd válaszd a Vizsgálat/Inspect lehetőséget. Válaszd a Konzol/Console fület.
- [Mozilla Firefox](https://www.mozilla.org/firefox): Tools > Web Developer > Web Developer Tools. Válaszd a Konzol/Console fület.

## Data types (Típusok)

Megkülönböztetjük az adatokat az alapján, hogy milyen adatatot szeretnénk tárolni. Az alábbi típusok érhetőek el JavaScriptben.

### [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (szám)

Ezek ugyanolyan számok, mint a való életben is használt egész, vagy tört számok.  
Például: `5`, `12.5`, `-87`.

### [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (karakterlánc)

Ezekre úgy gondoljunk, min egyszerű szöveges adatra. Ezeket `'` vagy `"` jelek közé kell írni.  
Például: `'alma'`, `"Körte"`, `"123"`.

### [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

A boolean nem más, mint igazságértéket tartalmazó adat. Egy ilyen adat csak 2 értéket vehet fel: `true` (igaz) vagy `false` (hamis).

### [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

Az `undefined` kicsit kilóg a többi adat közül, mert ezzel jelöljük azt, ha nincs adat.

### [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) (tömb)

```javascript
let a = [10, 20, 30];
a[0];
a[1];
a[2];
a.push('negyven');
a[3];
a.length;
```

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

## Literals (Literálok)

A literálok nem változtatható értékek.

```javascript
5;
-12.5;
.08;
'alma'
"KÖRTE";
`4 + 5 = ${4 + 5}`;
[1, 2, 3, 5, 8, 13];
{
    age: 99,
    firstname: 'József',
    lastname: 'Példa'
};
true;
false;
null;
undefined;
```

## Variables (Változók)

A változók adatok tárolására szolgáló nevesített konténerek. Egy változó a számítógép memóriájában lefoglal egy memóriacímet, ahol ezután adatokat
tárolhatunk.  
Képzeljük el, hogy a konyhánkban rengeteg fűszeres doboz van és mindegyik címkéjén más áll (só, bors, stb.). Bármelyikbe tehetünk bármilyen fűszert (adatot), a
címke csak javaslat. Csak rajtunk áll, hogy melyikbe mit teszünk, és mikor használjuk fel a tartalmát. Viszont sosem a doboz tartalma alapján fogunk hivatkozni
egy fűszeres dobozra, hanem a címkéje (neve) alapján. Nagyjából így működnek a változók is.  
A gyakorlatban a következő módon hozunk létre egy változót:

```javascript
let a;
```

A `let` kulcsszóval jeleztük, hogy egy változót fogunk létrehozni. Ezután megadtuk a változó nevét, ami jelen esetben `a`.  
Most adjunk értéket az `a` változónak:

```javascript
a = 5;
```

Az `=` egy olyan utasítás, amellyel a bal oldalon lévő változó értékét felülírjuk a jobb oldalon lévő értékkel. Ebben az esetben az `a` értéke legyen `5`. Így
ha most lekérdeznénk, hogy milyen adat van az `a` változóban, akkor azt kapnánk, hogy `5`.  
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
> eltérés a változók viselkedésében attól függően, hogy milyen módon hoztuk őket létre, de az nem része ennek a "tananyagnak". Az egyszerűség kedvéért a
> továbbiakban a `let`-es változatot fogom használni.

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

## Kiiratás

```javascript
console.log('Szöveg', 150, null);
```

## Házi feladat

1. Írj kód részletet, amelyben létrehozol 2 szám változót, majd ezek összegét letárolod egy új változóban!
2. Írj kód részletet, amelyben létrehozol 2 akármilyen változót, majd azok értékeit megcseréled!
3. Írj kód részletet, amelyben létrehozol egy szám változót, majd egy újabb változóban letárolod, hogy a szám osztható-e 2-vel és 5-tel!
4. Írj kód részletet, amelyben létrehozol egy 5 számot tartalmazó tömböt, majd egy új változóban letárolod ezek összegét!
5. Írj kód részletet, amelyben létrehozol 3 akármilyen változót, majd ezek értékét egy object típusú változóba lemented! Ezután irasd ki az objektum összes
   attribútumát!