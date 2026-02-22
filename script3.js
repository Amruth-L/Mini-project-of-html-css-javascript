const weatherform = document.querySelector(".weatherform");
const cityname = document.querySelector(".cityname");
const card = document.querySelector(".card");
const apiKey = "d08a565bbf371101a4bf35e1bb6e4c23";

weatherform.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityname.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch (error) {
            console.error(error);
            displayError(error.message);
        }
    }
    else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {

    const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data) {

    const {
        name: city,
        main: { temp, humidity },
        weather: [{ description }]
    } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
}

function displayError(message) {

    const errorDisplay = document.createElement("p");

    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.appendChild(errorDisplay);
}
