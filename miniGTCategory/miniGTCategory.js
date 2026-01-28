function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = {
    name: name,
    price: price,
    image: image,
    quantity: 1
  };

  // Kiểm tra sản phẩm đã tồn tại chưa
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
