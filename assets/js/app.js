const astroApiSecret = '6f14831c8a735ba5d7c78419de6f4bd9a270586412858868719ccdb6c3ddf7f6f70d3f443c9b23b35acecacdadd9f74cefc634489ee774930c3150d63b1116b8ffd176c694ec0c8c9288fb86cd4c9fa84c3a7cf78d1f501292fe3eb8113b32dc19816d4f77e35c4977b00a527d9bc829'
const astroApiId = '1ef02872-a5fd-4790-bebe-b572308c9bb6'
const hash = btoa(`${astroApiId}:${astroApiSecret}`);

var requestUrl = new URL("https://api.astronomyapi.com/api/v2/bodies/positions")

var params = {
    longitude: longitude,
    latitude: latitude,
    elevation: "50",
    from_date: from_date,
    to_date: to_date,
    time: time,
  }
 Object.keys(params).forEach(key => requestUrl.searchParams.append(key, params[key]))
const planets = ['The Sun', 'The Moon', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Uranus', 'Pluto']
var planetCounter = 0;
function getAstro() {
    fetch( 'https://salty-mountain-68764.herokuapp.com/' + requestUrl ,
{       
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                Authorization: `Basic ${btoa(
                    `${astroApiId}:${astroApiSecret}`
                )}`,
            }
        })
        .then(function (response) {
            console.log("outer response", response);
            if (response.ok) {
                console.log("response",response);
            }
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            
        // Planet Position Variables
        // PlanetX = X Coordinates     PlanetY = Y Coordinates     PlanetRise = 'dawn' of that planet based on input'
        // PlanetM = Planet Magnitude: How bright the object is on a -(bright) to +(dull) scale. Sun is -27, naked eye limit is +6.5.
        var yContainer =  {
             solDummyY: data.data.table.rows[0].cells[0].position.horizonal.azimuth.degrees,
             lunaY: data.data.table.rows[1].cells[0].position.horizonal.azimuth.degrees,
             mercuryY: data.data.table.rows[2].cells[0].position.horizonal.azimuth.degrees,
             venusY: data.data.table.rows[3].cells[0].position.horizonal.azimuth.degrees,
             earthDummyY: data.data.table.rows[4].cells[0].position.horizonal.azimuth.degrees,
             marsY: data.data.table.rows[5].cells[0].position.horizonal.azimuth.degrees,
             jupiterY: data.data.table.rows[6].cells[0].position.horizonal.azimuth.degrees,
             saturnY: data.data.table.rows[7].cells[0].position.horizonal.azimuth.degrees,
             neptuneY: data.data.table.rows[8].cells[0].position.horizonal.azimuth.degrees,
             uranusY: data.data.table.rows[9].cells[0].position.horizonal.azimuth.degrees,
             plutoY: data.data.table.rows[10].cells[0].position.horizonal.azimuth.degrees,
            
        }
        var plutoY = data.data.table.rows[10].cells[0].position.horizonal.azimuth.degrees
        var uranusY = data.data.table.rows[9].cells[0].position.horizonal.azimuth.degrees
        console.log(uranusY);
        console.log(plutoY);
        var yKeys = Object.keys(yContainer)
        var yValues = Object.values(yContainer)
        var xContainer = {
            solDummyX: data.data.table.rows[0].cells[0].position.horizonal.altitude.degrees,
            lunaX: data.data.table.rows[1].cells[0].position.horizonal.altitude.degrees,
            mercuryX: data.data.table.rows[2].cells[0].position.horizonal.altitude.degrees,
            venusX: data.data.table.rows[3].cells[0].position.horizonal.altitude.degrees,
            earthDummyX: data.data.table.rows[4].cells[0].position.horizonal.altitude.degrees,
            marsX: data.data.table.rows[5].cells[0].position.horizonal.altitude.degrees,
            jupiterX: data.data.table.rows[6].cells[0].position.horizonal.altitude.degrees,
            saturnX: data.data.table.rows[7].cells[0].position.horizonal.altitude.degrees,
            neptuneX: data.data.table.rows[8].cells[0].position.horizonal.altitude.degrees,
            uranusX: data.data.table.rows[9].cells[0].position.horizonal.altitude.degrees,
            plutoX: data.data.table.rows[10].cells[0].position.horizonal.altitude.degrees

        }
        var xKeys = Object.keys(xContainer)
        var xValues = Object.values(xContainer)
        var riseContainer = {
            solDummyRise: data.data.table.rows[0].cells[0].position.equatorial.rightAscension.hours,
            lunaRise: data.data.table.rows[1].cells[0].position.equatorial.rightAscension.hours,
            mercuryRise: data.data.table.rows[2].cells[0].position.equatorial.rightAscension.hours,
            venusRise: data.data.table.rows[3].cells[0].position.equatorial.rightAscension.hours,
            earthDummyRise: data.data.table.rows[4].cells[0].position.equatorial.rightAscension.hours,
            marsRise: data.data.table.rows[5].cells[0].position.equatorial.rightAscension.hours,
            jupiterRise: data.data.table.rows[6].cells[0].position.equatorial.rightAscension.hours,
            saturnRise: data.data.table.rows[7].cells[0].position.equatorial.rightAscension.hours,
            neptuneRise: data.data.table.rows[8].cells[0].position.equatorial.rightAscension.hours,
            uranusRise: data.data.table.rows[9].cells[0].position.equatorial.rightAscension.hours,
            plutoRise: data.data.table.rows[10].cells[0].position.equatorial.rightAscension.hours

        }
        var rKeys = Object.keys(riseContainer)
        var rValues = Object.values(riseContainer)
        var magnitudeContainer = {
            solDummyM: data.data.table.rows[0].cells[0].extraInfo.magnitude,
            lunaM: data.data.table.rows[1].cells[0].extraInfo.magnitude,
            mercuryM: data.data.table.rows[2].cells[0].extraInfo.magnitude,
            venusM: data.data.table.rows[3].cells[0].extraInfo.magnitude,
            earthDummyM: data.data.table.rows[4].cells[0].extraInfo.magnitude,
            marsM: data.data.table.rows[5].cells[0].extraInfo.magnitude,
            jupiterM: data.data.table.rows[6].cells[0].extraInfo.magnitude,
            saturnM: data.data.table.rows[7].cells[0].extraInfo.magnitude,
            neptuneM: data.data.table.rows[8].cells[0].extraInfo.magnitude,
            uranusM: data.data.table.rows[9].cells[0].extraInfo.magnitude,
            plutoM: data.data.table.rows[10].cells[0].extraInfo.magnitude
        }
        var solDummyY = data.data.table.rows[0].cells[0].position.horizonal.altitude.degrees
        console.log('TEST' + solDummyY)
        var mKeys = Object.keys(magnitudeContainer)
        var mValues = Object.values(magnitudeContainer)
        // Object values.foreach.key/value
        // Object.entries
        console.log(xKeys)
        console.log(xValues)
        xValues.forEach((xValues)=>{
        console.log(xValues)
        if (xValues < 0) 
            console.log(planets[planetCounter++] + ' is below the horizon')
                   else if (xValues < 30)
                    console.log(planets[planetCounter++] +  ' is low in the sky')
                    else if (xValues < 60)
                        console.log(planets[planetCounter++] + ' is around 45 degrees in the sky.')
                        else if (xValues <= 89) 
                            console.log(planets[planetCounter++] + ' is very high in the sky')
                                else if (xValues > 90)
                                console.log(planets[planetCounter++] + ' is below the horizon.')
                                    else 
                                    console.log('ERROR: X Coordinates are not functioning.') })
            planetCounter = 0
            yValues.forEach((yValues)=> {
            console.log(yValues)
            if (yValues < 30)
            console.log(planets[planetCounter++] + ' is North')
                else if (yValues < 60)
                console.log(planets[planetCounter++] + ' is North-East')
                    else if (yValues < 120)
                    console.log(planets[planetCounter++] + ' is East')
                        else if (yValues < 150)
                        console.log(planets[planetCounter++] + ' is South-East')
                            else if (yValues < 210)
                            console.log(planets[planetCounter++] + ' is South')
                                else if (yValues < 240)
                                console.log(planets[planetCounter++] + ' is South-West')
                                    else if (yValues < 300)
                                    console.log(planets[planetCounter++] + ' is West')
                                        else if (yValues < 330)
                                        console.log(planets[planetCounter++] + ' is North-West')
                                            else if (yValues <= 359)
                                            console.log(planets[planetCounter++] + ' is North')
                                                else
                                                console.log('ERROR: Y Coordinates are not functioning') })
        planetCounter = 0
        mValues.forEach((mValues)=> {
        console.log(mValues)
        if (mValues < -13)
            console.log("You'll go blind looking at this, stop")
                else if (mValues < -5)
                console.log(planets[planetCounter++] + ' is Very Bright')
                    else if (mValues< 0)
                    console.log(planets[planetCounter++] + ' is Bright')
                        else if (mValues < 3)
                        console.log (planets[planetCounter++] + ' is Visible, urban viewable')
                            else if (mValues < 6)
                            console.log(planets[planetCounter++] + 'is Barely visible, rural viewable')
                                else if (mValues < 9.5)
                                console.log(planets[planetCounter++] + ' is Faint, viewable with binoculars')
                                    else if (mValues < 14)
                                    console.log(planets[planetCounter++] + 'is Very Faint, viewable with 12in telescope')
                                        else if (mValues < 20)
                                        console.log(planets[planetCounter++] + 'is Extremely faint, viewable only with 200in telescope')
                                            else if (mValues < 30)
                                            console.log(planets[planetCounter++] + "You don't have the money to do this, and if you do, get off our app NASA, smh")
                                                else
                                                console.log('ERROR: Magnitude not functioning') })
                    

        });
        
}



getAstro()

// //** start of get weather function
// var weatherAPIKEY =  '27bbc4e6b84a47d1b13160933221101' ;
// var zipcodeNUM = '78634' ;

// // Get weather function 
// // will grab weather information from API 
// // data responds in current, forecast , location

// console.log("start Get Weather funtion");

// function getWeather () {
//     fetch('http://api.weatherapi.com/v1/forecast.json?key=' + weatherAPIKEY + '&q=' + zipcodeNUM + '&days=3')
    
//       .then(function(response){
//         if (response.ok){

//           console.log("response ");
//           console.log(response);

//           response.json()
//             .then(function(data) {

//               console.log("data ");
//               console.log(data);

//               console.log("data current conditions ");
//               console.log(data.current.condition);
//               console.log("day 1 ");
//               console.log(data.forecast.forecastday[0]);
//               console.log("Moon Phase " + data.forecast.forecastday[0].astro.moon_phase);
//               console.log("Moonrise "+ data.forecast.forecastday[0].astro.moonrise);
//               console.log("Moonset " + data.forecast.forecastday[0].astro.moonset);
//               console.log("Sunrise " + data.forecast.forecastday[0].astro.sunrise);
//               console.log("Sunset " + data.forecast.forecastday[0].astro.sunset);
//               console.log("humidity " + data.forecast.forecastday[0].day.avghumidity);
//               console.log("chances of rain " + data.forecast.forecastday[0].day.daily_chance_of_rain);
//               console.log("By the hour conditions ");
//               console.log("Chance of rain " + data.forecast.forecastday[0].hour[0].chance_of_rain);
//               console.log("Cloud " + data.forecast.forecastday[0].hour[0].cloud);
//               console.log("Sky condition " + data.forecast.forecastday[0].hour[0].condition.text);              // console.log("day 2 ");
//               // console.log(data.forecast.forecastday[1]);
//               // console.log("day 3 ");
//               // console.log(data.forecast.forecastday[2]);
//           });
//         } else {
//           console.log("error");
//         }
//       })

// }

// getWeather(); 

//     //pull from MapBox API for latitude and longitude
// const geocode = async()=>{
//     const response = await fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY3B0cGxhbmV0IiwiYSI6ImNreWFiNXA5OTAzcXkydnA5NWs1NXY1OWwifQ.jMJiAvDc9I0KPpUfg18U8g')
//     if(response.status === 200){
//       const data = await response.json()
//       console.log(data.features[0].center[0])
//     }
    
//   }
//   geocode()
  
//   // let address
//   // const geocode = async(address)=>{
//   //   const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiY3B0cGxhbmV0IiwiYSI6ImNreWFiNXA5OTAzcXkydnA5NWs1NXY1OWwifQ.jMJiAvDc9I0KPpUfg18U8g`)
//   //   if(response.status === 200){
//   //     const data = await response.json()
//   //     console.log(data.features[0].center[0])
//   //   }
    
//   // }
//   // geocode(address)
  
//   let locationSaved = []
  
//   const createdLocation = (input)=>{
//       locationSaved.push(input)
//       saveLocation()
//   }
  
  
//   const saveLocation = ()=>{
//     localStorage.setItem('location', JSON.stringify(locationSaved))
//   }
  
  
//   const loadLocation = ()=>{
//     const locationJSON = locationStorage.getItem('locationSaved')
  
//     try{
//       locationSaved = locationJSON ? JSON.parse(locationJSON) : []
//     }catch (error){
//       locationSaved = []
//     }
//   }
  
  
//   const generateSavedLocation = (location)=>{
//     const locationEl = document.createElement('label')
  
//     const locationText = document.createElement('span')
//     locationText.textContent = location.textContent
//     locationEl.appendChild(locationText)
 
//   }


  
// var locationInput = $('#location')[0];

// var locationName = "";

// // redirect from home page to results page
// function redirect(event) {
//   event.preventDefault();

//   // check that user inputted location
//   if (locationInput.value) {
//     locationName = locationInput.value;
//     //console.log(locationName);
//     location.replace("results.html");
//   } 
// }

// $('#submit').on('click', redirect);





