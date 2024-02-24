var tempValue;
var topArray = [];
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');

//enter button commands
button.addEventListener('click', function (name) {
  fetchData();
});

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    fetchData();
  }
});

//fetching data from API
function fetchData() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374')
    .then(response => response.json())
    .then(data => {
      //assigning to HTML elements by class tags
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


function coldfits() {
  for(let r = 1; r<=2;r++) {
    topArray.push("cold_top_" + r + ".png");
  }
}

function chillyfits() {
  for(let r=1; r<=2;r++) {
    topArray.push("chilly_top_" + r + ".png");
  }
}

function warmfits() {
  for(let r=1; r <= 2; r++){
    topArray.push("warm_top_" + r + ".png");
  }
}

function hotfits() {
  for(let r=1; r <= 2; r++){
    topArray.push("hot_top_" + r + ".png");
  }
}


//checking temps and assigning clothes
if (tempValue >= 0 && tempValue <=40){
  coldfits();
} else if (tempValue >= 41 && tempValue <=60){
  chillyfits();
} else if (tempValue >= 61 && tempValue <=75){
  warmfits();
} else if(tempValue > 75) {
  hotfits();
} else {
  coldfits();
}
