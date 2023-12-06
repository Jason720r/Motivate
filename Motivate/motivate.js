const apiKey = 'GFEQhHkgZvzBrxsGZb+a0A==gdAVeN6ZXYvX0nnn';
const category = 'happiness';


const convertButton = document.getElementById('convert');


convertButton.addEventListener('click', async () => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            
            if (data.length > 0) {
               
                const quote = data[0].quote;
                const author = data[0].author;

                const quoteContainer = document.getElementById('quote-container');
                const authorContainer = document.getElementById('author-container');
                quoteContainer.textContent = quote;
                authorContainer.textContent = author;
            } else {
                console.error('No quotes found in the response');
            }
        } else {
            console.error('API request failed');
        }
    } catch (error) {
        console.error(error);
    }
});



