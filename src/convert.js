import React from 'react';
const convert = (money) => {
    function convertCurrency() {
        const apiKey = 'YOUR_API_KEY';
        const baseCurrency = 'EUR';
        const targetCurrency = 'USD';
        const apiUrl = `https://open.er-api.com/v6/latest/${baseCurrency}?apikey=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const exchangeRate = data.rates[targetCurrency];
                const amountInDollars = money * exchangeRate;
                displayResult(money, amountInDollars, targetCurrency);
            })
            .catch(error => console.error('Erreur lors de la conversion de la devise :', error));
    }
    function displayResult(money, amountInDollars, targetCurrency) {

        let moneyDollars = 0;
        moneyDollars = console.log(money + ' euros équivalent à environ ' + amountInDollars + targetCurrency);

    }
}
export default convert;