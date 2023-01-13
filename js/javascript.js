var link = "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e57d7c6399c78a30ff62c81dc261460c";

var request = new XMLHttpRequest();

request.open('GET', link, true);
request.onload = function() {
    var obj = JSON.parse(this.response);
    console.log(obj);
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('temp').innerHTML = Math.round(obj.main.temp - 273.15);
    document.getElementById('icon').src = "https://www.openweathermap.org/img/w/" + obj.weather[0].icon + ".png";

}

if (request.status >= 200 && request.status < 400) {
    var temp = obj.main.temp;
} else {
    console.log("data not found");
}
request.send();