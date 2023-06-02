const fs = require('fs'), catalog = document.querySelector('.catalog');
// let json = fs.readFileSync("data.json", "utf-8");
// let data = JSON.parse(json);
// console.log(data)
data.forEach((el, idx) => {
    catalog.innerHTML += `<div class="card">
                                <div  style="text-align: end; font-size: 20px;"><i class="fa-regular fa-heart"></i></div>
                                <img src="img/${idx++}.png" alt="${el.name}" class="product-photo">
                                <div class="name-and-price display-f">
                                    <p class="name-of-product size-24">${el.name}</p>
                                    <p class="price-of-product size-24"><span class="bold">${el.price}</span>₽/кг</p>
                                </div>
                                <p class="description-of-product">${el.description}</p>
                                <button class="buy-product-button">КУПИТЬ</button>
                        </div>`;
});