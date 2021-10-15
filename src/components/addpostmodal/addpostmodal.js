import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostTitle, addPostBody, addPostUserId, addPosts, getnewPost, closeAddModal } from '../../features/homePosts/homePostsSlice';
import './addpostmodal.css';

function AddPostModal(props) {
    const dispatch = useDispatch();
    const handleTitleChange = (e) => {
        dispatch(addPostTitle(e.target.value));
    };
    const handleBodyChange = (e) => {
        dispatch(addPostBody(e.target.value));
    };
    const handleUserIdChange = (e) => {
        dispatch(addPostUserId(e.target.value));
    }
    const newPost = useSelector(getnewPost);
    return (props.trigger) ? (
        <div className="addpostmodal" >
            <div className="addpost-inner">
                <button id="close" onClick={() => dispatch(closeAddModal())}>&#10005;</button>
                <h2>Add a New Post</h2>
                <textarea rows="2" cols="50" id="post-title" placeholder="Title" onChange={handleTitleChange} ></textarea>
                <textarea rows="4" cols="50" id="post-body" placeholder="Body of Post" onChange={handleBodyChange}></textarea>
                <input type="number" id="post-userID" placeholder="User id" onChange={handleUserIdChange} />
                <button className="addPost" onClick={() => dispatch(addPosts(newPost))}>Add Post</button>
            </div>
        </div>
    ) : '';
}

export default AddPostModal;