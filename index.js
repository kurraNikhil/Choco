let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Amul',
        image: 'https://m.media-amazon.com/images/I/41EDA8+SbXL.jpg',
        price: 120
    },
    {
        id: 2,
        name: 'Cadbury',
        image: 'https://m.media-amazon.com/images/I/61ocWwtSKXL._SX679_.jpg',
        price: 120
    },
    {
        id: 3,
        name: 'Fabelle',
        image: 'https://m.media-amazon.com/images/I/81vc-FinxrL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg',
        price: 120
    },
    {
        id: 4,
        name: 'Mason & Co.',
        image: 'https://m.media-amazon.com/images/I/61vhKQCypyL._SX679_.jpg',
        price: 120
    },
    {
        id: 5,
        name: 'Hersheys Kisses',
        image: 'https://m.media-amazon.com/images/I/512DJzwos7L._SX679_.jpg',
        price: 120
    },
    {
        id: 6,
        name: 'Dark Chocolate',
        image: 'https://m.media-amazon.com/images/I/41XQL-1sVTS.jpg',
        price: 120
    },
    {
        id: 7,
        name: 'Darkins Dark',
        image: 'https://m.media-amazon.com/images/I/81Yny1O204L._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg',
        price: 120
    },
    {
        id: 8,
        name: 'Schmitten Luxury',
        image: 'https://m.media-amazon.com/images/I/61yMK+qiqqL._SX679_.jpg',
        price: 120
    },
    {
        id: 9,
        name: 'HERSHEYS',
        image: 'https://m.media-amazon.com/images/I/71qDN1el-BL._AC_UL480_QL65_.jpg',
        price: 120
    },
    {
        id: 10,
        name: 'Schmitten Jupiter',
        image: 'https://m.media-amazon.com/images/I/5108rXVpEzL._SX679_.jpg',
        price: 120
    },
    {
        id: 11,
        name: 'Little Joys',
        image: 'https://m.media-amazon.com/images/I/81uwKTmvHYL._SX679_.jpg',
        price: 120
    },
    {
        id: 12,
        name: 'Daarzel Dark',
        image: 'https://m.media-amazon.com/images/I/619q5R6BbXL._SX679_.jpg',
        price: 120
    },
    {
        id: 13,
        name: 'Assorted Chocolate',
        image: 'https://m.media-amazon.com/images/I/71D5qbqkXxL._SX679_.jpg',
        price: 120
    },
    {
        id: 14,
        name: 'Cocoacraft',
        image: 'https://m.media-amazon.com/images/I/51SuNVQnwJL._SX300_SY300_QL70_FMwebp_.jpg',
        price: 120
    },
    {
        id: 14,
        name: 'Cadbury Celebrations',
        image: 'https://m.media-amazon.com/images/I/71QaPEv98AL._SX679_PIbundle-10,TopRight,0,0_AA679SH20_.jpg',
        price: 120
    }


];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}     
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}