import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchZipCode, getZipCodeData, clearZipCode } from '../../features/postalinfo/postalInfoSlice';
import './postalLookup.css';


function PostalLookup() {
    const dispatch = useDispatch();

    function isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false
        }
        return true
    }
    const zipCode = useSelector(getZipCodeData);
    let renderPlaces =
        isEmpty(zipCode) ?
            (
                <div className="posts-error"><h3>No Info Found</h3></div>)
            : (
                zipCode.places.map((place) => {
                    return (<div><p>{place["place name"]}</p><p>{place.state}, {place["state abbreviation"]}</p>
                        <p>longitude: {place.longitude} latitude: {place.latitude}</p></div>)
                }))
    const handleSearchChange = (e) => {
        if (e.target.value.length < 5) {
            dispatch(clearZipCode())
        } else {
            dispatch(fetchZipCode(e.target.value));
        }
    }

    return (
        <div className="postal-lookup">
            <div className="search">
                <input type="number" placeholder="Input Zip Code" onChange={handleSearchChange} />
            </div>
            <div className="postal-info">
                <h2>{zipCode["post code"]}</h2>
                <h2>{zipCode.country}, {zipCode["country abbreviation"]}</h2>
                {renderPlaces}
            </div>

        </div>
    );
}

export default PostalLookup;
