import './Resume.css'; 

function Resume() {
  return (
    <div className="container">
      <div className="header">
        <h1>สุทัศน์ ปัญญาสิริสุนทร</h1>
        <h2>Suthat Punyasirisoonthorn</h2>
        <p>Junior Web Developer | YouTuber</p>
        <p className="contact">
          📧 tety12308@hotmail.com | 📞 093-910-6716 | 💻{' '}
          <a href="https://github.com/Setsukun1997" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
      
      <div className="section">
        <h2>เกี่ยวกับฉัน</h2>
        <img
          src="/assets/image/myprofile.jpg"
          alt="รูปโปรไฟล์ของสุทัศน์"
          style={{ width: '150px', float: 'right', marginLeft: '20px', borderRadius: '50%' }}
        />
        <p>
          นักพัฒนาเว็บไซต์ที่มีความเชี่ยวชาญด้าน HTML, CSS, JavaScript และสามารถ deploy เว็บไซต์จริงผ่าน GitHub Pages ได้
          มีความสามารถในการแก้ไขปัญหาโค้ดและออกแบบ UI/UX ให้เหมาะกับผู้ใช้งาน พร้อมเรียนรู้ backend เพื่อพัฒนาเป็น Full Stack Developer
        </p>
      </div>

      <div className="section">
        <h2>ทักษะ</h2>
        <div className="skills">
          {[
            'HTML',
            'CSS',
            'JavaScript',
            'GitHub Pages',
            'Responsive Design',
            'Microsoft Office',
            'Node.js ',
            'PHP ',
          ].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
      <div className="section">
        <h2>ประสบการณ์ด้านเว็บ</h2>
        <ul>
          <li>สร้างเว็บไซต์ส่วนตัวแบบ multi-page ด้วย HTML/CSS และฝัง YouTube, QR Code ด้วย JavaScript</li>
          <li>ปรับแต่ง layout ให้ responsive ทั้งบนมือถือและ desktop</li>
          <li>แก้ไขโค้ดให้แสดงผลได้จริงและ deploy ผ่าน GitHub Pages</li>
          <li>ทดลองใช้ backend เบื้องต้นเพื่อเตรียมพัฒนา full stack</li>
        </ul>
      </div>
      <div className="section">
        <h2>การศึกษา</h2>
        <ul>
          <li>2015 - 2017: ปวช. สาขาคอมพิวเตอร์ธุรกิจ (เกรดเฉลี่ย 3.80)</li>
          <li>2018 - 2019: ปวส. สาขาคอมพิวเตอร์ธุรกิจ (เกรดเฉลี่ย 3.08)</li>
        </ul>
      </div>

      <div className="section">
        <h2>ประวัติการทำงาน</h2>
        <ul>
          <li>2016 - 2025 (ครึ่งปีแรก): พนักงานครัว MK Restaurant — เรียนรู้การทำงานเป็นทีมและความรับผิดชอบ</li>
          <li>2025 (ครึ่งปีหลัง - ปัจจุบัน): พนักงานคีย์ข้อมูล GEMINI Creation — ดูแลการปริ้นโมเดล 3D สำหรับผลิตเครื่องประดับ</li>
        </ul>
      </div>
      <div className="back-btn">
        <button onClick={() => window.location.href = '/'}>กลับหน้าหลัก</button>
      </div>
    </div>
  );
}

export default Resume;
