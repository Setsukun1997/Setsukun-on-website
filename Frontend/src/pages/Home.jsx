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

      import { Link } from 'react-router-dom';

const SocialButtons = () => {
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 16px',
    margin: '8px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    color: 'white'
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    
      <button
        onClick={() => window.open('https://www.facebook.com/SetsukinoZRaisenz', '_blank', 'noopener,noreferrer')}
        style={{ ...buttonStyle, backgroundColor: '#1877F2' }}
      >
        <img src="/facebook.png" alt="Facebook" style={{ height: '24px', marginRight: '8px' }} />
        Facebook
      </button>

  
      <button
        onClick={() => window.open('https://www.youtube.com/@Setsukinokun', '_blank', 'noopener,noreferrer')}
        style={{ ...buttonStyle, backgroundColor: '#FF0000' }}
      >
        <img src="/logoyoutube.png" alt="YouTube" style={{ height: '24px', marginRight: '8px' }} />
        YouTube
      </button>

      <button
        onClick={() => window.open('https://github.com/setsukun1997', '_blank', 'noopener,noreferrer')}
        style={{ ...buttonStyle, backgroundColor: '#333' }}
      >
        <img src="/github.png" alt="GitHub" style={{ height: '24px', marginRight: '8px' }} />
        GitHub
      </button>

      <button
        onClick={() => window.open('https://line.me/ti/p/~setsukun', '_blank', 'noopener,noreferrer')}
        style={{ ...buttonStyle, backgroundColor: '#00C300' }}
      >
        <img src="/line.png" alt="LINE" style={{ height: '24px', marginRight: '8px' }} />
        LINE
      </button>

      <Link to="/resume">
        <button style={{ ...buttonStyle, backgroundColor: '#6C63FF' }}>
          <img src="/resume.png" alt="Resume" style={{ height: '24px', marginRight: '8px' }} />
          Resume
        </button>
      </Link>
    </div>
  );
};

export default SocialButtons;

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
