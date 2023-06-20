# 7. Óra

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

### [createContext](https://react.dev/learn/passing-data-deeply-with-context)