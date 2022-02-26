import React , {useState , useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux'
import  {filterByRegionHandler}  from '../../../store/slices/countryDataSlice';
import classes from "./Filter.module.css";
function Filter () {
    const [regions , setRegions] = useState([]);
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.countryData.countryData);
    
    useEffect(()=>{
        if(data){
            data.map((country)=>{
               return  setRegions(prev => [...prev , country.region])
            })
            setRegions((prev) => [...new Set(prev)])
        }
    },[data])

    const onRegionChangeHandler = (e) => {
        dispatch(filterByRegionHandler(e.target.value));
    }
    return (
       <select onChange={onRegionChangeHandler} className={classes["filter-select"]}>
           <option value="Default" defaultValue>Filter By Region</option>
           {regions && regions.map((option , index) => (
               <option value={option} key={`option${index}`}>{option}</option>
           ))}
       </select>
    );
}

export default Filter;