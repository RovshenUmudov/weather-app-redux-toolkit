import axios from "axios";
import {IWeatherServerResponse} from "../types";

const API_KEY = "4a67ce997089e3f3fe32b0cc3018e734";

const instance = () => {
    return axios.create({
        baseURL: "https://api.openweathermap.org/data/2.5/",
    })
}

export const weatherAPI = {
    //fetch weather
    fetchWeather: (query: string) => instance().get<IWeatherServerResponse>("weather", {
        params: {
            q: query,
            appid: API_KEY,
            units: "metric"
        }
    }).then(res => {
        return {
            name: res.data.name,
            main: res.data.weather[0].main,
            description: res.data.weather[0].description,
            temp: res.data.main.temp,
        }
    }),
}