 // Initialize cart from localStorage
 function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : { items: [], couponDiscount: 0 };
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Render cart items
function renderCart() {
    const cart = getCart();
    const cartContainer = document.getElementById('cartItems');
    
    if (cart.items.length === 0) {
        cartContainer.innerHTML = '<div class="text-center py-5">Your cart is empty</div>';
        updateSummary();
        return;
    }

    cartContainer.innerHTML = cart.items.map(item => `
        <div class="cart-item border-bottom py-3 w-100" data-id="${item.id}">
            <div class="row align-items-center">
                <div class="col-4">
                    <div class="d-flex align-items-center">
                        <span class="remove-item me-2" onclick="removeItem(${item.id})">×</span>
                        <img src="${item.image}" alt="${item.name}" class="me-3">
                        <div>
                            <h6 class="mb-0">${item.name}</h6>
                            <small class="text-muted">${item.category}</small>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    $${item.price.toFixed(2)}
                </div>
                <div class="col-3">
                    <div class="quantity-control d-flex align-items-center">
                        <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="mx-3">${item.quantity}</span>
                        <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="col-3">
                    $${(item.price * item.quantity).toFixed(2)}
                </div>
            </div>
        </div>
    `).join('');

    updateSummary();
}

// Update quantity
function updateQuantity(itemId, change) {
    const cart = getCart();
    const item = cart.items.find(i => i.id === itemId);
    if (item) {
        const newQuantity = item.quantity + change;
        if (newQuantity > 0) {
            item.quantity = newQuantity;
            saveCart(cart);
            renderCart();
        }
    }
}

// Remove item
function removeItem(itemId) {
    const cart = getCart();
    cart.items = cart.items.filter(item => item.id !== itemId);
    saveCart(cart);
    renderCart();
}

// Update order summary
function updateSummary() {
    const cart = getCart();
    const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    const shipping = 0;
    const taxes = 0;
    const discount = cart.couponDiscount;
    const total = subtotal + shipping + taxes - discount;

    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('taxes').textContent = `$${taxes.toFixed(2)}`;
    document.getElementById('discount').textContent = `-$${discount.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Apply coupon
document.getElementById('applyCoupon').addEventListener('click', function() {
    const couponCode = document.getElementById('couponInput').value;
    if (couponCode.trim()) {
        const cart = getCart();
        cart.couponDiscount = 10; // Example discount
        saveCart(cart);
        renderCart();
        alert('Coupon applied successfully!');
    }
});

// Initial render
renderCart();