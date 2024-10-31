function addToCart(name, price, image) {
  const cart = JSON.parse(localStorage.getItem('cart') || '{"items":[], "couponDiscount":0}');
  const newItem = {
      id: Date.now(),
      name: name,
      price: price,
      quantity: 1,
      image: image,
      category: "Indoor Plant"
  };

  const existingItem = cart.items.find(item => item.name === newItem.name);
  if (existingItem) {
      existingItem.quantity += 1;
  } else {
      cart.items.push(newItem);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Item added to cart!');
}