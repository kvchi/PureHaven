const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'kvchii',
    password: 'Superslimey1$',
    database: 'contact-form'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

app.post('/api/form', (req, res) => {
    const { firstname, lastname, email, phone, message } = req.body;
    const query = 'INSERT INTO contact (firstname, lastname, email, phone, message) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [firstname, lastname, email, phone, message], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({ message: 'Server error'});
            return;
    }
    res.status(201).json({ message: 'Form submitted successfully.' });

});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});