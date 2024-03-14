// Require necessary modules
const express = require('express');
const { scrapeAmazonPrice } = require('./scrape');

// Create Express app
const app = express();
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.post('/scrape', async (req, res) => {
  const url = req.body.url;
  const price = await scrapeAmazonPrice(url);
  res.send({ price });
})

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
