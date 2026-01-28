document.getElementById("reportForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: name.value.trim(),
    email: email.value.trim(),
    report: report.value.trim(),
    time: new Date().toLocaleString()
  };

  const reports = JSON.parse(localStorage.getItem("reports")) || [];
  reports.push(data);
  localStorage.setItem("reports", JSON.stringify(reports));

  this.reset();
  successMsg.style.display = "block";
  setTimeout(() => successMsg.style.display = "none", 3000);
});
