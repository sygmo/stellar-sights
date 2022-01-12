const astroApiSecret = '6f14831c8a735ba5d7c78419de6f4bd9a270586412858868719ccdb6c3ddf7f6f70d3f443c9b23b35acecacdadd9f74cefc634489ee774930c3150d63b1116b8ffd176c694ec0c8c9288fb86cd4c9fa84c3a7cf78d1f501292fe3eb8113b32dc19816d4f77e35c4977b00a527d9bc829'
const astroApiId = '1ef02872-a5fd-4790-bebe-b572308c9bb6'
const hash = btoa(`${astroApiId}:${astroApiSecret}`);

var requestUrl = new URL("https://api.astronomyapi.com/api/v2/bodies/positions")

var params = {
    longitude: "-84.39733",
    latitude: "33.775867",
    elevation: "50",
    from_date: "2022-01-12",
    to_date: "2022-01-13",
    time: "20:00:00",
  }
 Object.keys(params).forEach(key => requestUrl.searchParams.append(key, params[key]))

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
        console.log(data.data.table.rows)
        console.log(data.data.table.rows[2].cells[0].position.equatorial)
        console.log(data.data.table.rows[2].cells[0].position.equatorial.rightAscension)
        console.log(data.data.table.rows[2].cells[0].position.equatorial.rightAscension.hours)
        console.log(data.data.table.rows[2].cells[0].position.equatorial.rightAscension.string)
        // Planet Position Variables
        // PlanetX = X Coordinates     PlanetY = Y Coordinates     PlanetRise = 'dawn' of that planet based on input'
        // PlanetM = Planet Magnitude: How bright the object is on a -(bright) to +(dull) scale. Sun is -27, naked eye limit is +6.5.
        var lunaX = data.data.table.rows[1].cells[0].position.horizonal.azimuth.degrees
        var lunaY = data.data.table.rows[1].cells[0].position.horizonal.altitude.degrees
        var lunaRise = data.data.table.rows[1].cells[0].position.equatorial.rightAscension.hours
        var lunaM = data.data.table.rows[1].cells[0].extraInfo.magnitude
        var mercuryX = data.data.table.rows[2].cells[0].position.horizonal.azimuth.degrees
        var mercuryY = data.data.table.rows[2].cells[0].position.horizonal.altitude.degrees
        var mercuryRise = data.data.table.rows[2].cells[0].position.equatorial.rightAscension.hours
        var mercuryM = data.data.table.rows[2].cells[0].extraInfo.magnitude
        var venusX = data.data.table.rows[3].cells[0].position.horizonal.azimuth.degrees
        var venusY = data.data.table.rows[3].cells[0].position.horizonal.altitude.degrees
        var venusRise = data.data.table.rows[3].cells[0].position.equatorial.rightAscension.hours
        var venusM = data.data.table.rows[3].cells[0].extraInfo.magnitude
        var marsX = data.data.table.rows[5].cells[0].position.horizonal.azimuth.degrees
        var marsY = data.data.table.rows[5].cells[0].position.horizonal.altitude.degrees
        var marsRise = data.data.table.rows[5].cells[0].position.equatorial.rightAscension.hours
        var marsM = data.data.table.rows[5].cells[0].extraInfo.magnitude
        var jupiterX = data.data.table.rows[6].cells[0].position.horizonal.azimuth.degrees
        var jupiterY = data.data.table.rows[6].cells[0].position.horizonal.altitude.degrees
        var jupiterRise = data.data.table.rows[6].cells[0].position.equatorial.rightAscension.hours
        var jupiterM = data.data.table.rows[6].cells[0].extraInfo.magnitude
        var saturnX = data.data.table.rows[7].cells[0].position.horizonal.azimuth.degrees
        var saturnY = data.data.table.rows[7].cells[0].position.horizonal.altitude.degrees
        var saturnRise = data.data.table.rows[7].cells[0].position.equatorial.rightAscension.hours
        var saturnM = data.data.table.rows[7].cells[0].extraInfo.magnitude
        var neptuneX = data.data.table.rows[8].cells[0].position.horizonal.azimuth.degrees
        var neptuneY = data.data.table.rows[8].cells[0].position.horizonal.altitude.degrees
        var neptuneRise = data.data.table.rows[8].cells[0].position.equatorial.rightAscension.hours
        var neptuneM = data.data.table.rows[8].cells[0].extraInfo.magnitude
        var uranusX = data.data.table.rows[9].cells[0].position.horizonal.azimuth.degrees
        var uranusY = data.data.table.rows[9].cells[0].position.horizonal.altitude.degrees
        var uranusRise = data.data.table.rows[9].cells[0].position.equatorial.rightAscension.hours
        var uranusM = data.data.table.rows[9].cells[0].extraInfo.magnitude
        var plutoX = data.data.table.rows[10].cells[0].position.horizonal.azimuth.degrees
        var plutoY = data.data.table.rows[10].cells[0].position.horizonal.altitude.degrees
        var plutoRise = data.data.table.rows[10].cells[0].position.equatorial.rightAscension.hours
        var plutoM = data.data.table.rows[10].cells[0].extraInfo.magnitude
        });
        
}






getAstro()







