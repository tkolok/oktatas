# 6. Óra

## [React](https://react.dev/)

```jsx
import {useReducer, useState} from 'react';

let itemId = 0;

export default function App() {
    const [items, itemDispatch] = useReducer(itemReducer, []);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    return (
        <div>
            <h1>Bevásárló lista</h1>
            <input onChange={event => setName(event.target.value)}/>
            <input onChange={event => setPrice(event.target.valueAsNumber)}
                   type="number"/>
            <button onClick={() => addItem(name, price)}>Új tétel hozzáadása</button>
            <Table items={items} removeItem={removeItem}/>
        </div>
    );

    function addItem(name, price) {
        itemDispatch({
            item: {
                id: itemId++,
                name,
                price
            },
            type: 'add'
        });
    }

    function removeItem(id) {
        itemDispatch({
            id,
            type: 'remove'
        });
    }
}

function Item(item, removeItem) {
    return (
        <tr key={`item-${item.id}`}>
            <td>{item.name}</td>
            <td>{item.price} Ft</td>
            <td>
                <button onClick={() => removeItem(item.id)}>Törlés</button>
            </td>
        </tr>
    );
}

function Table({items, removeItem}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Tétel</th>
                <th>Ár</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {items.map(item => Item(item, removeItem))}
            </tbody>
        </table>
    );
}

function itemReducer(items, action) {
    switch (action.type) {
        case 'add':
            return [...items, action.item];
        case 'remove':
            return items.filter(item => item.id !== action.id);
    }
}
```

### React component
