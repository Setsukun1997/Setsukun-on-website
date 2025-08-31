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



