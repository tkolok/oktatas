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

Az itt található példa sorait lentebb részletezem.

```javascript
class Pizza {
    static _pizzas = [];
    _ingredients;
    _name;

    constructor(name, ...ingredients) {
        this._ingredients = ingredients;
        this._name = name;
        Pizza._pizzas.push(this);
    }

    static getCheapest() {
        let cheapest = Pizza._pizzas[0];

        for (let index = 1; index < Pizza._pizzas.length; index++) {
            if (Pizza._pizzas[index].price < cheapest.price) {
                cheapest = Pizza._pizzas[index];
            }
        }

        return cheapest;
    }

    addIngredient(ingredient) {
        this._ingredients.push(ingredient);
    }

    toString() {
        return `A ${this._name} hozzávalói: ${this._ingredients.join(', ')}. Ára: ${this.price} Ft.`;
    }

    get ingredients() {
        return this._ingredients;
    }

    get name() {
        return this._name;
    }

    get price() {
        return 1000 + this._ingredients * 200;
    }

    set name(value) {
        console.log(`A ${this._name} pizza új neve: ${value}.`);
        this._name = value;
    }
}
```

### [fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) (mező, adattag)

Az osztályon belül az attribútumokat fieldnek nevezzük. Céljuk is ugyanaz, az adott objektummal kapcsolatban tárolhatunk itt adatokat. Az adattagok elé nem kell
`const`, `let` és `var` kulcsszót tenni. Ezekre ugyanúgy kell hivatkozni, mintha egy objektum attribútumára hivatkoznánk (pl.:
`margheritaPizza._ingredients`).  
A példában a `_pizzas`, az `_ingredients` és a `_name` az adattagok. A `_pizzas` előtti `static` kulcsszót lentebb tárgyaljuk.

#### Szintaxis

```
class {
    <adattag neve>
}
```

### [Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) (metódusok)

Az osztályon belül a függvényeket methodnak (metódusnak) nevezzük. Céljuk az, hogy az adott objektum adattagjai alapján hajtsák végre a metódus törzsében
található utasításokat. Ennek köszönhetően a metódusoknak jóval kevesebb paramétert kell átadni, mint egy függvénynek, hiszen a szükséges adatokat az adott
objektum adattagjaiból olvassa ki. A metódusok elé nem kell `function` kulcsszót tenni. Ezekre ugyanúgy kell hivatkozni, mintha egy objektum attribútumára
hivatkoznánk (pl.: `margheritaPizza.toString()`).  
A példában a `getCheapest`, az `addIngredient` és a `toString` az egyszerű metódusok. A `getCheapest` előtti `static` kulcsszót lentebb tárgyaljuk. A példában
speciális metódusok is vannak, amiket külön tárgyalunk.

#### Szintaxis

```
class {
    <metódus neve>(<paraméter lista>) {
        <metódus törzse>
    }
}
```

### [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

A `constructor` egy speciális metódus, amely segítségével inicializálhatjuk (kezdő értéket adhatunk) egy új példány adattagjait a létrehozása pillanatában.  
Ez az a pillanat, amikor megadhatjuk, hogy milyen hozzávalókból szeretnénk a süteményt készíteni. A sütőforma meg fogja adni, hogy hogyan nézzen ki a sütemény
(milyen adattagjai és metódusai vannak), de az ízük, állaguk, színük süteményenként eltérhet (példányonként más-más értékeket tárolnak az adattagok).

#### Szintaxis

```
class {
    constructor(<paraméter lista>) {
        <metódus törzse>
    }
}
```

### [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

A `this` kulcsszóval lehet hivatkozni az adott példányra. Ha több példányt is létrehoztunk egy adott osztályból, akkor a `this` kulcsszó mindig arra a példányra
fog mutatni, amelynek meghívtuk a metódusát, lekérdeztük az adattagját, stb..

### [Getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

A `get` segítségével amikor egy példány adattagjára hivatkozunk, akkor egy egyszerű érték visszaadás helyett egy metódus kerül meghívásra. Ezt legtöbbször arra
használjuk, hogy dinamikusan kiszámítsuk a használni kívánt adattagot, vagy olyan adattaghoz biztosítsunk hozzáférést, amely rejtve van.  
A korábban létrehozott `Rectangle` osztály csak a négyszög hosszát és magasságát tárolja. Ha lekérdezzük az `area` adattag értékét, akkor kiszámítja annak
aktuális értékét, és nem szükséges eltárolni azt. Továbbá, ha módosulna a `height` vagy a `width`, akkor automatikusan a módosított értéket kapnánk vissza az
`area` újbóli meghívásakor.

#### Szintaxis

```
class {
    get <adattag neve>() {
        <metódus törzse>
    }
}
```

### [Setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

A `set` segítségével amikor egy példány adattagját szeretnénk megváltoztatni, akkor ezt egy metódus híváson keresztül tehetjük meg. Ennek célja, hogy amikor
módosítani szeretnénk valamit, akkor további logikát adhatunk a módosítás mellé.  
Például, ha szeretnénk kiíratni, hogy miről mire módosult az adattag, akkor itt megtehetjük.

#### Szintaxis

```
class {
    set <adattag neve>(arg) {
        <metódus törzse>
    }
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

### Új példány létrehozás -

Amikor új példányt hozunk létre egy osztályból, akkor egy olyan objektumot hozunk létre, amely rendelkezik az osztályon belül meghatározott adattagokkal,
metódusokkal. Ezt a `new` kulcsszóval érhetjük el.  
Ez az a művelet, amikor a sütőformából süteményt készítünk.

#### Szintaxis

```
new <osztály neve>(<paraméterek>);
```

#### Példa

```javascript
let square = new Rectangle(5, 5);
```

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