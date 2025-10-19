import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>ยินดีต้อนรับสู่ Setsukun Website 👋</h1>
      <Link to="/login"><button>เข้าสู่ระบบ</button></Link>
      <Link to="/register"><button>ลงทะเบียน</button></Link>
    </div>
  );
}
