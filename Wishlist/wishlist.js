document.getElementById("wishlistForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: name.value.trim(),
    email: email.value.trim(),
    wishlist: wishlist.value.trim(),
    time: new Date().toLocaleString()
  };

  const list = JSON.parse(localStorage.getItem("wishlists")) || [];
  list.push(data);
  localStorage.setItem("wishlists", JSON.stringify(list));

  this.reset();
  successMsg.style.display = "block";
  setTimeout(() => successMsg.style.display = "none", 3000);
});
