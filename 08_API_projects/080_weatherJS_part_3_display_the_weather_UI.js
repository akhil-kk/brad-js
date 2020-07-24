class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
        this.pressure = document.getElementById('w-pressure');
        this.temp_max = document.getElementById('w-temp-max');
        this.temp_min = document.getElementById('w-temp-min');
        this.icon = document.getElementById('w-icon');
    }

    paint(weather_data) {
        this.location.textContent = weather_data.name;
        this.desc.textContent = weather_data.weather[0].description;
        this.humidity.textContent = `Relative Humidity : ${weather_data.main.humidity}`;
        this.feelslike.textContent = `Feels like : ${weather_data.main.feels_like}`;
        this.wind.textContent = `Wind Speed : ${weather_data.wind.speed}`;
        this.pressure.textContent = `Pressure : ${weather_data.main.pressure}`;
        this.temp_max.textContent = `Maximum Temperature : ${weather_data.main.temp_max}`;
        this.temp_min.textContent = `Minimum Temperature : ${weather_data.main.temp_min}`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`);
    }
}