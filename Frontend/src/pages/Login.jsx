import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; 
function Login() {
 const [showLoginForm, setShowLoginForm] = useState(false);
const [showRegister, setShowRegister] = useState(false);

  return (
    <button
  style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', height: '40px' }}
  onClick={() => setShowLoginForm(true)}
>
  เข้าสู่ระบบ
</button>

     <button
  style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', height: '40px' }}
  onClick={() => setShowRegister(true)}
>
  ลงทะเบียน
</button>

    </div>
  );
}
{showLoginForm && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999
    }}
  >
    <div
      style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        width: '300px',
        textAlign: 'center'
      }}
    >
      <h2>เข้าสู่ระบบ</h2>
      <input type="text" placeholder="ชื่อผู้ใช้" style={{ marginBottom: '10px', width: '100%' }} />
      <input type="password" placeholder="รหัสผ่าน" style={{ marginBottom: '10px', width: '100%' }} />
      <button
        style={{ marginTop: '10px' }}
        onClick={() => {
          // สมมุติว่า login สำเร็จ
          window.location.href = '/home';
        }}
      >
        เข้าสู่ระบบ
      </button>
      <br />
      <button onClick={() => setShowLoginForm(false)} style={{ marginTop: '10px' }}>ปิด</button>
    </div>
  </div>
)}

{showRegister && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999
    }}
  >
    <div
      style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        width: '300px',
        textAlign: 'center'
      }}
    >
      <h2>ลงทะเบียน</h2>
      <input type="text" placeholder="ชื่อผู้ใช้" style={{ marginBottom: '10px', width: '100%' }} />
      <input type="password" placeholder="รหัสผ่าน" style={{ marginBottom: '10px', width: '100%' }} />
      <button style={{ marginTop: '10px' }}>สมัครสมาชิก</button>
      <br />
      <button onClick={() => setShowRegister(false)} style={{ marginTop: '10px' }}>ปิด</button>
    </div>
  </div>
)}

export default Login;
