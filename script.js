document.querySelector(".login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // منع إرسال النموذج
  
    const usernameInput = document.querySelector('input[type="text"]').value.trim();
    const passwordInput = document.querySelector('input[type="password"]').value.trim();
  
    if (usernameInput === "admin" && passwordInput === "123456") {
      localStorage.setItem("loggedInAdmin", usernameInput); // تخزين الجلسة
      window.location.href = "dashboard.html"; // الانتقال إلى لوحة التحكم
    } else {
      alert("Invalid username or password.");
    }
  });
  