import { createSlice } from "@reduxjs/toolkit";

const countryDataSlice = createSlice({
    name : 'countryData',
    initialState:{
        countryData : undefined,
        filteredData : [],
        currRegion : 'Default',
    },
    reducers : {
        getCountryData : (state , action) => {
            state.countryData = action.payload;
        },
        filterDataHandler : (state , action) => {
            // let unFilteredData = state.countryData;
            
            if(state.countryData){
                if(state.currRegion === 'Default') {
                    state.filteredData = state.countryData.filter((country)=> country.name.includes(action.payload))
                    console.log("Default");
                }else{
                    if(action.payload.trim().length > 0){
                        state.filteredData = state.countryData.filter((country)=> country.name.includes(action.payload) && state.currRegion === country.region);
                    }else{
                        console.log(0);
                        state.filteredData = state.countryData.filter((country)=> country.region.includes(state.currRegion)) 
                    }
                    console.log("Default" , state.currRegion, state.filteredData);
                }
                 
            }else{
                state.filteredData = [];
            }
        },
        filterByRegionHandler : (state , action) => {
            state.currRegion = action.payload;
            let unFilteredData = state.countryData;
            if(unFilteredData){
                state.filteredData = unFilteredData.filter((country)=> country.region.includes(action.payload)) 
            }else{
                state.filteredData = [];
            }
            if(action.payload === "Default"){
                state.filteredData = [];
            }
        }
    }
})

export const { getCountryData , filterDataHandler , filterByRegionHandler } = countryDataSlice.actions;
export default countryDataSlice;