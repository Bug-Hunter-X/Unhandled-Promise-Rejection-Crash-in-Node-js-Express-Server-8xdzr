const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Without proper error handling, the server will crash
    console.error('Error:', err);
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a random failure
    const random = Math.random();
    if (random < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});