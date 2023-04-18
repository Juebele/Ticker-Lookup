
var APIKey = "THQL4CERPJNZS1CR"
// receive ticker input from user
let ticker
// receive currency type from user
let currencyType
// add URL for ticker search API
var tickerURL = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=" + ticker + "&apikey=THQL4CERPJNZS1CR"; 
// add URL for forex API
var forexURL = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=" + currencyType + "&apikey=THQL4CERPJNZS1CR";

function fetchTicker() {
    ticker = document.getElementById("tickerBar").value;
    console.log(ticker)

    var tickerURL = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=" + ticker + "&apikey=THQL4CERPJNZS1CR"; 

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


function fetchCurrency() {
    let currencyType = document.getElementById("currencyBar").value;
    console.log(currencyType)

    var forexURL = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=" + currencyType + "&apikey=THQL4CERPJNZS1CR"

    console.log(forexURL)

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
