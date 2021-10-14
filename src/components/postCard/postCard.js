import React from 'react';
import './postCard.css';

const PostCard = (props) => {
    const { data } = props;

    return (
        <div className="post-item">
            <div className="post-title">
                <h3>{data.title}</h3>
            </div>
            <div className='post-body'>
                <p>{data.body}</p>
            </div>
            <div className='post-id'>
                <h4>id: {data.id}</h4>
            </div>
        </div>
    )
}

export default PostCard;