function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch('https://your-backend-url.com/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(res => {
    if (res.ok) {
      window.location.href = 'https://setsukun-on-website.onrender.com/index.html';
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  })
  .catch(err => {
    console.error(err);
    alert('เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์');
  });
}
