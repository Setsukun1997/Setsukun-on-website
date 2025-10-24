import './Home.css';
import React, { useState } from 'react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const buttonStyle = {
    color: '#fff',
    border: 'none',
    padding: '0.6rem 1.2rem',
    margin: '0.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s',
  };

  const handlePopup = () => setShowPopup(!showPopup);

  return (
    <div style={{ padding: '2rem', textAlign: 'center', background: 'linear-gradient(to bottom right, #c2f0f7, #d2f7c2)', minHeight: '100vh' }}>
      <h1>ยินดีต้อนรับสู่ Setsukun Website 🎉</h1>
      <p>คลิกที่ปุ่มด้านล่างเพื่อเข้าชมผลงานและช่องทางติดต่อของเรา :)</p>

      <div style={{ marginTop: '2rem' }}>
        <a href="https://www.facebook.com/SetsukinoZRaisenz" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>
  <img src="/LogoFacebook.png" alt="Facebook" style={{ height: '24px' }} />
</button>

        </a>

        <a href="https://www.youtube.com/@Setsukinokun" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>
  <img src="/logoyoutube.png" alt="Facebook" style={{ height: '24px' }} />
</button>

        </a>

        <button onClick={handlePopup} style={{ ...buttonStyle, backgroundColor: '#00C300' }}>
          PopUp Line </button>

        <a href="./resume" target="_blank" rel="noopener noreferrer">
         <button style={buttonStyle}>
  <img src="/resume.png" alt="Facebook" style={{ height: '24px' }} />
Resume</button>
        </a>
      </div>

      {showPopup && (
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#fffbe6',
          border: '1px solid #ccc',
          borderRadius: '10px',
          display: 'inline-block',
          maxWidth: '400px'
        }}>
          <h2>📱 ติดต่อผ่าน LINE</h2>
          <p>แสกน QR Code หรือคลิกลิงก์ด้านล่างเพื่อแอดไลน์</p>
          <a href="https://line.me/ti/p/~setsukun1997" target="_blank" rel="noopener noreferrer">
            👉 line.me/ti/p/~setsukun1997
          </a>
        </div>
      )}

      <div style={{
        marginTop: '3rem',
        padding: '1rem',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'inline-block'
      }}>
        <h2>🌟 ผลงานของเรา</h2>
        <p>ดูโปรเจกต์ทั้งหมดได้ที่ <a href="https://github.com/Setsukun1997" target="_blank" rel="noopener noreferrer">GitHub ของเรา</a></p>
      </div>
    </div>
  );
}
