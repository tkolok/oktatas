# 6. Óra

## [React](https://react.dev/)

[StackBlitz](https://stackblitz.com/?starters=frontend)

A továbbiakban az itt található kódrészlet sorait fogjuk kielemezni.

```jsx
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
        <Fragment key={`food-${food.name}`}>
            <h3>{food.name}</h3>
            <ul>
                {food.ingerdients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>
        </Fragment>
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

### [JSX](https://react.dev/learn/writing-markup-with-jsx)

#### [JavaScript a JSX-en belül](https://react.dev/learn/javascript-in-jsx-with-curly-braces)

#### [Lista renderelés](https://react.dev/learn/rendering-lists)

### [React component](https://react.dev/learn/your-first-component)

Egy React komponens nem más, mint egy olyan `function`, aminek a visszatérési értéke egy JSX template. 

#### [Paraméter átadás](https://react.dev/learn/passing-props-to-a-component)

#### [`children`](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)

#### [Feltételes megjelenítés](https://react.dev/learn/conditional-rendering)

### [Telepítés](https://react.dev/learn/add-react-to-an-existing-project)
