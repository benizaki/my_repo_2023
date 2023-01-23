async function fetchWeather() {
    city_ids = ["JHB", "LND", "JLM"];
    for (i = 0; i < city_ids.length; i++) {
        api_key = "b4996500ed17b584fb8ad40f52593900"
        city_name = document.getElementById(city_ids[i] + "1").innerHTML
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`

        response = await fetch(url)
        resJ = await response.json()
        current_temp = `${Math.round(resJ.main.temp - 273.15)}°C`

        document.getElementById(city_ids[i] + "2").innerHTML = current_temp
    }
}

function darkMode() {
    // creates/deletes cookie so that if dark mode is set, refreshing page will not change color (dark mode will still apply and other way around)
    if (getCookie("darkMode")) {
        // if func returns 'true', that means dark mode is active and must be switched off and cookie must correspond 
        document.cookie = "darkMode=" // delete cookie
        document.body.style.backgroundColor = "white";
    } else {
        document.cookie = "darkMode=true" // create cookie  ('true' is just easy choice because that way condition can just be if func returns true)
        document.body.style.backgroundColor = "black";
    }
}


function darkCheck() {
    isDark = getCookie("darkMode")
    if (isDark == "true") {
        document.body.style.backgroundColor = "black"
    } else {
        document.body.style.backgroundColor = "white"
    }
}



// function returns cookie by name because cookies are saved in '{name}={value}' format)
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }






// originally wanted to solve 'fetchWeather' like this but problem is whenever 'fetch(url)' is called it immediately goes 
// to next iteration of loop (due to promise which is returned). As far as i understand, to solve this like i wanted to
// code needs to be written for each city seperately (no loop), or for loop can still be used but with async func and 'await' so code
// move onto next iteration until response/error is returned (as above)


// function fetchWeather() {
//     city_ids = ["JHB", "LND", "JLM"];
//     for (i = 0; i < city_ids.length; i++) {
//         api_key = "b4996500ed17b584fb8ad40f52593900"
//         city_name = document.getElementById(city_ids[i] + "1").innerHTML
//         url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`

//         weather_value_p_elem = document.getElementById(city_ids[i] + "2")
//         fetch(url)
//         .then((response) => {response.json()
//                             .then((resJ) => {weather_value_p_elem.innerHTML = resJ.main.temp})})
            
                           
//     }
// }
