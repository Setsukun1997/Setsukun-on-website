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
