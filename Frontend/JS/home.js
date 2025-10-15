window.addEventListener("DOMContentLoaded", () => {
  const gotoResumeBtn = document.getElementById("gotoResumeBtn");
  if (gotoResumeBtn) {
    gotoResumeBtn.addEventListener("click", () => {
      window.location.href = "Resume.html";
    });
  }

  const gotomyFacebookBtn = document.getElementById("gotomyFacebookBtn");
  if (gotomyFacebookBtn) {
    gotomyFacebookBtn.addEventListener("click", () => {
      window.open("https://web.facebook.com/SetsukinoZRaisenz", "_blank");
    });
  }

  const gotomyYoutubeBtn = document.getElementById("gotomyYoutubeBtn");
  if (gotomyYoutubeBtn) {
    gotomyYoutubeBtn.addEventListener("click", () => {
      window.open("https://www.youtube.com/@setsukinoraisenz4199", "_blank");
    });
  }
});
function showLoginPopup() {
  document.getElementById("loginPopup").style.display = "flex";
}

function hideLoginPopup() {
  document.getElementById("loginPopup").style.display = "none";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    alert("เข้าสู่ระบบสำเร็จ!");
    hideLoginPopup();
    button.closeBtn:hover {
  color: red;
  transform: scale(1.2);
}
  } else {
    alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
  }
}






