import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {weatherAPI} from "../../api/weather.api";
import {IData} from "../../types";

interface InitialState {
    data: IData | null
    isError: string
    isLoading: boolean
}

const initialState: InitialState = {
    data: null,
    isLoading: false,
    isError: ""
}

const weatherReducer = createSlice({
    name: "weather",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state: InitialState, {payload}: PayloadAction<IData | null>) => {
            state.isError = ""
            state.data = payload
            state.isLoading = false
        })
        builder.addCase(fetchWeather.rejected, (state: InitialState, {error}) => {
            state.data = null
            state.isError = error.message ? error.message : ""
            state.isLoading = false
        })
        builder.addCase(fetchWeather.pending, (state: InitialState) => {
            state.isLoading = true
            state.isError = ""
            state.data = null
        })
    }
})

//fetch cities
export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city: string) => {
        return await weatherAPI.fetchWeather(city)
    }
)

export default weatherReducer.reducer;