import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const buttonStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    cursor: 'pointer'
  };

  const logoutStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    cursor: 'pointer'
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

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999
  };

  const linkButtonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#333',
    color: '#fff'
  };

  return (
    <div style={{ position: 'relative', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <button style={buttonStyle} onClick={() => setShowPopup(true)}>เปิดโปรไฟล์</button>
      <button style={logoutStyle} onClick={handleLogout}>ออกจากระบบ</button>

      {showPopup && (
        <>
          <div style={overlayStyle} onClick={() => setShowPopup(false)} />
          <div style={popupStyle}>
            <h2>ช่องทางติดตาม</h2>
            <p>เลือกดูโปรไฟล์ของฉันได้ที่:</p>
            <div style={{ marginTop: '1rem' }}>
              <button style={linkButtonStyle} onClick={() => window.open('/resume', '_blank')}>Resume</button>
              <button style={linkButtonStyle} onClick={() => window.open('https://www.facebook.com/Setsukun1997', '_blank')}>Facebook</button>
              <button style={linkButtonStyle} onClick={() => window.open('https://line.me/ti/p/~Setsukun1997', '_blank')}>Line</button>
              <button style={linkButtonStyle} onClick={() => window.open('https://www.youtube.com/@Setsukun1997', '_blank')}>YouTube</button>
              <button style={linkButtonStyle} onClick={() => window.open('https://github.com/Setsukun1997', '_blank')}>GitHub</button>
            </div>
            <button
              style={{
                marginTop: '2rem',
                padding: '8px 16px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
              onClick={() => setShowPopup(false)}
            >
              ปิด
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
