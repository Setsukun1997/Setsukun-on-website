import React from 'react';
import './Resume.css';
import { useNavigate } from 'react-router-dom';

function Resume() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="header">
        <h1>สุทัศน์ ปัญญาสิริสุนทร</h1>
        <h2>Suthat Punyasirisoonthorn</h2>
        <p>Junior Web Developer | YouTuber</p>
        <p className="contact">
          📧 tety12308@hotmail.com | 📞 093-910-6716 | 💻{' '}
          <a href="https://github.com/Setsukun1997" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </header>

      <section className="profile-section">
        <h2>เกี่ยวกับฉัน</h2>
        <img src="/myprofile.jpg" alt="รูปโปรไฟล์" className="profile-img/>
        <p>
          ฉันเป็นนักพัฒนาเว็บไซต์ที่มีความสามารถในการใช้ HTML, CSS, JavaScript และสามารถ deploy เว็บไซต์ผ่าน GitHub Pages ได้
          มีความรู้ด้าน Responsive Design และ Microsoft Office
        </p>
      </section>

      <div className="profile-section">
        <h2>ทักษะ</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>GitHub Pages</span>
          <span>Responsive Design</span>
          <span>Microsoft Office</span>
          <span>Node.js</span>
          <span>PHP</span>
        </div>
      </section>

      <section className="section">
        <h2>ประสบการณ์</h2>
        <ul>
          <li>สร้างเว็บไซต์ด้วย HTML และ CSS</li>
          <li>ใช้ GitHub Pages ในการเผยแพร่เว็บไซต์</li>
          <li>ออกแบบเว็บไซต์ให้รองรับทุกอุปกรณ์</li>
        </ul>
      </section>

      <section className="section">
        <h2>การศึกษา</h2>
        <ul>
          <li>ประกาศนียบัตรวิชาชีพขั้นสูง  สาขาคอมพิวเตอร์ธุรกิจ (GPA 3.08) </li>
          <li>หลักสูตรออนไลน์ด้าน Web Development</li>
        </ul>
      </section>

      <section className="section">
        <h2>ประวัติการทำงาน</h2>
        <ul>
          <li> MK Restuarant 2016 - 2025 (January - June) : Kitchen Staff </li>
          <li> Gemini Creation 2025 (At Present) : Data Entry Staff</li>
        </ul>
      </section>

      <div className="back-btn">
        <button onClick={() => navigate('/')}>กลับหน้าหลัก</button>
      </div>
    </div>
  );
}

export default Resume;





