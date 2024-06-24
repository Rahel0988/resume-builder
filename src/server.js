// server.js
const express = require('express');
const BuilderArea = express();
const path = require('path');

// Serve static files from the React app
BuilderArea.use(express.static(path.join(__dirname, 'public')));

// Download route
BuilderArea.get('/download', (req, res) => {
  const file = path.join(__dirname, 'public', 'resume.pdf'); 
  res.download(file); // Set disposition and send it.
});


BuilderArea.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

const PORT = process.env.PORT || 5000;
BuilderArea.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
