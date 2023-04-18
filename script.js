
var APIKey = "THQL4CERPJNZS1CR"
// receive ticker input from user
var ticker = logTicker()
// receive currency type from user
var currencyType = logCurrency()
// add URL for ticker search API
var tickerURL = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=THQL4CERPJNZS1CR"; 
// add URL for forex API
var forexURL = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=THQL4CERPJNZS1CR"


function getTickerApi() {
    fetch(tickerURL)
    .then(function (response) {
        console.log(response);
        if (response.status === 200) {
            response.textContent = response.status;
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}


function getForexApi() {
    fetch(forexURL)
    .then(function (response) {
        console.log(response);
        if (response.status === 200) {
            response.textContent = response.status;
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}
getTickerApi()
getForexApi()

function logTicker() {
    let ticker = document.getElementById("tickerBar").value;
    console.log(ticker)
}

function logCurrency() {
    let currency = document.getElementById("currencyBar").value;
    console.log(currency)
}