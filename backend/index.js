const express = require('express');

const PORT = 3001;

const app = express();

var cors = require('cors');
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}.`);
});

app.get('/api', (req, res) => {
  res.json({ igor: 'хороший человек' });
});
