

export const scrapeAmazonPrice = async (url) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "url": url
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    const response = await fetch("https://costeye.vercel.app/scrape", requestOptions)
        .then((response) => response.json())

    return response.price

}