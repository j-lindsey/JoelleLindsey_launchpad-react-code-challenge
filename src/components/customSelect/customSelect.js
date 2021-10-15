import React, { useEffect } from 'react';
import { getCountries, fetchCountries, selectCountry } from '../../features/universityInfo/universitySlice';
import { useDispatch, useSelector } from 'react-redux';
import './customSelect.css';

const CustomSelect = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);
    const countries = useSelector(getCountries);

    let renderCountries =
        countries.length === 0 ?
            (
                <option className="countries-error">Error loading Countries</option>
            )
            : (
                Object.keys(countries).map(key =>
                    <option key={key} value={countries[key].country}>{countries[key].country}</option>)
            )
    const populateCountryData = function (e) {
        let country = e.target.value;
        dispatch(selectCountry(country));
    }
    return (
        <div className="country-select">
            <select onChange={populateCountryData}>
                <option key="CA" value="Canada">Canada</option>
                {renderCountries}
            </select>
        </div>
    )
}

export default CustomSelect;