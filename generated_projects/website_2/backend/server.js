const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const resumeRoutes = require('./routes/resume');
const authMiddleware = require('./middleware/auth');

require('dotenv').config();

const app = express();
app.get('/', (req, res) => {
  res.send('Server is Active');
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authMiddleware);

app.use('/api/auth', authRoutes);
app.use('/api/resume', resumeRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});