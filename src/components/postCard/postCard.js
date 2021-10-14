import React from 'react';
import { editPostButton, geteditPostButtonTrigger, editPostValue } from '../../features/homePosts/homePostsSlice';
import { useDispatch, useSelector } from 'react-redux';
import EditPostModal from '../../components/editpostmodal/editpostmodal';
import './postCard.css';

const PostCard = (props) => {
    const dispatch = useDispatch();
    const { data } = props;
    const triggerValue = useSelector(geteditPostButtonTrigger);
    const editPostSelect=function(){
        dispatch(editPostButton());
        fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(editPostValue(data));
            });
    }
    return (
        <div className="post-item">
            <div className="delete">
                <button>&#10005;</button>
            </div>
            <div className="post-title">
                <h3>{data.title}</h3>
            </div>
            <div className='post-body'>
                <p>{data.body}</p>
            </div>
            <div className='post-id'>
                <h4>id: {data.id}</h4>
                <div className="post-edit">
                    <button onClick={editPostSelect}>&#10000;</button>
                    <EditPostModal id={data.id} trigger={triggerValue} />
                </div>
            </div>
        </div>
    )
}

export default PostCard;