import cheerio, { load } from 'cheerio';

export async function scrapeAmazonPrice(url) {
    let finalPrice = null;
    try {
        const response = await fetch(url);
        const html = await response.text();

        const $ = load(html);

        // Find the element containing the price
        const priceElement = $('span.a-price-whole');

        // Extract the price text
        const price = priceElement.text().trim();
        console.log(price);
        // Convert price to a proper integer
        finalPrice = parseInt(price.split('.')[0].split(',').join(''));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    return finalPrice;
}

export async function scrapeFlipkartPrice(url) {
    try {
        const newUrl = 'https://www.amazon.in/iQOO-MediaTek-Dimesity-Processor-Smartphone/dp/B07WGPKLFL'
        const response = await fetch(newUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const html = await response.text();
        console.log(html);
        const $ = load(html);

        // Find the div containing the price
        const priceElement = $('div._30jeq3._16Jk6d');
        console.log(priceElement.text());
        // Extract the price text
        const price = priceElement.text().trim().split('₹')[1];

        return price;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}


