fetch('http://localhost:3000/api/data')
    .then(response => response.json())
    .then(data => console.log(data));
fetch('https://setsukun-on-website.onrender.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Frontend User' })
})
    .then(response => response.json())

    .then(data => console.log(data));
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "รหัสผิด" });
  }
});

