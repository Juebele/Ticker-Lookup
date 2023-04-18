
var APIKey = "THQL4CERPJNZS1CR"
// receive ticker input from user
var ticker = logTicker()
// receive currency type from user
var currencyType =""
// add URL for ticker search API
var tickerURL = ""; 
// add URL for forex API
var forexURL = ""

function logTicker() {
    let ticker = document.getElementById("tickerBar").value;
    console.log(ticker)
}