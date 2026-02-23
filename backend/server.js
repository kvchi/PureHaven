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
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'contact-form',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
  console.log('Connected to the database.');
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Server is running' });
});

app.post('/api/form', (req, res) => {
  const { firstname, lastname, email, phone, message } = req.body || {};

  if (!firstname?.trim()) {
    return res.status(400).json({ message: 'First name is required.' });
  }
  if (!lastname?.trim()) {
    return res.status(400).json({ message: 'Last name is required.' });
  }
  if (!email?.trim()) {
    return res.status(400).json({ message: 'Email is required.' });
  }
  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }
  if (!phone?.trim()) {
    return res.status(400).json({ message: 'Phone number is required.' });
  }
  if (!message?.trim()) {
    return res.status(400).json({ message: 'Message is required.' });
  }

  const query = 'INSERT INTO contact (firstname, lastname, email, phone, message) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [firstname.trim(), lastname.trim(), email.trim(), phone.trim(), message.trim()], (err) => {
    if (err) {
      console.error('Error inserting contact:', err);
      return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
    res.status(201).json({ message: 'Form submitted successfully.' });
  });
});

app.post('/api/booking', (req, res) => {
  const { serviceType, date, name, phone } = req.body || {};

  if (!name?.trim()) {
    return res.status(400).json({ message: 'Name is required.' });
  }
  if (!phone?.trim()) {
    return res.status(400).json({ message: 'Phone number is required.' });
  }
  if (!serviceType?.trim()) {
    return res.status(400).json({ message: 'Service type is required.' });
  }
  if (!date?.trim()) {
    return res.status(400).json({ message: 'Date is required.' });
  }

  const query = 'INSERT INTO booking (service_type, date, name, phone) VALUES (?, ?, ?, ?)';
  db.query(query, [serviceType.trim(), date.trim(), name.trim(), phone.trim()], (err) => {
    if (err) {
      console.error('Error inserting booking:', err);
      return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
    res.status(201).json({ message: 'Booking request received. We\'ll contact you shortly.' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
