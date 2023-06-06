# 6. Óra

## [React](https://react.dev/)

A React a világ egyik legnépszerűbb (ha nem a legnépszerűbb) JavaScript libraryje (könyvtára). Nem is véletlenül esett a váalsztásom rá, amikor elkezdtem írni
ezt a "szakácskönyvet". Sokan használják, egyszerű, könnyen tanulható, jól dokumentált.

### [JSX](https://react.dev/learn/writing-markup-with-jsx)

Az első, amit tudni kell a Reactról, hogy JSX-szel együtt használjuk. A kettő független egymástól, de általában kéz a kézben járnak. A JSX a JavaScript nyelv
kiterjesztése. Ami JavaScriptben elérhető, az elérhető JSX-ben is, csak meg van fűszerezve némi HTML szintaxissal. Mivel nem natív JavaScriptről van szó, ezért
szükséges, hogy a megírt kódunkat lefordítsuk. Ennek mikétjét [itt](#compile-kód-fordítás) részletezem. Szerencsére rengeteg online fejlesztő környezet létezik
már, amelyeknek köszönhetően nincs szükségünk hosszú telepítésre, hanem azonnal belevághatunk a lecsóba. Az egyik ilyen a
[StackBlitz](https://stackblitz.com/?starters=frontend), ahol _"React - Javascript"_ fülre rákattintva, azonnal kezdhetjük a lecsóba vágást.

A továbbiakban az itt található kódrészlet sorait fogjuk kielemezni. Másold be az `App.js` fájlba a StackBlitz felületén, hogy lásd működés közben!

```jsx
import React from 'react';

export default function App() {
    let foods = [
        {
            ingerdients: ['Bors', 'Fűszerpaprika', 'Sertéshús', 'Só', 'Tojás', 'Zsemle', 'Zsemlemorzsa'],
            name: 'Fasírt'
        },
        {
            ingerdients: ['Háztartási keksz', 'Kakaó', 'Kókuszreszelék', 'Porcukor', 'Rumaroma', 'Tej', 'Vaj', 'Vaníliás cukor'],
            name: 'Kókuszgolyó'
        },
        {
            ingerdients: ['Paradicsom', 'Sajt', 'Sonka', 'Tészta'],
            name: 'Pizza'
        }
    ];
    let subtitle = 'Ahol a finom falatok készülnek';
    let title = 'Finom falatok konyha';

    return ( // Ez egy JSX objektum
        <div>
            <Header color="blue" subtitle={subtitle} title={title}>
                <img alt="Töltött káposzta"
                     src="https://github.com/tkolok/oktatas/blob/main/assets/stuffed_cabbage.jpg?raw=true"/>
                <img alt="Pizza"
                     src="https://github.com/tkolok/oktatas/blob/main/assets/pizza.jpg?raw=true"/>
            </Header>
            {foods.map(Food)}
        </div>
    );
}

function Food(food) {
    return ( // Ez is JSX objektum
        <React.Fragment key={`food-${food.name}`}>
            <h3>{food.name}</h3>
            <ul>
                {food.ingerdients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>
        </React.Fragment>
    );
}

function Header({children, color, subtitle, title}) {
    return ( // És ez is JSX objektum
        <>
            {children}
            <h1>{title}</h1>
            {subtitle && <small style={{color}}>{subtitle}</small>}
        </>
    );
}
```

#### [JavaScript a JSX-en belül](https://react.dev/learn/javascript-in-jsx-with-curly-braces)

Ahogy HTML-t helyezhetünk el a JavaScript kódunkban a JSX-nek köszönhetően, úgy a HTML-ben is elhelyezhetünk JavaScript kódot. Ehhez elég kapcsos zárójelek
(`{`, `}`) közé írni a kívánt kódrszéletet. Például a `Header` functionön belül a `{title}` sor arra szolgál, hogy a paraméterként kapott `title` értéke be lesz
helyettesítve a HTML-en belül. A többi esetben is ugyanez történik: a kapcsos zárójelek közötti kódrészlet kiértékelődik és a kapott érték bekerül a HTML-be.

```jsx
function Header({children, color, subtitle, title}) {
    return (
        <>
            {children}
            <h1>{title}</h1>
            {subtitle && <small style={{color}}>{subtitle}</small>}
        </>
    );
}
```

#### [Lista renderelés](https://react.dev/learn/rendering-lists)

Sokszor találkozhatunk olyan esetekkel, amikor hasonló adatokat akarunk kilistázni (hozzávalók, kedvenc ételek, 1337 kép a legjobban sikerült tortánkról).
Ekkor egyszerűen csak JSX objektumokat kell csinálnunk a lista elemeiből. Ehhez nagyszerű eszköz a
[`.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function. A fenti kódrészletben az `App` function alján és
a `Food` function közepén található 2 különböző példa. A `{foods.map(Food)}` esetében meghívjuk a `Food` functiont, ami egy JSX objektummal tér vissza. A
`{food.ingerdients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}` esetében egy inline functiont adunk meg, ami szintén egy JSX objektummal tér
vissza.  
Nagyon fontos, hogy minden esetben adjuk meg a `key` attribútumot, aminek egyedinek kell lennie elemenként.

```jsx
export default function App() {
    // ...

    return (
        <div>
            <Header color="blue" subtitle={subtitle} title={title}>
                <img alt="Töltött káposzta"
                     src="https://github.com/tkolok/oktatas/blob/main/assets/stuffed_cabbage.jpg?raw=true"/>
                <img alt="Pizza"
                     src="https://github.com/tkolok/oktatas/blob/main/assets/pizza.jpg?raw=true"/>
            </Header>
            {foods.map(Food)}
        </div>
    );
}

function Food(food) {
    return (
        <React.Fragment key={`food-${food.name}`}>
            <h3>{food.name}</h3>
            <ul>
                {food.ingerdients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>
        </React.Fragment>
    );
}
```

### [React component](https://react.dev/learn/your-first-component)

Egy React komponens nem más, mint egy olyan function, aminek a visszatérési értéke egy JSX objektum. Ezeknek a neve mindig nagy betűvel kezdődik, hogy meg
lehessen különböztetni az egyszerű HTML elemektől. A fenti példában az `App`, a `Food` és a `Header` functionök React komponensek, hiszen mindegyik egy-egy JSX
objektummal tér vissza. Egy komponenst JSX-en belül úgy tudunk beszúrni, ahogy egy egyszerű HTML elemet is szokás: `<MyComponent>`. JSX-ben minden elemet le
kell zárni (és ez az egyszerű elemekre is igaz):
- Ha nincs gyermek elem: `<MyComponent/>`.
- Ha van gyermek elem: `<MyComponent>...</MyComponent>`.

```jsx
import React from 'react';

export default function App() {
    return (
        <div>
            <button>Ez egy egyszerű HTML gomb</button>
            <br/>
            <Button>Ez a lentebb definiált gomb</Button>
            <br/>
            <ItalicButton text={'Ez egy speciális gomb, ami a "Button" komponenst használja fel'}/>
        </div>
    );
}

function Button({children}) {
    return <button>{children}</button>;
}

function ItalicButton({text}) {
    return <Button><i>{text}</i></Button>;
}
```

#### [Paraméter átadás](https://react.dev/learn/passing-props-to-a-component)

Mivel a React komponensek functionök, ezért valahogy a paramétereket át kell adnunk. Vegyük példának a `Header` komponenst. Ennek 4 paramétere van (`children`,
`color`, `subtitle`, `title`). A `Header` az `App` komponensen belül bukkan fel. Ahogy látható a paraméterek, mint attribútumokként szerepelnek. A `color` egy
egyszerű string értéket tartalmaz. A `subtitle` és a `title` értékei kapcsos zárójelek közt vannak, ezért azok ki fognak értékelődni, és az így kapott értékeket
adjuk át, mint paraméterek (valójában azok is stringek, de bármilyen más értéket tartalmazhatnának).

```jsx
export default function App() {
    // ...
    let subtitle = 'Ahol a finom falatok készülnek';
    let title = 'Finom falatok konyha';

    return (
        <div>
            <Header color="blue" subtitle={subtitle} title={title}>
                <img alt="Töltött káposzta"
                     src="https://github.com/tkolok/oktatas/blob/main/assets/stuffed_cabbage.jpg?raw=true"/>
                <img alt="Pizza"
                     src="https://github.com/tkolok/oktatas/blob/main/assets/pizza.jpg?raw=true"/>
            </Header>
            {foods.map(Food)}
        </div>
    );
}

function Header({children, color, subtitle, title}) {
    return (
        <>
            {children}
            <h1>{title}</h1>
            {subtitle && <small style={{color}}>{subtitle}</small>}
        </>
    );
}
```

#### [children](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)

A `children` egy speciális paraméter. Ez azt a JSX objektumot tartalmazza, amit az adott komponens nyitó és záró tagjei közé teszünk. Ahogy látható a `Header`
komponensnek két `img` gyermeke van. Ezek fognak megjelenni a `h1` előtt.

```jsx
<Header color="blue" subtitle={subtitle} title={title}>
    <img alt="Töltött káposzta"
         src="https://github.com/tkolok/oktatas/blob/main/assets/stuffed_cabbage.jpg?raw=true"/>
    <img alt="Pizza"
         src="https://github.com/tkolok/oktatas/blob/main/assets/pizza.jpg?raw=true"/>
</Header>

function Header({children, color, subtitle, title}) {
    return (
        <>
            {children}
            <h1>{title}</h1>
            {subtitle && <small style={{color}}>{subtitle}</small>}
        </>
    );
}
```

#### [Feltételes megjelenítés](https://react.dev/learn/conditional-rendering)

#### [Fragment](https://react.dev/reference/react/Fragment)

```jsx
import React from 'react';

<React.Fragment>
    <p>- Van vanília, karamell, tutti-frutti, rumos dió és kávé.</p>
    <p>- Oké, akkor legyen mondjuk tiszta csokoládé egy kis pisztáciával.</p>
    <p>- Mondd, te süket vagy?! A pisztácia kifogyott, csokoládé nem is volt!</p>
    <p>- Azért ne kapd fel mindjárt a vizet, ha nincs nincs. Szóval akkor, mi a választék?</p>
</React.Fragment>
```

Ebből az alábbi HTML lesz kigenerálva:

```html
<p>- Van vanília, karamell, tutti-frutti, rumos dió és kávé.</p>
<p>- Oké, akkor legyen mondjuk tiszta csokoládé egy kis pisztáciával.</p>
<p>- Mondd, te süket vagy?! A pisztácia kifogyott, csokoládé nem is volt!</p>
<p>- Azért ne kapd fel mindjárt a vizet, ha nincs nincs. Szóval akkor, mi a választék?</p>
```

Ahogy látható nincs `Fragment` sehol. Ahogy pisztácia és csokoládé sincs.

### [Telepítés](https://react.dev/learn/add-react-to-an-existing-project)

### Compile (kód fordítás)
