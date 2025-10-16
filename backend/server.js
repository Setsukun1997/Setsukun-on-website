require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const timelineRoutes = require('./routes/timeline');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/message');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/timeline', timelineRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

app.use((err, req, res, next) => {
  console.error('🔥 Server error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});













