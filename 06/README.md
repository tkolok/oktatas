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

A továbbiakban az itt található kódrészlet sorait fogjuk kielemezni. Másold be a StackBlitz felületén az `App.js` fájlba, hogy lásd működés közben!

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
    
    return (
        <div>
            <Header color="blue" subtitle={subtitle} title={title}>
                <img height="150"
                     src="https://rupanerkonyha.hu/wp-content/uploads/2018/10/DSC_2365k.jpg"
                     width="225"/>
                <img height="150"
                     src="https://images.ctfassets.net/nw5k25xfqsik/64VwvKFqxMWQORE10Tn8pY/200c0538099dc4d1cf62fd07ce59c2af/20220211142754-margherita-9920.jpg"
                     width="196"/>
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

#### [JavaScript a JSX-en belül](https://react.dev/learn/javascript-in-jsx-with-curly-braces)

#### [Lista renderelés](https://react.dev/learn/rendering-lists)

### [React component](https://react.dev/learn/your-first-component)

Egy React komponens nem más, mint egy olyan `function`, aminek a visszatérési értéke egy JSX template. 

#### [Paraméter átadás](https://react.dev/learn/passing-props-to-a-component)

#### [children](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)

#### [Feltételes megjelenítés](https://react.dev/learn/conditional-rendering)

### [Telepítés](https://react.dev/learn/add-react-to-an-existing-project)

### Compile (kód fordítás)
