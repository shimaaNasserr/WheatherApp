var inputSearch = document.getElementById("myinput")
var buttonSearch = document.getElementById("mybutton")
let responseList = {};
buttonSearch.addEventListener("click", function () {
  async function searchCity(search) {

    let api = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=3830f730cdc44143912124346232002&q=${search}&days=3`)
    response = await api.json()
    responseList = response
    display()
  }
  searchCity(inputSearch.value)

})

function display() {
  var month = responseList.forecast.forecastday[0].date
  const months = ["January", "February", "March", "April", "May", "June", "Julay", "Ogest", "Septemper", "October", "November", "Decemper"]
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let date = new Date(`${month}`)

  let temp = `<div class="col-md-4 p-0 card text-white">
    <div class="card-header d-flex justify-content-between align-items-center">
     <p>${days[date.getDay()]}</p>
     <p>${date.getDate()}${months[date.getMonth()]}</p>
    </div>
    <div class="card-body py-5">
     <p>${responseList.location.name}</p>
     <div class="degree d-flex justify-content-between">
     <h1>${responseList.current.temp_c}<sup>o</sup></h1>
     <img src="http:${responseList.current.condition.icon}" alt="">
    </div>
    <p class="state" style=" color:rgb(0, 154, 216); ">${responseList.current.condition.text}</p>
    <span ><img src="images/icon-umberella.png" class="me-2">${responseList.current.humidity}%</span>
    <span class="ps-3" ><img src="images/icon-wind.png" class="me-2">${responseList.current.wind_kph}Km/h</span>
    <span class="ps-3" ><img src="images/icon-compass.png" class="me-2">${responseList.current.wind_dir}</span>
    </div>
    </div>
  </div>


  <div class="col-md-4 p-0 card text-center text-white midcard" >
    <div class="card-header ">
     <p >${days[date.getDay() + 1]}</p>
    </div>
    <div class="card-body py-5">
       <img src="http:${responseList.forecast.forecastday[1].day.condition.icon}" alt="" class="mb-2">
     <h4>${responseList.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup> C</h4>
     <p>${responseList.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></p>
  <p class="state" style=" color:rgb(0, 154, 216); ">${responseList.forecast.forecastday[1].day.condition.text}</p>
    </div>
    </div>


    <div class="col-md-4 p-0 card text-center text-white">
      <div class="card-header  ">
       <p >${days[date.getDay() + 2]}</p>
      </div>
      <div class="card-body py-5">
         <img src="http:${responseList.forecast.forecastday[2].day.condition.icon}" alt="" class="mb-2">
       <h4>${responseList.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup> C</h4>
       <p>${responseList.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></p>
    <p class="state" style=" color:rgb(0, 154, 216); " >${responseList.forecast.forecastday[2].day.condition.text}</p>
      </div>
      </div>
    </div>
  `
  document.getElementById("myRow").innerHTML = temp
}
