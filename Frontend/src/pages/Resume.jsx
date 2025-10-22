import React from 'react';
import { useNavigate } from 'react-router-dom';
function Resume() {
  return (
    <div className="resume-container" style={styles.container}>
      <header style={styles.header}>
        <img
          src="/myprofile.jpg"
          alt="รูปโปรไฟล์"
          style={styles.profileImage}
        />
        <h1 style={styles.name}>Suthat Setsukun</h1>
        <p style={styles.title}>Full Stack Developer</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>ข้อมูลติดต่อ</h2>
        <ul style={styles.list}>
          <li>📍 กรุงเทพฯ, ประเทศไทย</li>
          <li>📧 suthat@example.com</li>
          <li>🌐 github.com/Setsukun1997</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>ทักษะหลัก</h2>
        <ul style={styles.list}>
          <li>React + Vite, Node.js, MongoDB</li>
          <li>Deploy บน Render, GitHub Actions</li>
          <li>แก้ไข error build, .env, routing</li>
          <li>ทำงานจากมือถือด้วย Acode + Termux</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>ประสบการณ์ล่าสุด</h2>
        <ul style={styles.list}>
          <li>สร้างระบบ login/register เชื่อม backend จริง</li>
          <li>แก้ไข JSX, import conflict, deploy fail</li>
          <li>ออกแบบหน้า Resume ให้ดาวน์โหลดได้</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>เป้าหมาย</h2>
        <p>สร้างเว็บไซต์ที่เล่าเรื่องการเป็น dev จากมือถือ และสร้างแรงบันดาลใจให้คนอื่นเริ่มต้นได้แบบไม่ต้องรอเครื่องแรง</p>
      </section>

      <footer style={styles.footer}>
        <button onClick={() => window.location.href = '/'} style={styles.backButton}>
          ← กลับหน้าแรก
        </button>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '2rem',
    fontFamily: 'sans-serif',
    lineHeight: 1.6,
    backgroundColor: '#fff',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  profileImage: {
    width: '120px',
    borderRadius: '50%',
    marginBottom: '1rem',
  },
  name: {
    fontSize: '2rem',
    margin: 0,
  },
  title: {
    fontSize: '1.2rem',
    color: '#666',
  },
  section: {
    marginBottom: '2rem',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    borderBottom: '2px solid #eee',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  footer: {
    textAlign: 'center',
    marginTop: '3rem',
  },
  backButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  }
};

export default Resume;

