//weather details section
let details_span = document.querySelector("#details"),
  Temps = document.getElementById("Temps"),
  img_div = document.querySelector(".img-div");

//Hide Some Elements by defaults!
details_span.style.display = "none";
Temps.style.display = "none";
img_div.style.display = "none";

// Search function for getting result
function Search() {
  const Img = document.getElementById("Img");
  const City = document.getElementById("City");
  const Humidity = document.getElementById("Humidity");
  const Wind = document.getElementById("Wind");
  const Cloudy = document.getElementById("Cloudy");

  const Input = document.getElementById("Input");
  const value = Input.value;
  //accesing apis

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=fcf17b36d7f89a75f2da8d1145096db5`;

  if (value == "" || value.length == 2) {
    alert("Enter a country name appropriately.");
  } else {
    fetch(url)
      .then((Response) => Response.json())
      .then((json) => {
        console.log(json);

        //display the hidden elements
        details_span.style.display = "flex";
        Temps.style.display = "block";
        img_div.style.display = "flex";
        
        //Rendering Image
        if (
          json.weather[0].main == "Clouds" ||
          json.weather[0].main == "Cloudy"
        ) {
          Img.src = "./B52F7D7F-C35A-4D32-A0BE-727095969538.png";
        } else if (json.weather[0].main == "Mist") {
          Img.src = "./174486DC-E063-44A5-A041-884198A5E4E5.png";
        } else if (
          json.weather[0].main == "Sun" ||
          json.weather[0].main == "Sunny"
        ) {
          Img.src = "./05CCA35D-E39D-4AAF-AA19-43FB817FFA49.png ";
        } else if (
          json.weather[0].main == "Rain" ||
          json.weather[0].main == "Rainy"
        ) {
          Img.src = "./A212022A-811E-4DD8-B952-5A0FF6868403.png";
        } else if (
          json.weather[0].main == "Haze" ||
          json.weather[0].main == "Snows"
        ) {
          Img.src = "./3E26836C-6A1F-4A7A-9623-A6EDB52866D6.png";
        } else {
          Img.src = "./16535477-9D9F-4502-8FA8-6D5EF25DDE89.png";
        }

        City.innerText = `Weather In ${value}`;
        Humidity.innerHTML = `💨Humidity: <b>${json.main.humidity}%</b>`;
        Wind.innerHTML = `💫Wind speed: <b>${json.wind.speed} km/h</b>`;
        Temps.innerText = `🌡️Temp: ${json.main.temp} °C`;
        Cloudy.innerHTML = `🌗Atmosphere: <b>${json.weather[0].main}</b>`;
      
        //Emptying the Input
        Input.value = ""
      })

      .catch((err) => {
        alert("Looks like an issue occured while fetching!");
      });
  }
}
