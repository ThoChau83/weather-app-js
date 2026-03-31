const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

const apiKey = "bf6ce2b1f5d76c8139ff4b159018d989";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather-info").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather-info").style.display = "block";
    document.querySelector(".weather-city").innerHTML = data.name;
    document.querySelector(".weather-heat").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".weather-wind").innerHTML =
      Math.round(data.wind.speed) + " km/h";
    document.querySelector(".weather-humidity").innerHTML =
      Math.round(data.main.humidity) + " %";
    if (data.weather[0].main == "Clouds") {
      document.querySelector(".weather-icon").src = "/assets/clouds.png";
    }
    if (data.weather[0].main == "Snow") {
      document.querySelector(".weather-icon").src = "/assets/snow.png";
    }
    if (data.weather[0].main == "Clear") {
      document.querySelector(".weather-icon").src = "/assets/clear.png";
    }
    if (data.weather[0].main == "Drizzle") {
      document.querySelector(".weather-icon").src = "/assets/drizzle.png";
    }
    if (data.weather[0].main == "Mist") {
      document.querySelector(".weather-icon").src = "/assets/mist.png";
    }
    if (data.weather[0].main == "Rain") {
      document.querySelector(".weather-icon").src = "/assets/rain.png";
    }

    searchInput.value = "";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") checkWeather(searchInput.value);
});
