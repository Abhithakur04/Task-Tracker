const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

connectDB();

app.use(cors({
  origin: 'http://localhost:3000', // React frontend URL
  credentials: true,               // Allow cookies
}));
app.use(express.json());           // Parse JSON request bodies
app.use(cookieParser());           // Parse cookies


const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/project');
const taskRoutes = require('./routes/task');


app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);


// app.get('/', (req, res) => {
//   res.send('Task Tracker API is running!');
// });


const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.error('❌ Server failed to start:', err);
  } else {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  }
});
