import { Calendar, Clock } from "./clock";
import { APIResponse } from "./date-types";
import { getPosition } from "./geolocationAPI";
import { getWeather } from "./weatherAPI";

document.addEventListener("DOMContentLoaded", () => {
  const dateElement: HTMLSpanElement = document.querySelector(".main__date")!;

  const timeElement: HTMLSpanElement = document.querySelector(".main__time")!;

  const countryElement: HTMLSpanElement =
    document.querySelector(".main__country")!;

  const cityElement: HTMLSpanElement = document.querySelector(".main__city")!;

  const weatherTemperatureElement: HTMLSpanElement = document.querySelector(
    ".main__weather-temperature"
  )!;

  const weatherTypeElement: HTMLSpanElement = document.querySelector(
    ".main__weather-type"
  )!;

  const weatherHumidityElement: HTMLSpanElement = document.querySelector(
    ".main__weather-humidity"
  )!;

  const weatherWindSpeedElement: HTMLSpanElement = document.querySelector(
    ".main__weather-windSpeed"
  )!;

  const weatherSunriseElement: HTMLSpanElement = document.querySelector(
    ".main__weather-sunrise"
  )!;

  const weatherSunsetElement: HTMLSpanElement = document.querySelector(
    ".main__weather-sunset"
  )!;

  const attachDataToElements = async (getWeather: Promise<APIResponse>) => {
    try {
      const response: APIResponse = await getWeather;
      if (response.err == false) {
        String(Clock(timeElement));
        String(Calendar(dateElement));
        countryElement.innerText = response.country as string;
        cityElement.innerText = response.city as string;

        weatherTypeElement.innerHTML = checkWeatherTypeByCode(
          Number(response.weather)
        );
        weatherTemperatureElement.innerHTML = `
        <i class="fa-solid fa-temperature-three-quarters"></i>&nbsp;${String(
          response.temperature
        )} &#8451;`;
        weatherHumidityElement.innerHTML = `
        <i class="fa-solid fa-droplet"></i>
        <span>&nbsp;${String(response.humidity)}&#37;</span>
        `;
        weatherWindSpeedElement.innerHTML = `<i class="fa-solid fa-wind"></i>
        <span>&nbsp;${String(response.windSpeed)}<small>m/s</small></span>
        `;
        weatherSunriseElement.innerHTML = `<i class="fa-solid fa-sun"></i> ${
          response.sunrise as string
        }`;
        weatherSunsetElement.innerHTML = `<i class="fa-solid fa-moon"></i> ${
          response.sunset as string
        }`;
      }
    } catch (err) {
      throw new Error("Something went wrong");
    }
  };

  const checkWeatherTypeByCode = (code: number) => {
    let weather: string = "";
    if (code >= 200 && code < 300) {
      weather = `<i class="fa-solid fa-cloud-bolt"></i>`;
    } else if (code >= 300 && code < 600) {
      weather = `<i class="fa-solid fa-cloud-rain"></i>`;
    } else if (code >= 600 && code < 700) {
      weather = `<i class="fa-solid fa-snowflake"></i>`;
    } else if ((code >= 700 && code < 800) || (code > 800 && code < 900)) {
      weather = `<i class="fa-solid fa-cloud"></i>`;
    } else if (code === 800) {
      weather = `<i class="fa-solid fa-sun"></i>`;
    }
    return weather;
  };

  attachDataToElements(getWeather(getPosition()));

  //   console.log(mainSesctionWeatherElemet);
});
