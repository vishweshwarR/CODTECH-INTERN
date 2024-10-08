const products = [
    { id: 1, name: "Product 1", price: 29.99, image: "images/product1.jpg" },
    { id: 2, name: "Product 2", price: 49.99, image: "images/product2.jpg" },
    { id: 3, name: "Product 3", price: 19.99, image: "images/product3.jpg" },
    { id: 4, name: "Product 4", price: 39.99, image: "images/product4.jpg" },
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById("productList");
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
    }
}

function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    cartCount.textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", displayProducts);
