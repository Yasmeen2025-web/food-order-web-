// js/script.js
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    // هنا ممكن تضيف تحقق أو تحويل لصفحة dashboard.html
    alert("Login successful! Redirecting...");
    window.location.href = "dashboard.html";
  });
  