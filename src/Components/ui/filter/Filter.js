import React from 'react';
import classes from "./Filter.module.css";
function Filter () {
    return (
       <select className={classes["filter-select"]}>
           <option value="" selected>Filter By Region</option>
           <option value="City">City</option>
           <option value="City">City</option>
           <option value="City">City</option>
           <option value="City">City</option>
       </select>
    );
}

export default Filter;