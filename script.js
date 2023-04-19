
var APIKey = "THQL4CERPJNZS1CR"
// receive ticker input from user
// add URL for ticker search API
let ticker
// receive currency type from user

let currencyType
// add URL for ticker search API
var tickerURL = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + ticker + "&apikey=THQL4CERPJNZS1CR"; 
// add URL for forex API
var forexURL = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=" + currencyType + "&apikey=THQL4CERPJNZS1CR";


function fetchTicker() {
    ticker = document.getElementById("tickerBar").value;
    console.log(ticker)

    localStorage.setItem("symbol", ticker);
    console.log(localStorage);

    var tickerURL = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + ticker + "&apikey=THQL4CERPJNZS1CR"; 

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
            document.getElementById("ticker-symbol-span").innerHTML = "Ticker Symbol: " + data["Symbol"];
            document.getElementById("share-price-span").innerHTML = "Analyst Price: " + data["AnalystTargetPrice"];
            document.getElementById("52-high-span").innerHTML = "52-week High: " + data["52WeekHigh"];
            document.getElementById("52-low-span").innerHTML = "52-week Low: " + data["52WekLow"];
            document.getElementById("PE-ratio-span").innerHTML = "PE Ratio: " + data["PERatio"];
            document.getElementById("industry-span").innerHTML = "Industry: " + data["Industry"];
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
            document.getElementById("currency-span").innerHTML = "1 dollar will get you " + data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]; + " of the currency you requested."
        })

    }
