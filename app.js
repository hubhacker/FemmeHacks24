var tempValue;
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');

button.addEventListener('click', function (name) {
  fetchData();
});

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    fetchData();
  }
});

function fetchData() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374')
    .then(response => response.json())
    .then(data => {
      tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];

      tempValue = 1.8 * (tempValue - 273.15) + 32;

      main.innerHTML = nameValue;
      desc.innerHTML = "Description: " + descValue;
      temp.innerHTML = "Temperature (°F): " + tempValue.toFixed(0) + "°";

      input.value = "";
    })
    .catch(err => alert("Please enter a valid city."));
}


