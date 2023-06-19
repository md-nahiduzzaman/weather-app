console.log("Yahya");

const searchCity = () => {
  const searchFiled = document.getElementById("search-field");
  const searchText = searchFiled.value;
  //console.log(searchText);
  searchFiled.value = "";
  const cityName = searchText;
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=fdca80eee9324a12ccf2ac50e9327155
`;
  //console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displyWeather(data));
};

const displyWeather = (data) => {
  console.log(data);

  document.getElementById("city-name").innerText = data.name;
  document.getElementById("city-temp").innerText = data.main.temp;

  const weatherIcon = data.weather[0].icon;
  document.getElementById("weather-icon").src =
    "https://openweathermap.org/img/wn/" + weatherIcon + ".png";

  document.getElementById("description").innerText = data.weather[0].main;

  document.getElementById("city-humidity").innerText = data.main.humidity;
  document.getElementById("city-wind").innerText = data.wind.speed;
};
