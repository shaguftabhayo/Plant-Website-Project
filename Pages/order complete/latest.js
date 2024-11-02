// Load cart data from localStorage on order completion page
function loadOrderCompletion() {
  const cart = JSON.parse(localStorage.getItem('cart')) || { items: [], couponDiscount: 0 };
  const orderItemsContainer = document.getElementById('orderItems');
  const subtotalElement = document.getElementById('subtotal');
  const shippingElement = document.getElementById('shipping');
  const taxesElement = document.getElementById('taxes');
  const discountElement = document.getElementById('discount');
  const totalElement = document.getElementById('total');

  // Render items or show a message if the cart is empty
  if (cart.items.length === 0) {
      orderItemsContainer.innerHTML = '<div class="text-center py-5">No items in order</div>';
      return;
  }

  // Render each item in the order with consistent alignment and layout
  orderItemsContainer.innerHTML = cart.items.map(item => `
      <div class="order-item border-bottom py-3" data-id="${item.id}">
          <div class="row align-items-center">
             
              <div class="col-4">
                  <h6 class="mb-0">${item.name}</h6>
                  <small class="text-muted">${item.category}</small>
              </div>
              <div class="col-2 text-center">$${item.price.toFixed(2)}</div>
              <div class="col-2 text-center">${item.quantity}</div>
              <div class="col-2 text-end">$${(item.price * item.quantity).toFixed(2)}</div>
          </div>
      </div>
  `).join('');

  // Calculate order summary
  const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.00; // Example static shipping rate
  const taxes = (subtotal * 0.08); // Example 8% tax rate
  const discount = cart.couponDiscount;
  const total = subtotal + shipping + taxes - discount;

  // Update summary on the page
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  shippingElement.textContent = `$${shipping.toFixed(2)}`;
  taxesElement.textContent = `$${taxes.toFixed(2)}`;
  discountElement.textContent = `-$${discount.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
}

// Load order completion data when the page is loaded
window.onload = loadOrderCompletion;
