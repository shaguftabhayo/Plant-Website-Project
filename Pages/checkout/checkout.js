
document.addEventListener('DOMContentLoaded', function() {
    const confirmPaymentButton = document.getElementById('confirmPayment');
    confirmPaymentButton.addEventListener('click', function() {
        alert('Payment confirmed! Thank you for your purchase.');
        window.location.href = '../order complete/order.html';
    });
});


function saveOrderDetails() {
    const cart = getCart();
    const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 0; // Adjust as needed
    const taxes = 0; // Adjust as needed
    const discount = cart.couponDiscount;
    const total = subtotal + shipping + taxes - discount;

    const orderDetails = {
        items: cart.items,
        subtotal: subtotal,
        shipping: shipping,
        taxes: taxes,
        discount: discount,
        total: total
    };

    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
}

