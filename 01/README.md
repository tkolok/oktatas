# 1. Óra

## Bevezetés
Az informatika önálló tudományág, amely a különböző eszközökkel – de különösen a számítógéppel – megvalósított információkezeléssel, azaz az információ
megszerzésével, gyűjtésével, feldolgozásával, tárolásával, sokszorosításával és továbbításával foglalkozik. Az általános célú programozási nyelvek (esetünkben
a JavaScript) olyan programozási nyelvek, amiket széleskörűen fel lehet használni szoftverek írására.

## Data types (Típusok)
Az alábbi típusok érhetőek el JavaScriptben:
- Számok (number), pl.: 5, 12.5, -87.
- Karakterláncok (string), pl.: 'alma', "Körte"
- Booleanek (boolean), pl.: true, false

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
A változók adatok tárolására szolgáló konténerek. Egy változó a számítógép memóriájában lefoglal egy memóriacímet, ahová ezután adatokat rakhatunk. Ezt úgy
kell elképzelni, mint egy parkolót (memória), ahol fel vannak festve a parkolóhelyek (memóriacím), és oda autók (adatok) állhatnak.

```javascript
let a = 5;
let b = a + a;
b = b + b;
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

```javascript
console.log('Szöveg');
```

## Házi feladat

- Írj kód részletet, amelyben létrehozol 2 szám változót, majd ezek összegét letárolod egy új változóban!
- Írj kód részletet, amelyben létrehozol 2 akármilyen változót, majd azok értékeit megcseréled!
- Írj kód részletet, amelyben létrehozol egy szám változót, majd egy újabb változóban letárolod, hogy a szám osztható 2-vel és 5-tel! 
- Írj kód részletet, amelyben létrehozol egy 5 számot tartalmazó tömböt, majd egy új változóban letrolod ezek összegét!
- Írj kód részletet, amelyben létrehozol 3 akármilyen változót, majd ezek értékét egy object típusú változóba lemented!  