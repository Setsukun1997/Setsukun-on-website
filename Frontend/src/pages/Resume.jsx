import React from 'react';
import './Resume.css';
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
function Resume() {
  const handleDownload = () => {
    const element = document.getElementById('resume-content');
    html2pdf().from(element).save('resume.pdf');
  };
  return (
    <div className="resume-container">
      <header className="header">
        <img
          src="/myprofile.jpg"
          alt="รูปโปรไฟล์"
          className="profile-img"
        />
        <h1 className="name">Suthat Punyasirisoonthorn</h1>
        <p className="title">Full Stack Developer</p>
      </header>

      <section className="section">
        <h2 className="section-title">ข้อมูลติดต่อ</h2>
        <ul className="list">
          <li>📍 45/1 หอพักบ้านไทรงาม พระราม 3 ซอย 1 เขตบางคอแหลม กรุงเทพฯ 10120 , ประเทศไทย</li>
          <li>📧 tety12308@hotmail.com</li>
          <li>🌐 github.com/Setsukun1997</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">ทักษะหลัก</h2>
        <ul className="list">
          <li>React + Vite, Node.js, MongoDB</li>
          <li>Deploy บน Render, GitHub Actions</li>
          <li>แก้ไข error build, .env, routing</li>
          <li>ทำงานจากมือถือด้วย Acode + Termux</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">ประสบการณ์ล่าสุด</h2>
        <ul className="list">
          <li>สร้างระบบ login/register เชื่อม backend จริง</li>
          <li>แก้ไข JSX, import conflict, deploy fail</li>
          <li>ออกแบบหน้า Resume ให้ดาวน์โหลดได้</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">เป้าหมาย</h2>
        <p>สร้างเว็บไซต์ที่เล่าเรื่องการเป็น dev จากมือถือ และสร้างแรงบันดาลใจให้คนอื่นเริ่มต้นได้แบบไม่ต้องรอเครื่องแรง</p>
      </section>

      <footer className="footer">
        <button onClick={() => window.location.href = '/'} className="back-btn">
          ← กลับหน้าแรก
        </button>
      </footer>
    </div>
  );
};

export default Resume;











