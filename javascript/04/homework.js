class Person {
    age;
    name;
    weight;

    constructor(name, age, gender) {
        this.age = age;
        this.name = name;

        if (age < 15) {
            this.weight = age * 3;
        } else {
            if (gender === 'MALE') {
                this.weight = 80;
            } else {
                this.weight = 55;
            }
        }
    }

    birthday() {
        this.age++;
    }

    eat(food, amount) {
        this.weight += food.eat(amount);
    }
}

class Food {
    calorie;
    name;

    constructor(name, calorie) {
        this.calorie = calorie;
        this.name = name;
    }

    eat(amount) {
        return amount * this.calorie;
    }
}

class Fruit extends Food {
    eat(amount) {
        return super.eat(amount) * .75;
    }
}

class Sweetness extends Food {
    eat(amount) {
        return super.eat(amount) * 1.5;
    }
}

// Tesztelés
const banana = new Fruit('banán', 1);
const chocolate = new Sweetness('csoki', 1);
const meat = new Food('hús', 1);
const anna = new Person('Anna', 12, 'FEMALE');
const peter = new Person('Péter', 25, 'MALE');

console.log('Anna súlya', anna.weight);
console.log('Péter súlya', peter.weight);
anna.eat(meat, 1);
console.log('Anna súlya', anna.weight);
anna.eat(banana, 2);
console.log('Anna súlya', anna.weight);
peter.eat(banana, 2);
console.log('Péter súlya', peter.weight);
peter.eat(chocolate, 2);
console.log('Péter súlya', peter.weight);
