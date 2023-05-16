const itemList = document.querySelector('#itemList');
const list = [];
const newItem = document.querySelector('#newItem');
const newItemPrice = document.querySelector('#newItemPrice');
const totalPrice = document.querySelector('#totalPrice');

document.querySelector('#addNewItem').addEventListener('click', addNewItem);

function addNewItem() {
    if (newItem.value.length > 0 && newItemPrice.valueAsNumber > 0) {
        list.push(new Item(newItem.value, newItemPrice.valueAsNumber));
        updateItemList();
    }
}

function updateItemList() {
    itemList.innerHTML = list.map(item => item.innerHTML).join('');
    itemList.querySelectorAll('tr').forEach((row, index) => {
        const count = row.querySelector('.count');
        const item = list[index];

        row.querySelector('.decrease').addEventListener('click', () => {
            item.count--;
            count.innerHTML = item.count;
            updateTotalPrice();
        });
        row.querySelector('.increase').addEventListener('click', () => {
            item.count++;
            count.innerHTML = item.count;
            updateTotalPrice();
        });
        row.querySelector('.remove').addEventListener('click', () => {
            list.splice(index, 1);
            updateItemList();
        });
    });

    updateTotalPrice();
}

function updateTotalPrice() {
    totalPrice.innerHTML = `${list.reduce((ret, item) => ret + item.price * item.count, 0)} Ft`;
}

class Item {
    _count = 1;
    name;
    price;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get count() {
        return this._count;
    }

    get innerHTML() {
        return `
            <tr>
                <td>
                    <input type="checkbox">
                </td>
                <td>${this.name}</td>
                <td>${this.price} Ft</td>
                <td>
                    <button class="decrease">-</button>
                    <span class="count">${this.count}</span>
                    <button class="increase">+</button>
                </td>
                <td>
                    <button class="remove">Törlés</button>
                </td>
            </tr>`;
    }

    set count(value) {
        this._count = value;

        if (this._count < 1) {
            this._count = 1;
        }
    }
}
