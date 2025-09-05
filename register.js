window.addEventListener("DOMContentLoaded", () => {
  const gohomeBtn = document.getElementById("gohomeBtn");
  if (gohomeBtn) {
    gohomeBtn.addEventListener("click", () => {
      window.location.href = "Register.html";
    });
  }