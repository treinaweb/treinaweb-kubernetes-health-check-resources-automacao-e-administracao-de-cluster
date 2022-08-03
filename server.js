const { time , timestamp } = require('console');
const express = require('express');

const app = express();
const port = 3000;
const startDate = new Date();

app.get('/', (req, res) => {
    res.send('Treinaweb Devops')
})

app.get('/healthz', (req, res) => {
    var requestDate = new Date();
    var diff = Math.abs(startDate.getTime() - requestDate.getTime());
    var seconds = diff / 1000;

    if (seconds < 10 || seconds > 50) { 
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }
})

app.listen(port, () => {
    console.log(`Acesse em http://localhost:${port}`)
})