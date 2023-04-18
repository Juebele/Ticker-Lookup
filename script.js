
var APIKey = "THQL4CERPJNZS1CR"
// receive ticker input from user
var ticker = ""
// receive currency type from user
var currencyType = logCurrency()
// add URL for ticker search API
var tickerURL = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=" + ticker + "&apikey=THQL4CERPJNZS1CR"; 
// add URL for forex API
var forexURL = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=THQL4CERPJNZS1CR"


function getTickerApi() {
    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=" + ticker + "&apikey=THQL4CERPJNZS1CR")
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
    console.log("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=" + ticker + "&apikey=THQL4CERPJNZS1CR")
    getTickerApi()
}

function logCurrency() {
    let currency = document.getElementById("currencyBar").value;
    console.log(currency)
}