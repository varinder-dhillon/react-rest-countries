import React , {useState , useEffect} from 'react';
import CountryCard from '../ui/country-card/CountryCard';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../Components/ui/loader/Loader';
import { getCountryData } from '../../store/slices/countryDataSlice';
function CountryList () {
    const [isFiltered , setIsFiltered] = useState(false)
    const countryData = useSelector(state => state.countryData.countryData)
    const filteredCountryData = useSelector(state => state.countryData.filteredData)

    // api end point => https://restcountries.com/v2/all
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch('https://restcountries.com/v2/all').then((res)=>{
            return res.json();
        }).then(result => {
            if(result){
                // let flatData = result.flat();
                // console.log(typeof result);
                dispatch(getCountryData(result))
            }
        }).catch(err => { 
            throw new Error(err)
        });
    }, [dispatch])

    useEffect(()=>{
        filteredCountryData.length > 0 ? setIsFiltered(true) : setIsFiltered(false);
        console.log(filteredCountryData);
    },[filteredCountryData])
    return (
        <div className="container">
            <div className="country-row">
                {!countryData && <Loader />}

                {/* Simple All Data */}

                {countryData && !isFiltered && countryData.map((country , index) => (
                    <CountryCard key={`country${index}`} countryData={country} />
                ))}
                
                {/* Search Filtered Data */}

                {isFiltered && filteredCountryData.map((country , index) => (
                    <CountryCard key={`country${index}`} countryData={country} />
                ))}

            </div>
        </div>
    )
}

export default CountryList;