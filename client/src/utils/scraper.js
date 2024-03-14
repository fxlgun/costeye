

export const scrapeAmazonPrice = async (url) => {

    const response = await fetch("https://costeye.vercel.app/scrape", { method: "POST", body: { url } })
        .then((response) => response.json())

    return response.price

}