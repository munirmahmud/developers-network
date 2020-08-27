const express = require('express');
const app  = new express();
const connectDB = require('./config/db');


//Connect to the database
connectDB();

app.get('/', (req, res) => res.send('Connected'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );

// zeaB0LilWjVnreaQ
// programmers_profile