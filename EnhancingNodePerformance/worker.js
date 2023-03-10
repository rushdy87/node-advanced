const { parentPort } = require('worker_threads');

parentPort.on('message', () => {
  let counter = 0;
  while (counter < 1e9) {
    counter++;
  }

  parentPort.postMessage('' + counter);
});

// 1e9 => 1,000,000,000
