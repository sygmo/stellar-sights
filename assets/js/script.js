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
            console.log("data",data);
            console.log('body position');
            console.log(data.body);

        });

}

var Mercury


getAstro()
