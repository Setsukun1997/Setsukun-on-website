import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(true); 

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/home'); 
    }
  }, [navigate]);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const { username, password } = loginData;

    if (!username || !password) {
      setError('กรุณากรอกข้อมูลให้ครบ');
      return;
    }

    if (username === 'admin' && password === '1234') {
      localStorage.setItem('authToken', 'token');
      navigate('/home');
    } else {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="login-container">
      <h1>เข้าสู่ระบบ</h1>

      <input
        type="text"
        name="username"
        placeholder="ชื่อผู้ใช้"
        value={loginData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="รหัสผ่าน"
        value={loginData.password}
        onChange={handleChange}
      />

      <button onClick={handleLogin}>เข้าสู่ระบบ</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}