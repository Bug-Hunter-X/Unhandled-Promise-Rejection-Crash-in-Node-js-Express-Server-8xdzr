# Unhandled Promise Rejection in Node.js Express Server

This repository demonstrates a common error in Node.js Express applications: unhandled promise rejections leading to server crashes.  The `bug.js` file shows an Express server with an asynchronous operation that can fail. Without proper error handling, the server crashes if the asynchronous operation rejects.

The solution, found in `bugSolution.js`, demonstrates how to use a `try...catch` block or `.catch()` method to properly handle errors, preventing crashes and allowing for graceful error handling.