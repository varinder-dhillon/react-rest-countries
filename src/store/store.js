import { configureStore } from "@reduxjs/toolkit";
import countryDataSlice from "./slices/countryDataSlice";


 const store = configureStore({
    reducer:{
        countryData : countryDataSlice.reducer,
    },
});

export default store;