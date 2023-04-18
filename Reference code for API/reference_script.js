
// var APIKey = "fbc20a5a8f2b76012e2379e08523d2cf";
// var city = prompt("type") //allows the user to put in a city

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


// console.log(indeedURL)

// // This function pulls the wind.speed from the API and adds it to the webpage
// async function getWindSpeed() {  //This is an async function
//     const response = await fetch(queryURL);
//     const data = await response.json();  //parses the response
//     console.log(response) //console logs the whole response from the API
//     const windSpeed = data.wind.speed;  //This is parsing out the speed parameter from "wind"
//     document.getElementById('windspeed').textContent = windSpeed;  //This is adding windspeed to the site
//     console.log(windSpeed); //console log for good measure
//   }
  
//   getWindSpeed();


// // windspeed.then(windSpeed => console.log(windSpeed));


// document.body.onload = addElement;

// const newDiv = document.createElement("div");

// function addElement () {
//     const newContent = document.createTextNode(getWindSpeed);


//     newDiv.appendChild(newContent);

//     const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }

// // console.log(windspeed)