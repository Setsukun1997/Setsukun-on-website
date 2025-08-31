window.addEventListener("DOMContentLoaded", () => {
  const goHomeBtn = document.getElementById("goHomeBtn");
  if (goHomeBtn) {
   goHomeBtn.addEventListener("click", () => {
   window.location.href = "home.html";
   if (window.location.pathname.includes("index.html")) {
  }
});
 
