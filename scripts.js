// Javadocument.addEventlet total = 0;
Documentlet carrito = [];
Listener('DOMContentLoaded', () => {
    const cart = [];
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            
            const product = { name, price };
            cart.push(product);
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += product.price;
        });

        totalDisplay.textContent = total.toFixed(2);
    }
});Script Document