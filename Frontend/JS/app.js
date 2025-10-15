import { useState } from "react";
import "./styles.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch(
      "https://setsukun-on-website.onrender.com/api/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );
    const data = await res.json();
    if (data.success) {
      alert("เข้าสู่ระบบสำเร็จ");
    } else {
      alert("รหัสผิด");
    }
  };

  return (
    <div className="App">
      <h1>เข้าสู่ระบบ</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}



