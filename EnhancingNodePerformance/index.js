process.env.UV_THREADPOOL_SIZE = 1;

const cluster = require('cluster');
const crypto = require('crypto');

const express = require('express');

// Is the file being executed im master mode?
if (cluster.isMaster) {
  // Cause index.js executed *again* but in child mode
  cluster.fork();
  cluster.fork();
} else {
  // I am a child, I am gonig to act as a server and do nothing else
  const app = express();

  // function doWork(duration) {
  //   const start = Date.now();
  //   while (Date.now() - start < duration) {}
  // }

  app.get('/', (req, res) => {
    // doWork(5000);
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      res.send('Hi, from Express Server');
    });
  });

  app.get('/fast', (req, res) => {
    res.send('This is Fast');
  });

  app.listen(3000, () => console.log('Server run on port 3000'));
}
