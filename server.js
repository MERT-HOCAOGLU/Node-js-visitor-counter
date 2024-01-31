'use strict';
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';    
let visitors = 0;

// Middleware to count visitors
app.use((req, res, next) => {
    visitors++;
    console.log(`Number of visitors: ${visitors}`);
    next();
});

app.get('/', (req, res) => {
    res.send('MERT HOCAOGLU - 02185076074 - Merhaba Hocam -Tesekurlar ');
});

// Endpoint to get the number of visitors
app.get('/visitors', (req, res) => {
    res.json({ visitors: visitors });
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
