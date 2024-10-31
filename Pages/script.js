document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('billingForm');
    const differentBillingCheckbox = document.getElementById('differentBilling');
    const sameAsShippingCheckbox = document.getElementById('sameAsShipping');

    differentBillingCheckbox.addEventListener('change', function() {
        sameAsShippingCheckbox.disabled = this.checked;
        if (this.checked) {
            sameAsShippingCheckbox.checked = false;
        }
    });

    sameAsShippingCheckbox.addEventListener('change', function() {
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const isLoggedIn = false; 

        if (!isLoggedIn) {
            alert('Please log in to proceed to payment.');
            window.location.href = './checkout/checkout.html';
        } else {
            alert('Form submitted! Proceeding to payment...');
            window.location.href = '../checkout.html'; 
        }
    });
});
