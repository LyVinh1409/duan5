// This file contains JavaScript code for interactivity on the website, such as handling user events, managing the shopping cart, and fetching product data.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize shopping cart
    let cart = [];

    // Function to add product to cart
    function addToCart(product) {
        cart.push(product);
        updateCartCount();
    }

    // Function to update cart count display
    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    // Example of fetching product data (this would typically be done via an API)
    function fetchProducts() {
        // Simulated product data
        const products = [
            { id: 1, name: 'Product 1', price: 100 },
            { id: 2, name: 'Product 2', price: 150 },
            { id: 3, name: 'Product 3', price: 200 }
        ];

        // Render products to the page
        const productListElement = document.getElementById('product-list');
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${JSON.stringify(product)})">Add to Cart</button>
            `;
            productListElement.appendChild(productElement);
        });
    }

    // Call fetchProducts to load products on page load
    fetchProducts();
});