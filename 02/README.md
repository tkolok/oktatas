# 2. Óra

## if...else utasítás

```javascript
if (number % 2 === 0) {
    console.log('Ez egy páros szám');
} else {
    console.log('Ez egy páratlan szám');
}
```

## switch utasítás

```javascript
switch (fruit) {
    case 'alma':
        // ...
        break;
    case 'körte':
        // ...
        break;
    default:
        // ...
}
```

## for utasítás

```javascript
for (let i = 0; i < array.length; i++) {
    console.log(`A tömb ${i}. eleme ${array[i]}.`);
}
```

## while utasítás

```javascript
let number = 0;
while (number < 10) {
    console.log(number++);
}
```

## do...while utasítás

```javascript
let number = 0;
do {
    console.log(number++);
} while (number < 10);
```

## break utasítás

```javascript
let number = 0;
while (true) {
    console.log(number++);
    if (number >= 10) {
        break;
    }
}
```

## continue utasítás

```javascript
let number = 0;
while (number < 10) {
    number++;
    if (number % 2 === 0) {
        continue;
    }
    console.log(number);
}
```

## Házi feladat

1. Írj kód részletet, amelyben