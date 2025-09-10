fetch('https://your-backend.com/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, password })
})
.then(res => res.json())
.then(data => {
  if (data.success) {
    window.location.href = 'home.html';
  } else {
    alert('รหัสผ่านไม่ถูกต้อง');
  }
});