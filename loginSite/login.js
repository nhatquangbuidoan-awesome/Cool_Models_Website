const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    message.textContent = "Please fill in all fields!";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    message.textContent = "Wrong username or password";
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  alert("🎉 Login successful!");
  window.location.href = "../landingPage/index.html";
});

// Show / Hide password
function togglePassword() {
  const passwordInput = document.getElementById("password");
  passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";
}
