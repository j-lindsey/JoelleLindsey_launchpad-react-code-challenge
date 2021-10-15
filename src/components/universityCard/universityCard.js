import React from 'react';
import './universityCard.css';

const UniversityCard = (props) => {
    const { data } = props;
    return (
        <div className="university-item">
            <div className="univeristy-title">
                <h3>{data.name}</h3>
            </div>
            <div className="univeristy-province">
                <h4>{data["state-province"]}</h4>
            </div>
            <div className='university-webpages'>
                <h4>Websites:</h4>
                <ul>
                    {
                        data.web_pages.map((website) => {
                            return <li><a href={website} target="_blank" rel="noreferrer noopener">{website}</a></li>
                        }
                        )}
                </ul>
            </div>
            <div className='university-domains'>
                <h4>Domains:</h4>
                <ul>
                    {
                        data.domains.map((domain) => {
                            return <li>{domain}</li>
                        }
                        )}
                </ul>
            </div>
        </div>
    )
}

export default UniversityCard;