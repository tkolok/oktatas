# 5. Óra

## HTML

```html
<html>
    <head>
        <!-- az oldal működéséhez szükséges információk, fájlok -->
    </head>
    <body>
        <!-- az oldal tartalma -->
    </body>
</html>
```

### Attribútumok

#### [id](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)

#### [class](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)

### [HTML elemek](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

#### [head](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)

#### [body](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)

#### [select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

```html
<select>
    <option value="1">Egy</option>
    <option value="2">Kettő</option>
    <option value="3">Három</option>
</select>
```

#### [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

```html
<textarea></textarea>
```

#### [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

<table>
    <thead>
        <tr>
            <th>Típus</th>
            <th>Szintaxis</th>
            <th>Megjelnítés</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text">szöveg (alapértelmezett)</a>
            </th>
            <td>
                <code>&lt;input&gt;</code>
            </td>
            <td>
                <input>
            </td>
        </tr>
        <tr>
            <th>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number">szám</a>
            </th>
            <td>
                <code>&lt;input type="number"&gt;</code>
            </td>
            <td>
                <input type="number">
            </td>
        </tr>
        <tr>
            <th>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date">dátum</a>
            </th>
            <td>
                <code>&lt;input type="date"&gt;</code>
            </td>
            <td>
                <input type="date">
            </td>
        </tr>
        <tr>
            <th>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox">checkbox</a>
            </th>
            <td>
                <code>&lt;input type="checkbox"&gt;</code>
            </td>
            <td>
                <input type="checkbox">
            </td>
        </tr>
    </tbody>
</table>

#### [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)

## HTML és JavaScript összekötése

Elérési útvonalak:
- `./`: (relatív)
- `../`:
- `https://...`:

### [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

### [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

### [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

```html
<html>
    <head>
        <script src="./index.js" type="module"></script>
    </head>
    <body>
        <input type="number">
        <button id="increase">+</button>
        <button id="decrease">-</button>
        <span id="value">0</span>
    </body>
</html>
```

```javascript
let input = document.querySelector('input');
let span = document.querySelector('#value');
let value = 0;

document.querySelector('#increase').addEventListener('click', () => span.innerHTML = `${value + input.valueAsNumber}`);
document.querySelector('#decrease').addEventListener('click', () => span.innerHTML = `${value - input.valueAsNumber}`);
```

## Házi feladat