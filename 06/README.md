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

#### [Lista renderelés](https://react.dev/learn/rendering-lists)

### [React component](https://react.dev/learn/your-first-component)

Egy React komponens nem más, mint egy olyan `function`, aminek a visszatérési értéke egy JSX objektum. Ezeknek a neve mindig nagy betűvel kezdődik, hogy meg
lehessen különböztetni az egyszerű HTML elemektől. Egy komponenst JSX-en belül úgy tudunk beszúrni, ahogy egy egyszerű HTML elemet is szokás: `<MyComponent>`.
JSX-ben minden elemet le kell zárni (és ez az egyszerű elemekre is igaz):
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

#### [children](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)

#### [Feltételes megjelenítés](https://react.dev/learn/conditional-rendering)

#### [Fragment](https://react.dev/reference/react/Fragment)

### [Telepítés](https://react.dev/learn/add-react-to-an-existing-project)

### Compile (kód fordítás)
