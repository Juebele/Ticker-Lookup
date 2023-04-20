// // Invalid Search Modal
// var myModal = new bootstrap.Modal("#error-modal");

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


let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

function populateRecents() {
    document.getElementById("search-1").innerHTML = (searchHistory)[0];
    document.getElementById("search-2").innerHTML = (searchHistory)[1];
    document.getElementById("search-3").innerHTML = (searchHistory)[2];
    document.getElementById("search-4").innerHTML = (searchHistory)[3];
    document.getElementById("search-5").innerHTML = (searchHistory)[4];
    document.getElementById("search-6").innerHTML = (searchHistory)[5];
    }


function fetchTicker() {
    ticker = document.getElementById("tickerBar").value;
    console.log(ticker)

    let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

    searchHistory.unshift(ticker);

    searchHistory.splice(6);

    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

    console.log(searchHistory);

    localStorage.setItem("symbol", ticker);
    console.log(localStorage);

    var symbol = localStorage.getItem("symbol");
    console.log(document.getElementById("search-1"))
    console.log(document.getElementById("search-2"))
    console.log(document.getElementById("search-3"))
    console.log(document.getElementById("search-4"))
    console.log(document.getElementById("search-5"))
    console.log(document.getElementById("search-6"))
    document.getElementById("search-1").innerHTML = (searchHistory)[0];
    document.getElementById("search-2").innerHTML = (searchHistory)[1];
    document.getElementById("search-3").innerHTML = (searchHistory)[2];
    document.getElementById("search-4").innerHTML = (searchHistory)[3];
    document.getElementById("search-5").innerHTML = (searchHistory)[4];
    document.getElementById("search-6").innerHTML = (searchHistory)[5];

    var tickerURL = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + ticker + "&apikey=THQL4CERPJNZS1CR"; 

    fetch(tickerURL)
        .then(function (response) {
            console.log(response);
            if (response.status === 200) {
                response.textContent = response.status;
                return response.json();
            } 
        })
        .then(function (data) {
            if (data["Symbol"] == undefined) {
                console.log(data)
                alert("Sorry, that's not a valid ticker")
                console.log(data);
                return;
            }
            
            document.getElementById("ticker-symbol-span").innerHTML = "Ticker Symbol: " + data["Symbol"];
            document.getElementById("share-price-span").innerHTML = "Analyst Price: " + data["AnalystTargetPrice"];
            document.getElementById("52-high-span").innerHTML = "52-week High: " + data["52WeekHigh"];
            document.getElementById("52-low-span").innerHTML = "52-week Low: " + data["52WeekLow"];
            document.getElementById("PE-ratio-span").innerHTML = "PE Ratio: " + data["PERatio"];
            document.getElementById("industry-span").innerHTML = "Industry: " + data["Industry"];


        })


function fetchCurrency() {
    let currencyType = document.getElementById("currencyBar").value;
    console.log(currencyType)

    var forexURL = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=" + currencyType + "&apikey=THQL4CERPJNZS1CR"

    console.log(forexURL)

    fetch(forexURL)
        .then(function (response) {
            console.log(response);
            if (response.status !== 200) {
                response.textContent = innerHTML("Sorry, no data found")
            } else {
                response.textContent = response.status;
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data);

            document.getElementById("currency-span").innerHTML = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
            if (data["5. Exchange Rate"] == undefined) {
                data.textContent = "Sorry, no data found"
                console.log(data.textContent)
        }

        })

    }

    window.onload = populateRecents()