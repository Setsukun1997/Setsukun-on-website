const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.json());

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "รหัสผิด" });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});







