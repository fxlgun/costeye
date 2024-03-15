const cheerio = require('cheerio');

async function scrapeAmazonPrice(url, retries = 3) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const html = await response.text();
    const $ = cheerio.load(html);

    // Find the element containing the price
    const priceElement = $('span.a-price-whole');

    // Extract the price text
    const price = priceElement.text().trim();

    // Convert price to a proper integer
    const finalPrice = parseInt(price.split('.')[0].split(',').join(''));
    return finalPrice;
  } catch (error) {
    console.error('Error fetching data:', error);
    if (retries > 0) {
      console.log(`Retrying (${retries} retries left)...`);
      return scrapeAmazonPrice(url, retries - 1);
    } else {
      throw new Error('Exceeded maximum retries');
    }
  }
}

async function scrapeFlipkartPrice(url) {
  // Implementation for scraping Flipkart price
}

module.exports = { scrapeAmazonPrice, scrapeFlipkartPrice };
