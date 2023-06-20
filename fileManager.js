const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/file', (req, res) => {
    let fileName = req.query.filename;
    fs.readFile(path.join(__dirname, fileName), 'utf8', (err, data) => {
        if (err) {
            res.status(404).send('Not found');
        } else {
            res.send(data);
        }
    });
});

app.listen(3000, () => console.log('Listening on port 3000'));