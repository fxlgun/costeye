// Require necessary modules
const express = require('express');
const cors = require('cors');
const { scrapeAmazonPrice } = require('./scrape');



// Create Express app
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.post('/scrape', async (req, res) => {
  const url = req.body.url;
  try {
    const price = await scrapeAmazonPrice(url);
    res.json({ price });
  } catch (error) {
    console.error('Error scraping price:', error);
    res.status(500).json({ error: 'Failed to scrape price' });
  }
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
