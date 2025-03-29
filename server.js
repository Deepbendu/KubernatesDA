const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Kubernetes! Version 1.0');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// CPU-intensive endpoint for testing autoscaling
app.get('/load', (req, res) => {
  const startTime = new Date().getTime();
  while (new Date().getTime() < startTime + 5000) {
    // Simulate CPU load for 5 seconds
  }
  res.send('Load test complete');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});