# 4. Óra

## [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) (osztályok)

Az osztályok sablonok objektumok létrehozásához. Az osztályból származtatott példányok egységbe foglalják az adatokat és a hozzájuk tartozó műveleteket. A 
létrehozott példányokra úgy kell gondolni, mint egyszerű objektumokra.

### Class definiálása

#### Szintaxis

```
class <osztály neve> {
    <az osztály törzse> // itt fieldeket (mezők/adattagok) és methodokat (metódusokat) definiálunk
}
```

#### Példa

```javascript
class Rectangle {
    height;
    width;

    constructor(width, height) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.height * this.width;
    }

    get perimeter() {
        return 2 * (this.height + this.width);
    }
}
```

> Megjegyzés: a classok neveit _PascalCase_ módon szokás megadni.

### Új példány létrehozás

#### Szintaxis

```
new <osztály neve>(<paraméterek>);
```

#### Példa

```javascript
let square = new Rectangle(5, 5);
```

### [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

A `this` kulcsszóval lehet hivatkozni az adott példányra. Például, ha több példányt is létrehoztunk egy adott osztályból, akkor a `this` kulcsszó mindig arra a
példányra fog mutatni, amelynek meghívtuk a metódusát, lekérdeztük az adattagját, stb..

### [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

A `constructor` egy speciális metódus, amely segítségével inicializálhatjuk egy új példány adattagjait a létrehozása pillanatában.

### [Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) (metódusok)

#### Létrehozás szintaxisa

```
<metódus neve>(<paraméter lista>) {
    <metódus törzse>
}
```

### [Getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

A `get` segítégével 

#### Létrehozás szintaxisa

```
get <adattag neve>() {
    <metódus törzse>
}
```

### [Setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

A `set` segítégével

#### Létrehozás szintaxisa

```
set <adattag neve>(arg) {
    <metódus törzse>
}
```

### [static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

### Inheritance (öröklődés)