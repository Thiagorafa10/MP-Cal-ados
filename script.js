const products = [
    { name: "Air Force", image: "imagens/modelo 1.jpeg", price: 100.00 },
    { name: "Adidas Campus", image: "imagens/modelo 2.jpeg", price: 100.00 },
    { name: "Adidas Campus", image: "imagens/modelo 3.jpeg", price: 100.00 },
    { name: "Adidas Campus", image: "imagens/modelo 4.jpeg", price: 100.00},
    { name: "Nike Air Max", image: "imagens/modelo 5.jpeg", price: 100.00 },
    { name: "Nike Air Max", image: "imagens/modelo 6.jpeg", price: 100.00 },
    { name: "Nike Air Max", image: "imagens/modelo 7.jpeg", price: 100.00 },
    { name: "Nike Air Max", image: "imagens/modelo 8.jpeg", price: 100.00 },
    { name: "Air Force", image: "imagens/modelo 9.jpeg", price: 100.00 },
    { name: "Nike Run", image: "imagens/modelo 10.jpeg", price: 100.00 },
    { name: "Nike Run", image: "imagens/modelo 11.jpeg", price: 100.00 },
    { name: "Nike Run", image: "imagens/modelo 12.jpeg", price: 100.00},
    { name: "mizuno wave", image: "imagens/modelo 13.jpeg", price: 100.00 },
    { name: "Nike TN", image: "imagens/modelo 14.jpeg", price: 100.00 },
    { name: "Nike TN", image: "imagens/modelo 15.jpeg", price: 100.00 },
    { name: "Lacoste", image: "imagens/modelo 16.jpeg", price: 100.00 }
];

const container = document.getElementById("products-container");

products.forEach((product) => {
    container.innerHTML += `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
        </div>
    `;
});