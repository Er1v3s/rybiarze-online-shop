import { APIResponse } from "./date-types";

const API_KEY = "0fd315853dadfc3d29223b017ceb5bc8";
let API_URL: string;

const getWeather = async (getPosition: Promise<[Number, Number]>) => {
  let APIresponse: APIResponse;
  let userPosition!: [Number, Number];

  try {
    userPosition = await getPosition;
  } catch (err) {
    userPosition = [53.14292, 22.98815];
  } finally {
    API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${userPosition[0]}&lon=${userPosition[1]}&appid=${API_KEY}&units=metric`;
  }

  try {
    const response: Response = await fetch(API_URL);
    if (response.ok) {
      const data = await response.json();
      if (data.length != 0) {
        APIresponse = {
          err: false,
          city: data.name,
          country: data.sys.country,
          temperature: Math.floor(data.main.temp),
          weather: data.weather[0].id,
          humidity: data.main.humidity,
          windSpeed: Math.floor(data.wind.speed),
          sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
      } else {
        throw new Error("There's no available data for your searching");
      }
    } else {
      throw new Error(`Error ${response.status}`);
    }
  } catch (err: any) {
    APIresponse = {
      err: true,
      errmessage: err.message,
    };
  }

  return APIresponse;
};

export { getWeather };
