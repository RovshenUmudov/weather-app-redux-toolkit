import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from "./ducks/weatherReducer";

export const store = configureStore({
    reducer: {
        weatherReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;