import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>ยินดีต้อนรับสู่ Setsukun Website 👋</h1>
      <p>นี่คือจุดเริ่มต้นของส่วนหน้าแบบพัฒนาโดยโคดเนม!</p>
      <Link to="/register"><button>ลงทะเบียน</button></Link>
      <Link to="/login"><button>เข้าสู่ระบบ</button></Link>
      <Link to="/journey"><button>เส้นทางของเรา</button></Link>
    </div>
  );
}

export default Home;
