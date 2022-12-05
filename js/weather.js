const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "f8f4c311956429cd2320e3da9ff72825";

function geoLocationSuccess(position) {
  //console.dir(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    city.innerText = data.name;
    //clear 19.2도
    weather.innerText = `${data.weather[0].main} / ${data.main.temp} 도`;
  })
}

function geoLocationErr() {
  console.log("위치정보를 찾을 수 없습니다.");
}


//addEventListener 결이 비슷
//함수를 호출해서 하는 것
navigator.geolocation.getCurrentPosition(geoLocationSuccess, geoLocationErr);
100121798917
