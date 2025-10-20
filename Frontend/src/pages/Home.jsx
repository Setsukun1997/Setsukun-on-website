import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("คุณได้ออกจากระบบแล้ว");
    navigate("/");
  };

  return (
    <div className="home-container">
      <button className="logout-btn" onClick={handleLogout}>ออกจากระบบ</button>
      <h1>ยินดีต้อนรับเข้าสู่ Website on Setsukinokun</h1>
      <p><b>ทดลองเขียนเว็บไซต์ด้วยภาษา HTML และ Javascript เพื่อนำไปต่อยอดในอนาคต</b></p>

      <a href="/resume">
        <button style={{ backgroundColor: '#7e57c2', color: 'white' }}>
          <img src="/icon.jpg" alt="resume" style={{ height: '24px' }} />
          ไปที่หน้าเกี่ยวกับเรา
        </button>
      </a>

      <button onClick={() => setShowPopup(true)} style={{ backgroundColor: '#4caf50', color: 'white' }}>
        <img src="/iconLine.png" alt="line" style={{ height: '24px' }} />
        ติดต่อเรา
      </button>

      <a href="https://www.facebook.com/SetsukinoZRaisenz" target="_blank" rel="noopener noreferrer">
        <button style={{ backgroundColor: '#3b5998', color: 'white' }}>
          <img src="/LogoFacebook.png" alt="Facebook" style={{ height: '30px' }} />
          ไป Facebook ของเรา
        </button>
      </a>

      <a href="https://www.youtube.com/@Setsukinokun" target="_blank" rel="noopener noreferrer">
        <button style={{ backgroundColor: '#e53935', color: 'white' }}>
          <img src="/logoyoutube.png" alt="YouTube" style={{ height: '30px', verticalAlign: 'middle', marginRight: '8px' }} />
          ไปที่ Youtube ของเรา
        </button>
      </a>

      <h2>Video แนะนำช่อง Youtube ของเรา</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/htAQmD0zjEE?si=9mpieBHNsoNlS7Ub"
        title="ตัวอย่างวิดีโอแนะนำตัว"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      {showPopup && (
        <div className="popup">
          <span onClick={() => setShowPopup(false)} style={{ position: 'absolute', top: 20, right: 30, color: '#fff', fontSize: 30, cursor: 'pointer' }}>
            &times;
          </span>
          <img src="/MyQRCodeLine.jpeg" alt="Line QR Code" style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </div>
      )}
    </div>
  );
}

export default Home;
