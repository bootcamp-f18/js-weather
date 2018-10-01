// This is main.js

let zipcode = document.getElementById('zipcodeInput');
let weatherButton = document.getElementById('weatherButton');
// below is the variable that holds our API key
let appId = '58e92c763df5499a2c9ae20da806e2dc';
let apiRequest = new XMLHttpRequest();
let output = document.getElementById('output');
let error = document.getElementById('error');


document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        weatherButton.onclick = getWeather;
    }
}

function getWeather() {

    // Get zipcode
    // -> zipcode.value

    // Format a url
    let url = 'http://api.openweathermap.org/data/2.5/weather?zip=<zipcode>,us&appid=<appid>';
    url = url.replace("<zipcode>", zipcode.value);
    url = url.replace("<appid>", appId);

    //fetch from the url
    l
    apiRequest.onload = onSuccess;
    apiRequest.onerror = onError;
    apiRequest.open('get', url, true);
    apiRequest.send();
    // Fetch from the url


    // Fill in the page




}


function onError() {
  //Turn off the output div
  output.style.display = 'none';
  //Turn on the error div
  error.style.display = 'block';
  // Update the text inside error
  if (apiRequest.responseText) {
    document.querySelector('#error div').innerHTML = JSON.parse(apiRequest.responseText).message;
  }

    else {
          document.querySelector('#error div').innerHTML = "An error has occurred. Please try again";
  }

function on onSuccess() {
 if(apiRequest.statusText == "200") {
   console.log("Request should return good data.");

   //Start filling out the output div.

 }
    else {
      console.log("Request returned something other than a success. Process this as an error.");
    }
}
