import React from 'react';
import classes from './CountryCard.module.css';
function CountryCard ({countryData}) {
    return (
        <div className={classes['country-card-main']}>
            <div className={classes['card-flag']}>
                <img src={countryData.flag} alt={countryData.name} />
            </div>
            <div className={classes['country-card-content']}>
                <h3>{countryData.name}</h3>
                <ul>
                    <li>Population: <span>{countryData.population}</span></li>
                    <li>Region: <span>{countryData.region}</span></li>
                    <li>Capital: <span>{countryData.capital}</span></li>
                </ul>
            </div>
        </div>
    )
}

export default CountryCard;