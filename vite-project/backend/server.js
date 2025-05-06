const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Your MySQL username
    password: 'Superw#1',  // Your MySQL password
    database: 'politicalweb'  // Your database name
});

// Connect to database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('✅ Connected to MySQL!');
    }
});

// Example API route to fetch data from the database
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM person', (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            res.status(500).send('Database error');
        } else {
            res.json(results);
        }
    });
});

// New API route to upload data to the database
app.post('/api/upload', (req, res) => {
    const { name, description, region } = req.body;

    // Insert data into the 'person' table
    const query = 'INSERT INTO person (name, description, region) VALUES (?, ?, ?)';

    db.query(query, [name, description, region], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error uploading data');
        } else {
            // Send the newly inserted data back to the frontend
            res.status(200).json({
                id: results.insertId,
                name,
                description,
                region
            });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
