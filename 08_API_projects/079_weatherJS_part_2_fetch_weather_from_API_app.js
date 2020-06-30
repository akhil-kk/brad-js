// Init weather object

const weather = new Weather('Kochi', 'Kerala');

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather().then(results => {
        console.log(results);
    });
}   
 