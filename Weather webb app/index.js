const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1f038f0916msh366f07514fbf51cp180db6jsn9ad9f1804359',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// cloud_pct.innerHTML = response.cloud_pct
// temp.innerHTML = response.temp
// feels_like.innerHTML = response.feels_like
// humidity.innerHTML = response.humidity
// min_temp.innerHTML = response.min_temp
// max_temp.innerHTML = response.max_temp
// wind_speed.innerHTML = response.wind_speed
// wind_degrees.innerHTML = response.wind_degrees
// sunrise.innerHTML = response.sunrise
// sunset.innerHTML = response.sunset

// } catch (error) {
//     console.error(error);
// }
const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(url + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            humidity2.innerHTML = response.humidity
            humidity.innerHTML = response.humidity
            cloud_pct.innerHTML = response.cloud_pct
            temp2.innerHTML = response.temp
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed2.innerHTML = response.wind_speed
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.err(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()//prevents the reloading of page
    getWeather(city.value)
})
getWeather("Delhi")
