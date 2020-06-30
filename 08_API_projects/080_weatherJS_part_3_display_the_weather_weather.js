class Weather {
    constructor(city, state) {
        this.apiKey = '001ca8c0b8258724f5cf6e6085e48ada'
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=metric`);

        const responseData = await response.json();
        return responseData;
    }

    // change weather location

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}