const form = document.getElementById("feedbackForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const review = document.getElementById("review").value.trim();

  if (!name || !email || !review) {
    alert("Please fill in all fields!");
    return;
  }

  const feedback = {
    name,
    email,
    review,
    time: new Date().toLocaleString()
  };

  // Lấy feedback cũ
  const feedbackList = JSON.parse(localStorage.getItem("feedbacks")) || [];

  // Thêm feedback mới
  feedbackList.push(feedback);

  // Lưu lại
  localStorage.setItem("feedbacks", JSON.stringify(feedbackList));

  form.reset();
  successMsg.style.display = "block";

  setTimeout(() => {
    successMsg.style.display = "none";
  }, 3000);
});
