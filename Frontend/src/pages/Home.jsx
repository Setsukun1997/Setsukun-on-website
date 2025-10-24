import React from 'react';

export default function Home() {
  return (
    <div className="home-container" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>ยินดีต้อนรับสู่ Setsukun Website 🎉</h1>
      <p>คลิกที่ลิงก์ด้านล่างเพื่อเข้าสู่เว็บไซต์ของเรา :) มีความสุขกับการท่องเว็บ!</p>

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        display: 'inline-block'
      }}>
        <h2>🌟 ผลงานของเรา</h2>
        <p>ดูโปรเจกต์ทั้งหมดได้ที่ <a href="https://github.com/Setsukun1997" target="_blank" rel="noopener noreferrer">GitHub ของเรา</a></p>
      </div>
    </div>
  );
}
