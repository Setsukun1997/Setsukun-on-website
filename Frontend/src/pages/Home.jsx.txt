import './Home.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
const [showPopup, setShowPopup] = useState(false);
  return (
  <button style={{
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    cursor: 'pointer'
  }}
  onClick={handleLogout}
>
  ออกจากระบบ
</button>
  <div className="home-container">
      <h1>ยินดีต้อนรับสู่ Setsukun Website 🎉</h1>
      <p>เชื่อมต่อกับฉันผ่านช่องทางต่าง ๆ ด้านล่างนี้</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
        
        <button
          onClick={() => window.open('https://www.facebook.com/SetsukinoZRaisenz', '_blank', 'noopener,noreferrer')}
          style={{ ...buttonStyle, backgroundColor: '#1877F2' }}
        >
          <img src="/LogoFacebook.png" alt="Facebook" style={{ height: '24px', marginRight: '8px' }} />
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
          onClick={() => setShowPopup(true)}
          style={{ ...buttonStyle, backgroundColor: '#00C300' }}
        >
          <img src="/iconLine.png" alt="LINE" style={{ height: '24px', marginRight: '8px' }} />
          LINE
        </button>

        <Link to="/resume">
          <button style={{ ...buttonStyle, backgroundColor: '#6C63FF' }}>
            <img src="/resume.png" alt="Resume" style={{ height: '24px', marginRight: '8px' }} />
            Resume
          </button>
        </Link>
      </div>

      {showPopup && (
        <div
          className="popup"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999
          }}
        >
          <span
            onClick={() => setShowPopup(false)}
            style={{
              position: 'absolute',
              top: 20,
              right: 30,
              color: '#fff',
              fontSize: 30,
              cursor: 'pointer'
            }}
          >
            &times;
          </span>
          <img
            src="/MyQRCodeLine.jpeg"
            alt="Line QR Code"
            style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '12px' }}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
