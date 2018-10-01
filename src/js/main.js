// This is main.js
let zipcode = document.getElementById('zipcodeInput');
let weatherButton = document.getElementById('weatherButton');
let appId = '58e92c763df5499a2c9ae20da806e2dc';

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

    console.log(url);

    // Fetch from the url


    // Fill in the page




}
