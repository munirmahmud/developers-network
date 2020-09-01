const express = require('express');
const app  = new express();
const connectDB = require('./config/db');


//Connect to the database
connectDB();

app.get('/', (req, res) => res.send('Connected Just now'));

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );

// zeaB0LilWjVnreaQ
// programmers_profile