# 7. Óra

## Interakciók kezelése

Az előző anyagban láthattuk, hogy hogyan lehet JSX segítségével statikus HTML-t létrehozni. Ez mind szép és jó, de lássuk be, hogy nagyon kevés olyan weboldal
van az internet kosarában, amelyiken nincs semmilyen interakció. Ezért most megnézzük, hogy React segítségével hogyan kezelhetjük azt.

### [useState](https://react.dev/learn/updating-objects-in-state)

A `useState` function paraméterként egy kezdő értéket vár el, és visszatér egy 2 elemű tömbbel. Az 1. maga az érték lesz, míg a 2. egy olyan function, ami
segítségével ezt az értéket módosíthatjuk. Konvenció szerint a function neve ugyanaz, mint az értéké, csak eléillesztjük a _set_ szócskát.  
Ahogy a lentebbi példában is láthatjuk létrehozunk egy `stuffedCabbages` nevű változót, amelyet megjelenítünk. A _"MÉG!"_ gomb `onClick`-nek átadott function
ezt az értéket mindig eggyel növeli a `setStuffedCabbages` function segítségével, amikor a felhasználó rákattint a gombra.

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