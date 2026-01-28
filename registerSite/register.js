const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password.length < 8) {
    alert("Password must be between 8 and 16 characters.");
    return;
  }

  if (password.length > 16) {
    alert("Password must be between 8 and 16 characters.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const user = { email, username, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("🎉 Register successful!");
  window.location.href = "../loginSite/login.html";
});

// Toggle show/hide password
function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}
