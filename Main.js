window.addEventlistener("DOMContentLoaded", () => {
  const goHomeBtn = document.getElementById("goHomeBtn");
  if (goHomeBtn) {
   goHomeBtn.addEventlistener("click", () => {
   window.location.href = "home.html";
   if (window.location.pathname.includes("index.html")) {
  }
});
 
