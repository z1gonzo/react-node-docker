const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simple route for testing
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Another test endpoint
app.post('/api/data', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
