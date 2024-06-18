// Írj kód részletet, amelyben létrehozol 2 szám változót, majd ezek összegét letárolod egy új változóban!
let a = 5;
let b = 8;
let c = a + b;

// Írj kód részletet, amelyben létrehozol 2 akármilyen változót, majd azok értékeit megcseréled!
let a = 10;
let b = 20;
let tmp = a;
a = b;
b = tmp;

// Írj kód részletet, amelyben létrehozol egy 4 elemű számokat növekvő sorrendben tartalmazó tömböt! Cseréld meg az elemeit úgy, hogy azok csökkenő sorrendben
// legyenek!
let array = [1, 2, 3, 4];
let tmp;
tmp = array[0];
array[0] = array[3];
array[3] = tmp;
tmp = array[1];
array[1] = array[2];
array[2] = tmp;

// Írj kód részletet, amelyben létrehozol egy objektumot! Add ehhez az objektumhoz az elso és a masodik nevű kulcsot, amiknek az értéke egy-egy szám!
let obj;
obj.elso = 1;
obj.masodik = 2;

// Írj kód részletet, amelyben az előző feladatban lérehozott objektumban található értékeket megcsereléd!
let tmp = obj.elso;
obj.elso = obj.masodik;
obj.masodik = tmp;

// Írj kód részletet, amelyben létrehozol egy 5 elemű tömböt! Hozz létre egy változót, aminek az értéke kisebb, mint 5! Helyezd az újonnan létrehozott változóba
// a tömb azon indexű elemét, amennyi a változó értéke!
let array = ['a', 'b', 'c', 'd', 'e'];
let value = 3;
value = array[value];

// Írj kód részletet, amelyben létrehozol egy 3 elemű tömböt, aminek az elemei objektumok!
let array = [
    {name: 'Anna', age: 10},
    {name: 'Béla', age: 20},
    {name: 'Cézár', age: 30}
];

// Írj kód részletet, amelyben létrehozol egy 3 elemű tömböt, amelynek az elemei 3 elemű szám tömbök! A 2. tömb 2. elmenének értékét változtasd 10-re!
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
matrix[1][1] = 10;

// Írj kód részletet, amelyben létrehozol egy szám változót, majd egy újabb változóban letárolod, hogy a szám osztható 2-vel és 5-tel!
let a = 18;
let b = ((a % 2) === 0) && ((a % 5) === 0);

// Írj kód részletet, amelyben létrehozol egy 5 számot tartalmazó tömböt, majd egy új változóban letárolod ezek összegét!
let array = [1, 3, 5, 7, 9];
let sum = array[0] + array[1] + array[2] + array[3] + array[4];

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
