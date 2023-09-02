/* eslint-disable prefer-arrow-callback */
import './style.css';

const locationn = document.getElementById('location');
const submit = document.getElementById('submit');
const img = document.querySelector('img');
const info = document.getElementById('info');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const loader = document.getElementById('loader');
const kmh = document.getElementById('kmh');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const region = document.getElementById('region');
const country = document.getElementById('country');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(`https://api.weatherapi.com/v1/current.json?key=ea0d880adb5e44778c9102019232908&q=${locationn.value}`, { mode: 'cors' })
    .then(function (response) {
      loader.style.display = 'block';
      return response.json();
    }).then(function (response) {
      console.log(response);
      loader.style.display = 'none';
      city.textContent = response.location.name;
      info.textContent = response.current.condition.text;
      temp.innerHTML = `&#8451; ${response.current.feelslike_c}`;
      kmh.textContent = `Km/h ${response.current.gust_kph}`;
       humidity.textContent = `% ${response.current.humidity}`;
       pressure.innerHTML = `In_: ${response.current.pressure_in}`;
       region.textContent = response.location.region;
      country.textContent = response.location.country;
      sliderFunc();
      if (info.textContent === 'Sunny' || info.textContent === 'Clear') {
        document.body.style.backgroundImage = 'url(sunny.jpg)';
      } else if (info.textContent === 'Light rain' || info.textContent === 'Moderate rain' 
      || info.textContent === 'Moderate rain at times' || info.textContent === 'Light drizzle'
      || info.textContent === 'Patchy rain possible' || info.textContent === 'Patch light rain'
      || info.textContent === 'Light rain shower' || info.textContent === 'Light freezing rain') {
        document.body.style.backgroundImage = 'url(light-rain.jpg)';
      } else if (info.textContent === 'Partly cloudy') {
        document.body.style.backgroundImage = 'url(partly-cloudy.jpg)';
      } else if (info.textContent === 'Overcast' || info.textContent === 'Cloudy') {
        document.body.style.backgroundImage = 'url(overcast.jpg)';
      } else if (info.textContent === 'Blowing snow' || info.textContent === 'Patchy light snow'
      || info.textContent === 'Light snow' || info.textContent === 'Patchy moderate snow' 
      || info.textContent === 'Moderate snow' || info.textContent === 'Heavy snow'
      || info.textContent === 'Moderate or heavy snow with thunder' || info.textContent === 'Moderate or heavy snow showers'
      || info.textContent === 'Light snow showers' || info.textContent === 'Patchy heavy snow') {
        document.body.style.backgroundImage = 'url(snow.jpg)';
      } else if (info.textContent === 'Moderate or heavy rain with thunder' || info.textContent === 'Torrential rain shower'
      || info.textContent === 'Moderate or heavy rain shower' || info.textContent === 'Moderate or heavy rain shower'
      || info.textContent === 'Moderate or heavy freezing rain' || info.textContent === 'Heavy rain'
      || info.textContent === 'Heavy rain at times' || info.textContent === 'Thundery outbreaks possible'
      || info.textContent === 'Light freezing rain') {
        document.body.style.backgroundImage = 'url(thunderstorm.jpg)';
      }
    }).catch((err) => alert('Something went wrong, Your location cannot be found.'));
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=Yc2Fs0Dsq95BnR20OkcdMzDX9N6r6nke&s=weather', { mode: 'cors' })
    .then(function (response) {
      loader.style.display = 'block';
      return response.json();
    }).then(function (response) {
      loader.style.display = 'none';
      img.src = response.data.images.original.url;
    });
});

window.addEventListener('load', () => {
  fetch('https://api.weatherapi.com/v1/current.json?key=ea0d880adb5e44778c9102019232908&q=jelsa', { mode: 'cors' })
    .then(function (response) {
      return response.json();
    }).then(function (response) {
      loader.style.display = 'none';
      city.textContent = response.location.name;
      info.textContent = response.current.condition.text;
      temp.innerHTML = `&#8451; ${response.current.feelslike_c}`;
      kmh.textContent = `Km/h ${response.current.gust_kph}`;
       humidity.textContent = `% ${response.current.humidity}`;
       pressure.innerHTML = `In_: ${response.current.pressure_in}`;
       region.textContent = response.location.region;
      country.textContent = response.location.country;
      if (info.textContent === 'Sunny' || info.textContent === 'Clear') {
        document.body.style.backgroundImage = 'url(sunny.jpg)';
      } else if (info.textContent === 'Light rain' || info.textContent === 'Moderate rain' 
      || info.textContent === 'Moderate rain at times' || info.textContent === 'Light drizzle'
      || info.textContent === 'Patchy rain possible' || info.textContent === 'Patch light rain'
      || info.textContent === 'Light rain shower' || info.textContent === 'Light freezing rain') {
        document.body.style.backgroundImage = 'url(light-rain.jpg)';
      } else if (info.textContent === 'Partly cloudy') {
        document.body.style.backgroundImage = 'url(partly-cloudy.jpg)';
      } else if (info.textContent === 'Overcast' || info.textContent === 'Cloudy') {
        document.body.style.backgroundImage = 'url(overcast.jpg)';
      } else if (info.textContent === 'Blowing snow' || info.textContent === 'Patchy light snow'
      || info.textContent === 'Light snow' || info.textContent === 'Patchy moderate snow' 
      || info.textContent === 'Moderate snow' || info.textContent === 'Heavy snow'
      || info.textContent === 'Moderate or heavy snow with thunder' || info.textContent === 'Moderate or heavy snow showers'
      || info.textContent === 'Light snow showers' || info.textContent === 'Patchy heavy snow') {
        document.body.style.backgroundImage = 'url(snow.jpg)';
      } else if (info.textContent === 'Moderate or heavy rain with thunder' || info.textContent === 'Torrential rain shower'
      || info.textContent === 'Moderate or heavy rain shower' || info.textContent === 'Moderate or heavy rain shower'
      || info.textContent === 'Moderate or heavy freezing rain' || info.textContent === 'Heavy rain'
      || info.textContent === 'Heavy rain at times' || info.textContent === 'Thundery outbreaks possible'
      || info.textContent === 'Light freezing rain') {
        document.body.style.backgroundImage = 'url(thunderstorm.jpg)';
      }
    });
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=Yc2Fs0Dsq95BnR20OkcdMzDX9N6r6nke&s=weather', { mode: 'cors' })
    .then(function (response) {
      
      return response.json();
    }).then(function (response) {
      loader.style.display = 'block';
      
      img.src = response.data.images.original.url;
      loader.style.display = 'none';
    });
});

const slider = document.getElementById('slider');
function sliderFunc() {
  fetch(`https://api.weatherapi.com/v1/current.json?key=ea0d880adb5e44778c9102019232908&q=${city.textContent}`, { mode: 'cors' })
    .then(function (response) {
      return response.json();
    }).then(function (response) {
      loader.style.display = 'none';
      city.textContent = response.location.name;
      info.textContent = response.current.condition.text;
      temp.innerHTML = `&#8451; ${response.current.feelslike_c}`;
      kmh.textContent = `Km/h ${response.current.gust_kph}`;
       humidity.textContent = `% ${response.current.humidity}`;
       pressure.innerHTML = `In_: ${response.current.pressure_in}`;
       region.textContent = response.location.region;
      country.textContent = response.location.country;
      if (slider.checked === true) {
        temp.innerHTML = `&#8457; ${response.current.feelslike_f}`;
        kmh.textContent = `mph ${response.current.gust_mph}`;
        pressure.innerHTML = `Mb/a_: ${response.current.pressure_in}`;
      } else {
        temp.innerHTML = `&#8451; ${response.current.feelslike_c}`;
        kmh.textContent = `Km/h ${response.current.gust_kph}`;
        pressure.innerHTML = `In_: ${response.current.pressure_in}`;
      }
    });
}

slider.addEventListener('click', sliderFunc);
