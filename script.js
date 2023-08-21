let city = document.getElementById("city");
let cityname = document.getElementById("cityname");
let feels = document.getElementById("feels");
let humidity = document.getElementById("humidity");
let windspeed = document.getElementById("windspeed");
let winddir = document.getElementById("winddirection");
let visibility = document.getElementById("visibility");
let text = document.getElementById("text");
let search = document.getElementById("search"); 
let image = document.getElementById("image");
let temperature = document.getElementById("temperature");
let datetime = document.getElementById("datetime");
let cityName = "phagwara";

city.addEventListener("focus", () => {
  city.removeAttribute("placeholder"); 
});
city.addEventListener("blur", () => {
  city.setAttribute("placeholder", "Enter city name"); 
});

    search.addEventListener("click", async () => {
    cityName = city.value.trim(); 

  if (cityName) {
    await fetching(cityName); 
    city.value = ""; // Clear the input field after the search

  }
});

const fetching = async (cityName) => {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c47d2e1b2bmshb23bfee449c7d79p1ff1b8jsnf8e248e16334",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    datetime.innerHTML = result.current.last_updated;
    cityname.innerHTML = result.location.name;
    temperature.innerHTML =
      "Temperature :" + JSON.stringify(result.current.temp_c);
    feels.innerHTML = "Feels Like :" + result.current.feelslike_c + "'c";
    text.innerHTML = result.current.condition.text;
    const iconUrl = result.current.condition.icon;
    image.src = "https:" + iconUrl;
    humidity.innerHTML = "Humidity :" + result.current.humidity;
    windspeed.innerHTML = "Wind Speed :" + result.current.wind_kph;
    winddirection.innerHTML = "Wind Direction :" + result.current.wind_dir;
    visibility.innerHTML = "Visibility :" + result.current.vis_km;
  } catch (error) {
    console.error(error);
  }
};
fetching(cityName);
