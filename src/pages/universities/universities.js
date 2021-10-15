import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getselectedCountry, fetchUniversities, getUniversities } from '../../features/universityInfo/universitySlice';
import './universities.css';

import CustomSelect from '../../components/customSelect/customSelect';
import UniversityCard from '../../components/universityCard/universityCard';


function Universities() {
    const dispatch = useDispatch();
    const country = useSelector(getselectedCountry);
    console.log(country);
    useEffect(() => {
        dispatch(fetchUniversities(country));
    }, []);
    const universities = useSelector(getUniversities);

    let renderUniversities =
        universities.length === 0 ?
            (
                <div className="posts-error"><h3>Error Loading Universities</h3></div>
            )
            : (
                universities.map((university, i) => {
                    return <UniversityCard key={i} data={university}/>
                }))
    return (
        <div className="universities">
            <CustomSelect />
            <div className="university-container">
                {renderUniversities}
            </div>
        </div>
    );
}

export default Universities;
