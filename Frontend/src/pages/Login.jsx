import React, { useState } from 'react';

function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      alert('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
      return;
    }

    try {
      const res = await fetch('https://setsukun-on-website.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      if (res.ok) {
        alert('เข้าสู่ระบบสำเร็จ!');
        window.location.href = '/home';
      } else {
        alert(data.error || 'เข้าสู่ระบบไม่สำเร็จ');
      }
    } catch (err) {
      alert('เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>เข้าสู่ระบบ / ลงทะเบียน</h1>
      <div style={{ marginTop: '1rem' }}>
        <button
          style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
          onClick={() => setShowLoginForm(true)}
        >
          เข้าสู่ระบบ
        </button>
        <button
          style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
          onClick={() => setShowRegisterForm(true)}
        >
          ลงทะเบียน
        </button>
      </div>

      {showLoginForm && (
        <div style={{ marginTop: '2rem' }}>
          <h2>เข้าสู่ระบบ</h2>
          <input
            type="text"
            placeholder="ชื่อผู้ใช้"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ margin: '10px', padding: '8px', width: '200px' }}
          />
          <br />
          <input
            type="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: '10px', padding: '8px', width: '200px' }}
          />
          <br />
          <button
            onClick={handleLogin}
            style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
          >
            ยืนยัน
          </button>
        </div>
      )}

      {showRegisterForm && (
        <div style={{ marginTop: '2rem' }}>
          <h2>ลงทะเบียน</h2>
          <p>ยังไม่ได้เชื่อม API register — ถ้านายอยากให้เราช่วยเขียนก็สั่งได้เลย 😎</p>
        </div>
      )}
    </div>
  );
}

export default Login;
