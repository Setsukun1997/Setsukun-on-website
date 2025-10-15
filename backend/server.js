const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const messageRoutes = require('./routes/message');
const timelineRoutes = require('./routes/timeline');
const authRoutes = require('./routes/auth');

app.use('/api/messages', messageRoutes);
app.use('/api/timeline', timelineRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(3000, () => console.log('Server running on port 3000'));













