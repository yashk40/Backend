import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import Sitemap from './Sitemap.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Get the directory name  
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Remove or comment out the static file serving
// app.use(express.static(path.join(__dirname, 'dist')));

// Route to serve the sitemap
app.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.send(Sitemap());
});

// Handle all other routes
app.get('*', (req, res) => {
  res.send('No static files served. Please build your frontend app.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
