// Írj kód részletet, amelyben létrehozol 2 szám változót, majd ezek összegét letárolod egy új változóban!
let a = 5;
let b = 8;
let c = a + b;

// Írj kód részletet, amelyben létrehozol 2 akármilyen változót, majd azok értékeit megcseréled!
let a = 10;
let b = 20;
let c = a;
a = b;
b = c;

// Írj kód részletet, amelyben létrehozol egy szám változót, majd egy újabb változóban letárolod, hogy a szám osztható 2-vel és 5-tel!
let a = 18;
let b = ((a % 2) === 0) && ((a % 5) === 0);

// Írj kód részletet, amelyben létrehozol egy 5 számot tartalmazó tömböt, majd egy új változóban letárolod ezek összegét!
let a = [1, 3, 5, 7, 9];
let b = a[0] + a[1] + a[2] + a[3] + a[4];

// Írj kód részletet, amelyben létrehozol 3 akármilyen változót, majd ezek értékét egy object típusú változóba lemented! Ezután írasd ki az objektum összes
// attribútumát!
let age = 20;
let name = 'Icuka';
let address = 'Budapest';
let obj = {
    address: address,
    age: age,
    name: name
};
console.log(obj.name, obj.age, obj.address);
