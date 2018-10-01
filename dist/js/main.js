// This is main.js
let zipcode = document.getElementById('zipcodeInput');
let weatherButton = document.getElementById('weatherButton');
let appId = '58e92c763df5499a2c9ae20da806e2dc';
let apiRequest = new XMLHttpRequest();
let output = document.getElementById('output');
let error = document.getElementById('error');

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    weatherButton.onclick = getWeather;
  }
};

function getWeather() {
  // Format a url
  let url = 'http://api.openweathermap.org/data/2.5/weather?zip=<zipcode>,us&appid=<appid>';
  url = url.replace("<zipcode>", zipcode.value);
  url = url.replace("<appid>", appId); // Fetch from the url

  apiRequest.onload = onSuccess;
  apiRequest.onerror = onError;
  apiRequest.open('get', url, true);
  apiRequest.send(); // Fill in the page
}

function onError() {
  // Turn "off" output
  output.style.display = 'none'; // Turn "on" error

  error.style.display = 'block'; // Update the text inside error

  if (apiRequest.responseText) {
    document.querySelector('#error div').innerHTML = JSON.parse(apiRequest.responseText).message;
  } else {
    document.querySelector('#error div').innerHTML = "An error has occurred. Please try again.";
  } // responseText.message

}

function onSuccess() {
  if (apiRequest.status == "200") {
    console.log("Request should return good data."); // Start filling out the output div.
  } else {
    onError();
  }
}