const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const eventsRoutes = require('./routes/events');
app.use('/api', eventsRoutes);

app.get('/', (req, res) => {
  res.send('Birthday Dashboard API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
