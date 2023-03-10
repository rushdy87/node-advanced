const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const worker = new Worker('./worker.js');

  worker.on('message', function (message) {
    console.log(message);
    res.send('' + message);
  });

  worker.postMessage('start!');
});

app.get('/fast', (req, res) => {
  res.send('This was fast!');
});

app.listen(3000, () => console.log('Server run on port 3000'));
