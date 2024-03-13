
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
        console.log(html);
        const $ = cheerio.load(html);

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


const sampleUrl = 'https://www.amazon.in/Razer-DeathAdder-Essential-White-RZ01-03850200-R3M1/dp/B092R71V77/ref=pd_ci_mcx_mh_mcx_views_0?pd_rd_w=1kkpf&content-id=amzn1.sym.cd312cd6-6969-4220-8ac7-6dc7c0447352%3Aamzn1.symc.ca948091-a64d-450e-86d7-c161ca33337b&pf_rd_p=cd312cd6-6969-4220-8ac7-6dc7c0447352&pf_rd_r=767GWQWPMBX4FZAX5YVY&pd_rd_wg=ddqfl&pd_rd_r=57f4b81c-e0ef-4e0b-b9aa-68e62e600369&pd_rd_i=B092R71V77';
// scrapeFlipkartPrice(sampleUrl)
//     .then(price => {
//         console.log('Price:', price);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
scrapeAmazonPrice(sampleUrl)
.then(price => {
    console.log('Price:', price);
})