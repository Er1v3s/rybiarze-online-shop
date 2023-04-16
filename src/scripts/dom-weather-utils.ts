import { APIResponse } from "./date-types";
import { getPosition } from "./geolocationAPI";
import { getWeather } from "./weatherAPI";

document.addEventListener("DOMContentLoaded", () => {
  const mainSesctionWeatherElemet: HTMLElement =
    document.querySelector(".main__weather")!;

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
        timeElement.innerText = String(response.time);
        countryElement.innerText = response.country as string;
        cityElement.innerText = response.city as string;
        weatherTemperatureElement.innerText = String(response.temperature);
        weatherTypeElement.innerText = checkWeatherTypeByCode(
          Number(response.weather)
        );
        weatherHumidityElement.innerText = String(response.humidity);
        weatherWindSpeedElement.innerText = String(response.windSpeed);
        weatherSunriseElement.innerText = response.sunrise as string;
        weatherSunsetElement.innerText = response.sunset as string;
      }
    } catch (err) {
      throw new Error("Something went wrong");
    }
  };

  const checkWeatherTypeByCode = (code: number) => {
    let weather: string = "";
    if (code >= 200 && code < 300) {
      weather = "Burza";
    } else if (code >= 300 && code < 600) {
      weather = "Deszcz";
    } else if (code >= 600 && code < 700) {
      weather = "Śnieg";
    } else if ((code >= 700 && code < 800) || (code > 800 && code < 900)) {
      weather = "Chmury";
    } else if (code === 800) {
      weather = "Słońce";
    }
    return weather;
  };

  attachDataToElements(getWeather(getPosition()));

  //   console.log(mainSesctionWeatherElemet);
});
