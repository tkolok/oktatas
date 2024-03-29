# React 2. fogás

## Interakciók kezelése

Az előző anyagban láthattuk, hogy hogyan lehet JSX segítségével statikus HTML-t létrehozni. Ez mind szép és jó, de lássuk be, hogy nagyon kevés olyan weboldal
van az internet kosarában, amelyiken nincs semmilyen interakció. Ezért most megnézzük, hogy React segítségével hogyan kezelhetjük azt.

### [useState](https://react.dev/learn/updating-objects-in-state)

A `useState` function a reactos verziója a változó lérehozásnak (`let x;`) és értékadásnak (`x = 42;`). Azért nem elég, ha egyszerű változók értéketit
módosítjuk, mert a React nem fogja tudni, hogy változás történt, így az nem fog megjelenni a generált HTML-ben.  
A function paraméterként egy kezdő értéket vár el, és visszatér egy 2 elemű tömbbel. Az 1. maga az érték lesz, míg a 2. egy olyan function, amivel ezt az
értéket módosíthatjuk. Konvenció szerint a function neve ugyanaz, mint az értéké, csak eléillesztjük a _set_ szócskát.

```jsx
let [x, setX] = useState(0);
setX(42);
```

Ez ennek a javascriptes kódnak feleltethető meg:

```javascript
let x = 0;
x = 42;
```

Valamivel "életszerűbb" a lentebbi példa. Létrehozunk egy `stuffedCabbages` nevű változót, amelyet megjelenítünk. A `<button>` elemnek van egy `onClick`
paramétere, ami akkor fog lefutni, amikor a felhasználó rákattint az adott gombra. Jelen esetben a _"MÉG!"_ gombnak átadunk egy olyan functiont, amely eggyel
növeli `stuffedCabbages` értékét a `setStuffedCabbages` segítségével.

```jsx
import {useState} from 'react';

function StuffedCabbageCounter() {
    let [stuffedCabbages, setStuffedCabbages] = useState(1);

    return (
        <div>
            <label>Eddig {stuffedCabbages} töltött káposztát fogyasztottál el!</label>
            <br/>
            <button onClick={() => setStuffedCabbages(stuffedCabbages + 1)}>MÉG!</button>
        </div>
    );
}
```

### [useReducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)

A `useReducer` function ugyanarra szolgál, mint a `useState`, csak némi csavarral megfűszerezi azt. Első paraméterként egy _reducer_ functiont vár el, majd egy
kezdő értéket. Ennek a visszatérési értéke is egy 2 elemű tömb, aminek az 1. eleme maga az érték lesz, míg a 2. egy úgynevezett _dispatch_ function, amivel ezt
az értéket tudjuk módosítani (akárcsak a `useState` esetében).  
A _reducer_ functionnek a változó új értékével kell visszatérnie. Ennek az 1. paramétere a változó jelenlegi értéke, a 2. pedig egy objektum, amely segít
meghatározni, hogy hogyan szeretnénk módosítani a jelenlegi értéket.  
Igen, tudom... ez most elég kusza, de lássuk ezt példán keresztül.

```jsx
import {useReducer, useState} from 'react';

function ShoppingList() {
    let [list, dispatch] = useReducer(reducer, []);
    let [name, setName] = useState('');

    return (
        <div>
            <input onChange={event => setName(event.target.value)}/>
            <button onClick={() => add()}>Hozzáadás</button>
            <ul>
                {list.map(item => (
                    <li key={item}>
                        {item}
                        <button onClick={() => remove(item)}>Törlés</button>
                    </li>
                ))}
            </ul>
        </div>
    );

    function add() {
        dispatch({
            name: name,
            type: 'add'
        });
    }

    function remove(itemName) {
        dispatch({
            name: itemName,
            type: 'remove'
        });
    }
}

function reducer(list, action) {
    switch (action.type) {
        case 'add':
            return [...list, action.name];
        case 'remove':
            return list.filter(item => item !== action.name);
    }

    return list;
}
```

A fentebbi kódban a `<input onChange={event => setName(event.target.value)}/>` sor arra szolgál, hogy a `name` változó értéke az inputba írt szöveggel együtt
változzon.  
De térjünk rá a reducerre. Amikor a felhasználó rákattint a _"Hozzáadás"_ gombra, akkor az `add` functiont meghívjuk, ami meghívja a `dispatch`
functiont egy objektummal. A `dispatch` a háttérben meghívja a `reducer` function a változó jelenlegi értékével és a `dispatch`-nek átadott paraméterrel. Ezt
követően a `reducer`-ben megvizsgáljuk, hogy mi a `type`-ja az adott műveletnek és az alapján visszatérünk valamivel. Jelen esetben a `type` értéke `'add'`, így
a hozzátartozó `case` ág fog lefutni.  
A _"Törlés"_ gomb megnyomásánál hasonlóan fog minden történni. A `remove` function meghívja a `dispatch` functiont, amely a `reducer` functionnek 2.
paraméterként átadja a paraméterként kapott objektumot, majd a `reducer` function az alapján tér vissza a `list` új értékével.  
Ha elsőre ez így nem világos, akkor lassan, a kódot követve olvasd át az egészet párszor.

> A `useReducer`-nek átadhatunk egy 3. paramétert is, amiről bővebben a hivatalos [dokumentációban](https://react.dev/reference/react/useReducer) olvashatsz.

### [Context](https://react.dev/learn/passing-data-deeply-with-context)

A _context_ célja is nagyjából ugyanaz, mint az előző 2 eszköznek, azzal a különbséggel, hogy ez egy olyan érétéket tárol, amely minden gyermek komponensből
elérhető. Ilyen lehet például a bejelentkezett felhasználó adatai, a kiválasztott nyelv vagy egy webshopon a kosár tartalma.

```jsx
import {createContext, useContext, useState} from 'react';

let menus = [
    {
        mainCourse: 'Hentes tokány vegyes körettel',
        name: 'A menü',
        soup: 'Gyümölcs leves'
    },
    {
        mainCourse: 'Csikós tokány rizzsel',
        name: 'B menü',
        soup: 'Tyúkhús leves'
    },
    {
        mainCourse: 'Bakonyi tokány nokedlivel',
        name: 'C menü',
        soup: 'Lebbencs leves'
    }
];
let MenuContext = createContext(null);

function MenuSelector() {
    let [menu, setMenu] = useState(menus[0]);

    return (
        <MenuContext.Provider value={menu}>
            {menus.map(current => <button key={current.name} onClick={() => setMenu(current)}>{current.name}</button>)}
            <Menu/>
        </MenuContext.Provider>
    );
}

function Menu() {
    let menu = useContext(MenuContext);

    return (
        <div>
            <p>A(z) <b>{menu.name}</b> tartalma:</p>
            <b>Főétel:</b> {menu.mainCourse}
            <br/>
            <b>Leves:</b> {menu.soup}
        </div>
    );
}
```

A _context_ használata 3 lépésből épül fel. Először létrehozzuk a `createContext` function segítségével magát a _contextet_. Ennek egy paramétere van, egy kezdő
érték.

```jsx
let MenuContext = createContext(null);
```

A 2. lépésben beszúrjuk a _contexthez_ tartozó _providert_ a JSX-be és értéket adunk neki a `value` attribútum által.

```jsx
<MenuContext.Provider value={menu}>
    ...
</MenuContext.Provider>
```

Ezáltal elérhető lesz a _context_ értéke minden gyermek elem számára. Ezt úgy kell elképzelni, mintha egy HTML elemnek piros háttér színt adnánk, és ennek
köszönhetően az összes gyermek elemének a háttér színe is piros lenne. Valójában csak a kiinduló elemnek változott a háttér színe, de a gyermek elemek azt fel
tudják használni. Nagyjából ugyanez a helyzet a _contextnél_ is. A _provideren_ keresztül beállítunk egy értéket, és ehhez hozzá fér minden gyermek elem. Jelen
esetben ez az érték mindig a `menu`-vel fog megegyezni. Ahogy a felhasználó módosítja kiválasztott menüt, úgy az látszódni fog a gyermek elemeknél is.  
A 3. lépésben a `useContext` functiont meghívjuk az adott gyermek komponenseken belül. Ez paraméterként azt a `contextet` várja, amelynek az értékét fel
szeretnénk használni.

```jsx
let menu = useContext(MenuContext);
```

Ahogy a kiinduló példánkban is látható, a `Menu` komponens semmilyen paraméterrel nem rendelkezik, mégis képes felhasználni a `menu` változó értékét. És ez a
_context_ célja, hogy bármilyen mélységben elérhető legyen egy változó értéke, anélkül hogy az összes gyermek elemnek egyesével adogatnánk azt paraméterként.

### _use_ kezdetű React functionök

Fontos megjegyezni, hogy minden _use_ szóval kezdődő functiont a React komponensek legelső soraiban kell elhelyeznünk, és akár felhasználjuk, akár nem,
ott kell szerepelnie.  
A következő példa azért nem jó, mert nem minden esetben kérdezzük le a `name` értékét.

```jsx
function BadExample({bool}) {
    if (bool) {
        let [name, setName] = useState(null);

        return <b>Hello {variable}!</b>;
    } else {
        return <span>Hello világ!</span>;
    }
}
```

Ez helyesen így nézne ki:

```jsx
function GoodExample({bool}) {
    let [name, setName] = useState(null);

    if (bool) {
        return <b>Hello {name}!</b>;
    } else {
        return <span>Hello világ!</span>;
    }
}
```