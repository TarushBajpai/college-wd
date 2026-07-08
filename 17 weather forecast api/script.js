let city = document.querySelector("#city");
let btn = document.querySelector("#btn");
let weather = document.querySelector("#weather");

const apiKey = "b263499dd6265c8b3a72d5a94aff12e3";

btn.addEventListener("click", () => {
    
    let cityName = city.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        
        .then(response => response.json())
        .then(data => {

            weather.innerHTML = `
                <h2>${data.name}</h2>
                <p> Temperature: ${data.main.temp} °C</p>
                <p> Weather: ${data.weather[0].main}</p>
                <p> Humidity: ${data.main.humidity}%</p>
                <p> Pressure: ${data.main.pressure} hPa</p>
            `;

        })
        .catch(error => {
            weather.innerHTML = "<h3>City not found!</h3>";
            console.log(error);
        });

});