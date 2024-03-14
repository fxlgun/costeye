
const cheerio = require('cheerio');

async function scrapeAmazonPrice(url) {
    let finalPrice = null;
    while (finalPrice === null || isNaN(finalPrice)) {
        try {
            const response = await fetch(url);
            const html = await response.text();

            const $ = cheerio.load(html);

            // Find the element containing the price
            const priceElement = $('span.a-price-whole');

            // Extract the price text
            const price = priceElement.text().trim();

            // Convert price to a proper integer
            finalPrice = parseInt(price.split('.')[0].split(',').join(''));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return finalPrice;
}

async function scrapeFlipkartPrice(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const html = await response.text();
        const $ = cheerio.load(html);

        // Find the div containing the price
        const priceElement = $('div._30jeq3._16Jk6d');
        // Extract the price text
        const price = priceElement.text().trim().split('₹')[1];

        return price;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

module.exports = { scrapeAmazonPrice, scrapeFlipkartPrice }