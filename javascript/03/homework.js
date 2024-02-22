// Írj functiont, amely 3 paramétert vár! Az első paraméter lehet `'+'`, `'-'`, `'*'`, `'/'`. Az első paramétertől függően összeadja, kivonja, szorozza, osztja
// a maradék 2 paramétert.
function hw1(operator, a, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

// Írj functiont, amely paraméterként vár egy számot, és ennyiszer írja ki a `'*'` karaktert!
// a)
function hw2a(number) {
    for (let i = 0; i < number; i++) {
        console.log('*');
    }
}

// b)
function hw2b(number) {
    console.log('*'.repeat(number));
}

// Írj functiont, amely paraméterként vár egy számot és egy stringet! Írjon ki annyi sort, amennyi a szám, és minden sorban annyiszor szerepeljen a string,
// amennyi a szám!
// a)
function hw3a(number, str) {
    let output = str;
    for (let i = 0; i < number; i++) {
        console.log(output);
        output += str;
    }
}

// b)
function hw3b(number, str) {
    for (let i = 1; i <= number; i++) {
        console.log(str.repeat(number));
    }
}

// Írj functiont, amely paraméterként nem meghatározott számú számot vár, majd összeadja őket!
function hw4(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

// Írj functiont, amely paraméterként nem meghatározott számú számot vár, majd felváltva összeadja, kivonja őket! (p1 + p2 - p3 + p4 - p5 + ...)
function hw5(...numbers) {
    return numbers.reduce((sum, number, index) => {
        if (index % 2 === 0) {
            return sum - number;
        } else {
            return sum + number;
        }
    });
}

// Írj functiont, amely paraméterként 3 stringet vár, majd visszatér egy objecttel, amelybe ezeket a paramétereket tároljuk, mint firstName, lastName, address!
function hw6(firstName, lastName, address) {
    return {
        address: address,
        firstName: firstName,
        lastName: lastName
    };
}

// Írj functiont, amely paraméterként vár egy számot, és nem meghatározott számú további paramétereket, majd visszatér ezek közül a szám indexű paraméterrel!
function hw7(index, ...params) {
    return params[index];
}