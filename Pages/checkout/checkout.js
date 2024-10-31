
document.addEventListener('DOMContentLoaded', function() {
    const confirmPaymentButton = document.getElementById('confirmPayment');
    confirmPaymentButton.addEventListener('click', function() {
        alert('Payment confirmed! Thank you for your purchase.');
        window.location.href = '../order complete/order.html';
    });
});
