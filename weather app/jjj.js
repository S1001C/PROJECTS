const apiKey = "e7740b381416601d9fdca741e0333ea0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "KPH";
  if (data.weather[0].main == "Clouds") {
    weathericon.src = "clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weathericon.src = "clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "drizzle.png";
  } else if (data.weather[0].main == "Rain") {
    weathericon.src = "rain.png";
  } else if (data.weather[0].main == "Mist") {
    weathericon.src = "mist.png";
  }
  document.querySelector(".weather").style.display = "block";
}

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
