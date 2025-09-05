window.addEventListener("DOMContentLoaded", () => {
  const gohomeBtn = document.getElementById("gohomeBtn");
  if (gohomeBtn) {
    gohomeBtn.addEventListener("click", () => {
      window.location.href = "index.html"; // เปลี่ยนจาก home.html เป็น index.html
    });
  }
});


