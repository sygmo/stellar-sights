const astroApiSecret = '6f14831c8a735ba5d7c78419de6f4bd9a270586412858868719ccdb6c3ddf7f6f70d3f443c9b23b35acecacdadd9f74cefc634489ee774930c3150d63b1116b8ffd176c694ec0c8c9288fb86cd4c9fa84c3a7cf78d1f501292fe3eb8113b32dc19816d4f77e35c4977b00a527d9bc829'
const astroApiId = '1ef02872-a5fd-4790-bebe-b572308c9bb6'
const hash = btoa(`${astroApiId}:${astroApiSecret}`);

var redirectURL = './results.html';

//////////////////
//variables changed in geocode function to be used in astro api and weather api
let latitude
let longitude
//////////////////

 var requestUrl = new URL("https://api.astronomyapi.com/api/v2/bodies/positions")

// var params = {
//     longitude: longitude,
//     latitude: latitude,
//     elevation: "50",
//     from_date: from_date,
//     to_date: to_date,
//     time: time,
//   }
//  Object.keys(params).forEach(key => requestUrl.searchParams.append(key, params[key]))
// const planets = ['The Sun', 'The Moon', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Uranus', 'Pluto']
// var planetCounter = 0;
// function getAstro() {
//     fetch( 'https://salty-mountain-68764.herokuapp.com/' + requestUrl ,
// {       
//             headers: {
//                 "X-Requested-With": "XMLHttpRequest",
//                 Authorization: `Basic ${btoa(
//                     `${astroApiId}:${astroApiSecret}`
//                 )}`,
//             }
//         })
//         .then(function (response) {
//             console.log("outer response", response);
//             if (response.ok) {
//                 console.log("response",response);
//             }
//             return response.json()
//         })
//         .then(function (data) {
//             console.log(data);
            
//         // Planet Position Variables
//         // PlanetX = X Coordinates     PlanetY = Y Coordinates     PlanetRise = 'dawn' of that planet based on input'
//         // PlanetM = Planet Magnitude: How bright the object is on a -(bright) to +(dull) scale. Sun is -27, naked eye limit is +6.5.
//         var yContainer =  {
//              solDummyY: data.data.table.rows[0].cells[0].position.horizonal.azimuth.degrees,
//              lunaY: data.data.table.rows[1].cells[0].position.horizonal.azimuth.degrees,
//              mercuryY: data.data.table.rows[2].cells[0].position.horizonal.azimuth.degrees,
//              venusY: data.data.table.rows[3].cells[0].position.horizonal.azimuth.degrees,
//              earthDummyY: data.data.table.rows[4].cells[0].position.horizonal.azimuth.degrees,
//              marsY: data.data.table.rows[5].cells[0].position.horizonal.azimuth.degrees,
//              jupiterY: data.data.table.rows[6].cells[0].position.horizonal.azimuth.degrees,
//              saturnY: data.data.table.rows[7].cells[0].position.horizonal.azimuth.degrees,
//              neptuneY: data.data.table.rows[8].cells[0].position.horizonal.azimuth.degrees,
//              uranusY: data.data.table.rows[9].cells[0].position.horizonal.azimuth.degrees,
//              plutoY: data.data.table.rows[10].cells[0].position.horizonal.azimuth.degrees,
            
//         }
//         var plutoY = data.data.table.rows[10].cells[0].position.horizonal.azimuth.degrees
//         var uranusY = data.data.table.rows[9].cells[0].position.horizonal.azimuth.degrees
//         console.log(uranusY);
//         console.log(plutoY);
//         var yKeys = Object.keys(yContainer)
//         var yValues = Object.values(yContainer)
//         var xContainer = {
//             solDummyX: data.data.table.rows[0].cells[0].position.horizonal.altitude.degrees,
//             lunaX: data.data.table.rows[1].cells[0].position.horizonal.altitude.degrees,
//             mercuryX: data.data.table.rows[2].cells[0].position.horizonal.altitude.degrees,
//             venusX: data.data.table.rows[3].cells[0].position.horizonal.altitude.degrees,
//             earthDummyX: data.data.table.rows[4].cells[0].position.horizonal.altitude.degrees,
//             marsX: data.data.table.rows[5].cells[0].position.horizonal.altitude.degrees,
//             jupiterX: data.data.table.rows[6].cells[0].position.horizonal.altitude.degrees,
//             saturnX: data.data.table.rows[7].cells[0].position.horizonal.altitude.degrees,
//             neptuneX: data.data.table.rows[8].cells[0].position.horizonal.altitude.degrees,
//             uranusX: data.data.table.rows[9].cells[0].position.horizonal.altitude.degrees,
//             plutoX: data.data.table.rows[10].cells[0].position.horizonal.altitude.degrees

//         }
//         var xKeys = Object.keys(xContainer)
//         var xValues = Object.values(xContainer)
//         var riseContainer = {
//             solDummyRise: data.data.table.rows[0].cells[0].position.equatorial.rightAscension.hours,
//             lunaRise: data.data.table.rows[1].cells[0].position.equatorial.rightAscension.hours,
//             mercuryRise: data.data.table.rows[2].cells[0].position.equatorial.rightAscension.hours,
//             venusRise: data.data.table.rows[3].cells[0].position.equatorial.rightAscension.hours,
//             earthDummyRise: data.data.table.rows[4].cells[0].position.equatorial.rightAscension.hours,
//             marsRise: data.data.table.rows[5].cells[0].position.equatorial.rightAscension.hours,
//             jupiterRise: data.data.table.rows[6].cells[0].position.equatorial.rightAscension.hours,
//             saturnRise: data.data.table.rows[7].cells[0].position.equatorial.rightAscension.hours,
//             neptuneRise: data.data.table.rows[8].cells[0].position.equatorial.rightAscension.hours,
//             uranusRise: data.data.table.rows[9].cells[0].position.equatorial.rightAscension.hours,
//             plutoRise: data.data.table.rows[10].cells[0].position.equatorial.rightAscension.hours

//         }
//         var rKeys = Object.keys(riseContainer)
//         var rValues = Object.values(riseContainer)
//         var magnitudeContainer = {
//             solDummyM: data.data.table.rows[0].cells[0].extraInfo.magnitude,
//             lunaM: data.data.table.rows[1].cells[0].extraInfo.magnitude,
//             mercuryM: data.data.table.rows[2].cells[0].extraInfo.magnitude,
//             venusM: data.data.table.rows[3].cells[0].extraInfo.magnitude,
//             earthDummyM: data.data.table.rows[4].cells[0].extraInfo.magnitude,
//             marsM: data.data.table.rows[5].cells[0].extraInfo.magnitude,
//             jupiterM: data.data.table.rows[6].cells[0].extraInfo.magnitude,
//             saturnM: data.data.table.rows[7].cells[0].extraInfo.magnitude,
//             neptuneM: data.data.table.rows[8].cells[0].extraInfo.magnitude,
//             uranusM: data.data.table.rows[9].cells[0].extraInfo.magnitude,
//             plutoM: data.data.table.rows[10].cells[0].extraInfo.magnitude
//         }
//         var solDummyY = data.data.table.rows[0].cells[0].position.horizonal.altitude.degrees
//         console.log('TEST' + solDummyY)
//         var mKeys = Object.keys(magnitudeContainer)
//         var mValues = Object.values(magnitudeContainer)
//         // Object values.foreach.key/value
//         // Object.entries
//         console.log(xKeys)
//         console.log(xValues)
//         xValues.forEach((xValues)=>{
//         console.log(xValues)
//         if (xValues < 0) 
//             console.log(planets[planetCounter++] + ' is below the horizon')
//                    else if (xValues < 30)
//                     console.log(planets[planetCounter++] +  ' is low in the sky')
//                     else if (xValues < 60)
//                         console.log(planets[planetCounter++] + ' is around 45 degrees in the sky.')
//                         else if (xValues <= 89) 
//                             console.log(planets[planetCounter++] + ' is very high in the sky')
//                                 else if (xValues > 90)
//                                 console.log(planets[planetCounter++] + ' is below the horizon.')
//                                     else 
//                                     console.log('ERROR: X Coordinates are not functioning.') })
//             planetCounter = 0
//             yValues.forEach((yValues)=> {
//             console.log(yValues)
//             if (yValues < 30)
//             console.log(planets[planetCounter++] + ' is North')
//                 else if (yValues < 60)
//                 console.log(planets[planetCounter++] + ' is North-East')
//                     else if (yValues < 120)
//                     console.log(planets[planetCounter++] + ' is East')
//                         else if (yValues < 150)
//                         console.log(planets[planetCounter++] + ' is South-East')
//                             else if (yValues < 210)
//                             console.log(planets[planetCounter++] + ' is South')
//                                 else if (yValues < 240)
//                                 console.log(planets[planetCounter++] + ' is South-West')
//                                     else if (yValues < 300)
//                                     console.log(planets[planetCounter++] + ' is West')
//                                         else if (yValues < 330)
//                                         console.log(planets[planetCounter++] + ' is North-West')
//                                             else if (yValues <= 359)
//                                             console.log(planets[planetCounter++] + ' is North')
//                                                 else
//                                                 console.log('ERROR: Y Coordinates are not functioning') })
//         planetCounter = 0
//         mValues.forEach((mValues)=> {
//         console.log(mValues)
//         if (mValues < -13)
//             console.log("You'll go blind looking at this, stop")
//                 else if (mValues < -5)
//                 console.log(planets[planetCounter++] + ' is Very Bright')
//                     else if (mValues< 0)
//                     console.log(planets[planetCounter++] + ' is Bright')
//                         else if (mValues < 3)
//                         console.log (planets[planetCounter++] + ' is Visible, urban viewable')
//                             else if (mValues < 6)
//                             console.log(planets[planetCounter++] + 'is Barely visible, rural viewable')
//                                 else if (mValues < 9.5)
//                                 console.log(planets[planetCounter++] + ' is Faint, viewable with binoculars')
//                                     else if (mValues < 14)
//                                     console.log(planets[planetCounter++] + 'is Very Faint, viewable with 12in telescope')
//                                         else if (mValues < 20)
//                                         console.log(planets[planetCounter++] + 'is Extremely faint, viewable only with 200in telescope')
//                                             else if (mValues < 30)
//                                             console.log(planets[planetCounter++] + "You don't have the money to do this, and if you do, get off our app NASA, smh")
//                                                 else
//                                                 console.log('ERROR: Magnitude not functioning') })
                    

//         });
        
// }



// getAstro()

const generateWeather =(latitude, longitude)=>{
// random lat and long to use in the location
// var latitude = 30.542747;
// var longitude = -97.550011;
//** start of get weather function
var weatherAPIKEY =  '27bbc4e6b84a47d1b13160933221101' ;

// this parameter will change, depending to input from user 
// var weatherLOCNUM = '30.542747,-97.550011' ;
var weatherLOCNUM;

// save a copy of the data received from API call
var weatherDATA;

// function will add latitude and longitude parameters in one single string
function getWeatherParam (){
  var lat = latitude.toString();
  var lon = longitude.toString();
  weatherLOCNUM = lat.concat(",",lon);
}

// Get weather function 
// will grab weather information from API based on weatherLOCNUM
// data responds in current, forecast , location
function getWeather () {
  // get latitude and longitude in one string
  getWeatherParam();

  //start fetch
    fetch('http://api.weatherapi.com/v1/forecast.json?key=' + weatherAPIKEY + '&q=' + weatherLOCNUM + '&days=3')
    
      .then(function(response){
        if (response.ok){

          response.json()
            .then(function(data) {
              // save data to global parameter to use in display function
              weatherDATA = data;

              // moon phases, sunrise, susnset by day
              console.log("Moon Phase " + data.forecast.forecastday[0].astro.moon_phase);
              console.log("Moonrise time "+ data.forecast.forecastday[0].astro.moonrise);
              console.log("Moonset time " + data.forecast.forecastday[0].astro.moonset);
              console.log("Sunrise time " + data.forecast.forecastday[0].astro.sunrise);
              console.log("Sunset time " + data.forecast.forecastday[0].astro.sunset);
              
              // display weather on results page
              weatherDATAdisplay();
          });
        } else {
          console.log("error");
        }
      })
} 
// end of getWeather

getWeather(); 

// these variables will change depeending on user input/slider
var weatherDAY = 1; //present = 0, one day in future = 1, two day in future =2
var weatherTIME = 12; // military time 0 - 23

// global parameters used on weather display
var Wind = "Wind: ";
var Humidity = "Humidity: ";
var Rain = "Chance of Rain: ";
var sckyCondition = "SKY Condition: ";
var mph = " mph";
var persentageIcon = "%";
var icon = "http:";
 
var weatherDisplay = document.querySelector('.weather');
var iconEl = document.createElement('img');
var projectRow = document.createElement('ul');
var TemperatureEl = document.createElement('li');
var TemperatureEl2 = document.createElement('li');
var WindEl = document.createElement('li');
var RainEl = document.createElement('li');
var HumidityEl = document.createElement('li');
var skyConditionEl = document.createElement('li');

// function will Display weather on results page
// needs the parameters of date and time to pull data from the weatherDATA
// weatherDAY , weatherTIME
function weatherDATAdisplay (){
  var weatherE1;
 
  console.log("weatherDATA ");
  console.log(weatherDATA);

  // display icon
  weatherE1 = weatherDATA.forecast.forecastday[weatherDAY].hour[weatherTIME].condition.icon;
  iconEl.src = icon + weatherE1;

  // display temperature
  weatherE1 = weatherDATA.forecast.forecastday[weatherDAY].hour[weatherTIME].temp_f;
  TemperatureEl.textContent = weatherE1;
  TemperatureEl2.textContent = "Temperature";

  // display wind speed
  weatherE1 = weatherDATA.forecast.forecastday[weatherDAY].hour[weatherTIME].wind_mph;
  WindEl.textContent = Wind + weatherE1 + mph;

  // display humidity
  weatherE1 = weatherDATA.forecast.forecastday[weatherDAY].hour[weatherTIME].humidity;
  HumidityEl.textContent = Humidity + weatherE1 + persentageIcon;

  // display precipitation percentage
  weatherE1 = weatherDATA.forecast.forecastday[weatherDAY].hour[weatherTIME].chance_of_rain;
  RainEl.textContent = Rain + weatherE1 + persentageIcon;

  // display skycondition
  weatherE1 = weatherDATA.forecast.forecastday[weatherDAY].hour[weatherTIME].condition.text;
  skyConditionEl.textContent = sckyCondition + weatherE1;

  populateBanner(weatherE1); // sends weather conditions to results banner

  // append to list
  projectRow.append(
      TemperatureEl,
      TemperatureEl2,
      WindEl,
      HumidityEl,
      RainEl,
      skyConditionEl);

  // append list to the results page
  weatherDisplay.append(iconEl,projectRow);
  weathersetAtributes();
}
// end of weatherDATAdisplay

function weathersetAtributes(){
  // set weather atributes
    iconEl.setAttribute("style", "width:100% ");
    TemperatureEl.setAttribute("style", "font-size: 40px; font-weight: bold");
    TemperatureEl2.setAttribute("style", "font-size: 18px; font-weight: bold");
    projectRow.setAttribute("style", "font-size: 12px");
    weatherDisplay.setAttribute("style", "background-color: #36e5eb");
}
// end of weather atributes

// banner loudly declares if planets are visible or not, depending on sky conditions
function populateBanner(conditions) {
  var conditions = conditions.toLowerCase();
  var bannerHeader = document.querySelector(".bannerText");
  console.log("weather conditions: " + conditions);

  if (conditions == "sunny" || conditions == "clear") {
    // display "all-clear" banner
    bannerHeader.textContent = "All clear! The following planets are visible:";
  } else if (conditions.includes("patchy") || conditions.includes("partly")) {
    // display "possible" banner
    bannerHeader.textContent = "Sky conditions are spotty, but the following planets may be visible:";
  } else {
    // display "no visibility banner"
    bannerHeader.textContent = "Sky conditions are poor. The following planets cannot be seen:";
  }
}

}//////end of generateWeather function



///////////////////////////////////////////////
//pull from MapBox API for latitude and longitude
let address
let inputAddress = document.querySelector('#location-input')
inputAddress.addEventListener('submit', (e)=>{
  e.preventDefault()
  console.log(e.target.elements[0].value)
  address = e.target.elements[0].value
  e.target.elements[0].value = ''
  geocode(address)
  createdLocation(address)
  generateSavedLocation()
})
  

  const geocode = async(address)=>{
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiY3B0cGxhbmV0IiwiYSI6ImNreWFiNXA5OTAzcXkydnA5NWs1NXY1OWwifQ.jMJiAvDc9I0KPpUfg18U8g`)
    if(response.status === 200){
      const data = await response.json()
      console.log(data)
      console.log(data.features[0].center[0])
      console.log(data.features[0].center[1])
      longitude = data.features[0].center[0]
      latitude = data.features[0].center[1]
    }
    //this is for astro API
    // getPlanetInfo(latitude, longitude);
    document.location.replace(redirectURL);
    generateWeather(latitude, longitude);
  
  }

  
//save inputs from user and place i Array
//limit to only 5 inputs in array
//renders array and places on homepage at the bottom 
//buttons are clickable for use :)

let locationSaved = []
    const createdLocation = (input)=>{
      if(!locationSaved.includes(input)){
        loadLocation()
        if(locationSaved.length === 5){
          locationSaved.shift()
        }
        locationSaved.push(input)
        saveLocation()
      } 
    }

const saveLocation = ()=>{
    localStorage.setItem('location', JSON.stringify(locationSaved))
}
  
    const loadLocation = ()=>{
      const locationJSON = localStorage.getItem('location')
      try{
        locationSaved = locationJSON ? JSON.parse(locationJSON) : []
      }catch (error){
        locationSaved = []
      }
    }
    
    const collection = document.querySelector('.collection')
    
    const generateSavedLocation = ()=>{
      loadLocation()
      
      collection.innerHTML = ''
      if(locationSaved.length > 0){
        locationSaved.forEach((location)=>{
          
          const locationEl = document.createElement('a')
          locationEl.setAttribute('href', '#!')
          locationEl.setAttribute('class', 'collection-item')
          
          locationEl.textContent = location
          
          locationEl.addEventListener('click', (e)=>{
              e.preventDefault()
              console.log(e.target.innerText)
              address = e.target.innerText
              e.target.innerText = ''
              geocode(address)
              createdLocation(address)
              generateSavedLocation()
          })
          collection.appendChild(locationEl)
        })
      }
    }
    generateSavedLocation()
 ///////////////////////////////////////////     

// dummy planet data
var marsX = 277.29;
var marsY = -55.17;
var marsR = 17.37;
var marsM = 1.488;

// created planet display using Materialize cards
// TODO: loop through available planets
var availableBodiesDisplay = document.querySelector('.available-bodies');
var planetCardEl = document.createElement('div');
planetCardEl.setAttribute('class', 'card horizontal');
var planetImageDivEl = document.createElement('div');
planetImageDivEl.setAttribute('class', 'card-image valign-wrapper');
var planetImageEl = document.createElement('img');
planetImageEl.setAttribute('src', 'assets/img/planets/Mars.png');
var planetContentEl = document.createElement('div');
planetContentEl.setAttribute('class', 'card-content');
var planetHeader = document.createElement('h4');
planetHeader.textContent = "Mars" ;
var planetContent = document.createElement('p');
planetContent.textContent = "Coordinates: " + marsX + ", " + marsY + " Horizon: " + marsR + " Brightness: " + marsM;
planetImageDivEl.append(planetImageEl);
planetContentEl.append(planetHeader, planetContent);
planetCardEl.append(planetImageDivEl, planetContentEl);
availableBodiesDisplay.append(planetCardEl);


//js slider code
var slider = document.getElementById('test-slider');
  noUiSlider.create(slider, {
   start: [0],
   connect: true,
   step: 1,
   orientation: 'horizontal', // 'horizontal' or 'vertical'
   range: {
     'min': 0,
     'max': 72
   },

   format:({
       from: function(value) {
      return parseInt(value);
      },
        to: function(value) {
      return parseInt(value);
      }
    })

});

