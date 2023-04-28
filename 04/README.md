# 4. Óra

## [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) (osztályok)

Az osztályok sablonok, amelyekkel azonos tulajdonságú objektumokat hozhatunk létre. Az osztályból származtatott példányok egységbe foglalják az adatokat és a
hozzájuk tartozó műveleteket. A létrehozott példányokra úgy kell gondolni, mint egyszerű objektumokra.  
Maguk az osztályok olyanok, mint a sütőformák, amik segítségével azonos formájú süteményeket formázhatunk, de magukban a süteményekben lehet eltérés.

### Class definiálása

#### Szintaxis

```
class <osztály neve> {
    <az osztály törzse> // itt fieldeket (mezők/adattagok) és methodokat (metódusokat) definiálunk
}
```

> Megjegyzés: a classok neveit _PascalCase_ módon szokás megadni.

#### Példa

Az itt található példa részeit lentebb kifejtem.

```javascript
class Rectangle {
    static instancies = [];
    _height;
    _width;

    constructor(width, height) {
        this._height = height;
        this._width = width;
        Rectangle.instancies.push(this);
    }
    
    static getInstance(index) {
        return Rectangle.instancies[index];
    }

    get area() {
        return this._height * this._width;
    }

    get height() {
        return this._height;
    }

    get perimeter() {
        return 2 * (this._height + this._width);
    }

    get width() {
        return this._width;
    }

    set height(value) {
        console.log(`Height changed from ${this._height} to ${value}.`);
        this._height = value;
    }

    set width(value) {
        console.log(`Width changed from ${this._width} to ${value}.`);
        this._width = value;
    }
}
```

### Új példány létrehozás

Amikor új példányt hozunk létre egy osztályból, akkor egy olyan objektumot hozunk létre, amely rendelkezik az osztályon belül meghatározott adattagokkal,
metódusokkal.

#### Szintaxis

```
new <osztály neve>(<paraméterek>);
```

#### Példa

```javascript
let square = new Rectangle(5, 5);
```

### [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

A `this` kulcsszóval lehet hivatkozni az adott példányra. Ha több példányt is létrehoztunk egy adott osztályból, akkor a `this` kulcsszó mindig arra a példányra
fog mutatni, amelynek meghívtuk a metódusát, lekérdeztük az adattagját, stb..

### [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

A `constructor` egy speciális metódus, amely segítségével inicializálhatjuk egy új példány adattagjait a létrehozása pillanatában.

### [Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) (metódusok) -

#### Szintaxis

```
<metódus neve>(<paraméter lista>) {
    <metódus törzse>
}
```

### [Getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

A `get` segítségével amikor egy példány adattagjára hivatkozunk, akkor egy egyszerű érték visszaadás helyett egy metódus kerül meghívásra. Ezt legtöbbször arra
használjuk, hogy dinamikusan kiszámítsuk a használni kívánt adattagot, vagy olyan adattaghoz biztosítsunk hozzáférést, amely rejtve van.  
A korábban létrehozott `Rectangle` osztály csak a négyszög hosszát és magasságát tárolja. Ha lekérdezzük az `area` adattag értékét, akkor kiszámítja annak
aktuális értékét, és nem szükséges eltárolni azt. Továbbá, ha módosulna a `height` vagy a `width`, akkor automatikusan a módosított értéket kapnánk vissza az
`area` újbóli meghívásakor.

#### Szintaxis

```
get <adattag neve>() {
    <metódus törzse>
}
```

### [Setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

A `set` segítségével amikor egy példány adattagját szeretnénk megváltoztatni, akkor ezt egy metódus híváson keresztül tehetjük meg. Ennek célja, hogy amikor
módosítani szeretnénk valamit, akkor további logikát adhatunk a módosítás mellé.  
Például, ha szeretnénk kiíratni, hogy miről mire módosult az adattag, akkor itt megtehetjük.

#### Szintaxis

```
set <adattag neve>(arg) {
    <metódus törzse>
}
```

### [static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) -

### [instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) -

### Inheritance (öröklődés) -

### [super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)

A `super` mindig a szülőosztályra hivatkozik. Amennyiben a gyermekosztály rendelkezik constructorral, úgy a `super(...)` metódust mindig meg kell hívni. Ez a
szülőosztály constructorát fogja meghívni. Ezt az egy esetet leszámítva a segítségével mindig a szülőosztály egy adattagjára vagy metódusára tudunk hivatkozni.
Például: `super.name` vagy `super.toString()`.

### override -

## Házi feladat

- Hozz létre egy `Person` nevű osztályt, amelynek van név, kor és súly adattagja.
- A konstruktornak 3 paramétert kell megadni: név, kor, nem. Ha 15 évesnél fiatalabb, akkor a súly a kor 3-szorosa legyen. 15-től a nők súlya 55 legyen, a
  férfiaké 80.
- Legyen egy `birthday` metódus, amely növeli az adott ember korát eggyel.
- Hozz létre egy `Food` nevű osztályt, amelynek van név és kalória adattagja. Ezeket konsruktoron keresztül lehessen megadni.
- Hozz létre egy `eat` nevű metódust, amely paraméterként egy mennyiséget vár, és visszatér a kalória és a mennyiség szorzatával.
- Hozz létre egy `Fruit` nevű osztályt, amelyet a `Food` osztályból származtatsz, és az `eat` metódus 25%-kal kisebb értékkel tér vissza.
- Hozz létre egy `Sweetness` nevű osztályt, amelyet a `Food` osztályból származtatsz, és az `eat` metódus 50%-kal nagyobb értékkel tér vissza.
- A `Person` osztályon belül hozz létre egy `eat` metódust, amelynek a paraméterei egy `Food` és egy mennyiség. Az adott személy súlya a megevett étel
  mennyiségével fog nőni.