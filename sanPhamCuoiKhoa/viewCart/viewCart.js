// ==========================
// CART STATE
// ==========================
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let appliedVoucher = 0;

// Tự thêm checked nếu cart cũ chưa có
cart.forEach(item => {
  if (item.checked === undefined) item.checked = true;
});

// ==========================
// INIT
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  saveCart(false);
});

// ==========================
// RENDER CART
// ==========================
function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "cart-row";

    row.innerHTML = `
      <input 
        type="checkbox" 
        ${item.checked ? "checked" : ""}
        onchange="toggleCheck(${index})"
      >

      <img src="${item.image}" alt="${item.name}">

      <div class="name">${item.name}</div>

      <div class="qty">
        <button onclick="changeQty(${index}, -1)">−</button>
        <span>${item.quantity}</span>
        <button onclick="changeQty(${index}, 1)">+</button>
      </div>

      <div class="price">
        ${formatPrice(item.price * item.quantity)} VND
      </div>

      <button onclick="removeItem(${index})">✖</button>
    `;

    cartList.appendChild(row);
  });
}

// ==========================
// CHECKBOX
// ==========================
function toggleCheck(index) {
  cart[index].checked = !cart[index].checked;
  saveCart();
}

// ==========================
// QUANTITY
// ==========================
function changeQty(index, delta) {
  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
}

// ==========================
// REMOVE
// ==========================
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}

// ==========================
// SAVE
// ==========================
function saveCart(update = true) {
  localStorage.setItem("cart", JSON.stringify(cart));
  if (update) {
    renderCart();
    updateTotal();
  } else {
    renderCart();
    updateTotal();
  }
}

// ==========================
// TOTAL (CHỈ TÍNH ITEM ĐƯỢC CHECK)
// ==========================
function updateTotal() {
  let total = cart.reduce((sum, item) => {
    if (!item.checked) return sum;
    return sum + item.price * item.quantity;
  }, 0);

  total -= appliedVoucher;
  if (total < 0) total = 0;

  document.getElementById("total").innerText = formatPrice(total);
  document.getElementById("total-price").innerText = formatPrice(total);
}

// ==========================
// FORMAT
// ==========================
function formatPrice(number) {
  return number.toLocaleString("vi-VN");
}
