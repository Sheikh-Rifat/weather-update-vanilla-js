const loadData = () => {
    // collecting city name
    const cityName = document.getElementById("location-value");
    const cityValue = cityName.value;
    cityName.value = "";

    // fetching api data
    fetch(`api.openweathermap.org`)
        .then(res => res.json())
        .then(data => weatherDetails(data));
}

const weatherDetails = (weather) => {
    console.log(weather);
    const weatherDes = document.getElementById("weather-status");
    weatherDes.textContent = "";


    // error handling
    if(weather.cod=="404" || weather.cod=="400"){
       weatherDes.innerHTML=`<p> Please enter a valid city name! <p>`
    }


    // weather icon
    let img = document.createElement("img");
    img.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    weatherDes.appendChild(img);

    // weather city name
    let h1CityName = document.createElement("h1");
    h1CityName.innerText = `Weather in ${weather.name}(${weather.sys.country})`;
    weatherDes.appendChild(h1CityName);

    // temperature
    let h3Temp = document.createElement("h3");
    h3Temp.innerText = `${((weather.main.temp)-273.14).toFixed(2)}°C`;
    weatherDes.appendChild(h3Temp);

    // weather description
    let h1WeatherDetail = document.createElement("h1");

    h1WeatherDetail.innerText = "";
    h1WeatherDetail.innerText = `${weather.weather[0].main}`;

    weatherDes.appendChild(h1WeatherDetail);



}
