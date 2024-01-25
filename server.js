import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url"; // Import the fileURLToPath function
import { dirname } from "path"; // Import the dirname function

// Get the directory name using the new fileURLToPath and dirname functions
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'animate_algorithm/src')));


// API route example
app.get('/api/hello', (req, res) => {
  console.log("Hello There!");
  res.json({ message: 'Hello from the server!' });
});

// All other requests return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'animate_algorithm/src', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
