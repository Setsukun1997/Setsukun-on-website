import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ username: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
   
    if (loginData.username && loginData.password) {
      localStorage.setItem('authToken', 'mock-token');
      navigate('/home');
    }
  };

  const handleRegister = () => {
    if (
      registerData.username &&
      registerData.password &&
      registerData.password === registerData.confirmPassword
    ) {
      alert('สมัครสมาชิกสำเร็จ!');
      setShowRegister(false);
    } else {
      alert('กรุณากรอกข้อมูลให้ครบและรหัสผ่านต้องตรงกัน');
    }
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999
  };

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    zIndex: 1000,
    textAlign: 'center'
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    fontSize: '16px'
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff'
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>ยินดีต้อนรับ</h1>
      <button style={buttonStyle} onClick={() => setShowLogin(true)}>เข้าสู่ระบบ</button>
      <button style={buttonStyle} onClick={() => setShowRegister(true)}>ลงทะเบียน</button>

      {showLogin && (
        <>
          <div style={overlayStyle} onClick={() => setShowLogin(false)} />
          <div style={popupStyle}>
            <h2>เข้าสู่ระบบ</h2>
            <input
              style={inputStyle}
              type="text"
              placeholder="ชื่อผู้ใช้"
              value={loginData.username}
              onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
            />
            <input
              style={inputStyle}
              type="password"
              placeholder="รหัสผ่าน"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button style={buttonStyle} onClick={handleLogin}>เข้าสู่ระบบ</button>
            <button style={{ ...buttonStyle, backgroundColor: '#dc3545' }} onClick={() => setShowLogin(false)}>ปิด</button>
          </div>
        </>
      )}

      {showRegister && (
        <>
          <div style={overlayStyle} onClick={() => setShowRegister(false)} />
          <div style={popupStyle}>
            <h2>ลงทะเบียน</h2>
            <input
              style={inputStyle}
              type="text"
              placeholder="ชื่อผู้ใช้"
              value={registerData.username}
              onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
            />
            <input
              style={inputStyle}
              type="password"
              placeholder="รหัสผ่าน"
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            />
            <input
              style={inputStyle}
              type="password"
              placeholder="ยืนยันรหัสผ่าน"
              value={registerData.confirmPassword}
              onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
            />
            <button style={buttonStyle} onClick={handleRegister}>สมัครสมาชิก</button>
            <button style={{ ...buttonStyle, backgroundColor: '#dc3545' }} onClick={() => setShowRegister(false)}>ปิด</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
