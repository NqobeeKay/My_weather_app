function updateWeather(response) {
  let temperatureElement = document.quarySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.quarySelector("#city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  let apiKey = "5d12c54o9b4080bae8eb90tf5232b23b";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}";
  axios.get(apiUrl).then(updateWeather);
}
function search(event) {
  event.preventDefault();
  let searchInput = document.quarySelector("#search-form-input");
}
let searchFormElement = document.quarySelector("#search-form");
searchFormElement.addEventListener("submit", search);
searchCity("Paris");
