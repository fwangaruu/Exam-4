// app.js or index.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (like the HTML page)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the screen
app.get('/screen', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/screen.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
