window.addEventListener("DOMContentLoaded", () => {
    const goHome = document.getElementById("goHome");
    if (goHome) {
        goHome.addEventListener("click", () => {
            window.location.href = "home.html"; // พาไปหน้า home.html
        });
    }
});
