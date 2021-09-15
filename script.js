// "https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=931bf1e9927b32abbd7b0567f0dfd883"


// search on pressing enter key======>
document.getElementById("location-value").addEventListener("keyup", function(event) {
if (event.key === "Enter") {
    document.getElementById("load-Data").click();
}
});

const loadData = () => {

   

    // collecting city name
    const cityName = document.getElementById("location-value");
    const cityValue = cityName.value;
    cityName.value = "";

    // fetching api data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=931bf1e9927b32abbd7b0567f0dfd883`)
        .then(res => res.json())
        .then(data => weatherDetails(data));
}

const weatherDetails = (weather) => {
    // console.log(weather);
    const weatherDes = document.getElementById("weather-status");
    weatherDes.textContent = "";


    // error handling
    if (weather.cod == "404" || weather.cod == "400") {
        weatherDes.innerHTML = `<p> Please enter a valid city name! <p>`
    }


    // weather icon
    let img = document.createElement("img");
    img.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    weatherDes.appendChild(img);

    // weather city name
    let h1CityName = document.createElement("h1");
    h1CityName.innerText = `Weather in ${weather.name}(${weather.sys.country})`;
    weatherDes.appendChild(h1CityName);

    // weather day
    let h1DayName = document.createElement("h1");

    // creating all days array
    let allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    let dateTime = new Date(weather.dt * 1000); // to get the DateTime. 
    h1DayName.innerText = allDays[dateTime.getDay()]; // It will give day index, and based on index we can get day name from the array. 

    weatherDes.appendChild(h1DayName);


    // temperature
    let h3Temp = document.createElement("h3");
    h3Temp.innerText = `${Math.ceil(weather.main.temp)}°C`;
    weatherDes.appendChild(h3Temp);

    // weather description
    let h1WeatherDetail = document.createElement("h1");

    h1WeatherDetail.innerText = "";
    
    h1WeatherDetail.innerText = `${weather.weather[0].main}`;

    weatherDes.appendChild(h1WeatherDetail);

  document.getElementById("weather-status").style.display="block";

}