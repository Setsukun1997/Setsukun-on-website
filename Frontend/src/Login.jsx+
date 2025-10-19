
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
const BASE_URL = "https://setsukun-on-website.onrender.com/api";

async function login(username, password) {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    console.log("Login response:", data);
  } catch (err) {
    console.error("Login error:", err);
  }
}

login("testuser", "testpassword");
    console.log("Login clicked");
    navigate('/journey'); 
  };

  return (
    <div>
      <h1>เข้าสู่ระบบ</h1>
      <button onClick={handleLogin}>เข้าสู่ระบบ</button>
    </div>
  );
}

export default Login;
