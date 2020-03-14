"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PORT = parseInt(process.env.PORT) || 5000;
const app = express();
app.get('/test', (req, res) => {
    res.send('got test');
});
app.listen(PORT, () => {
    console.log('Server is listening to:', PORT);
});
