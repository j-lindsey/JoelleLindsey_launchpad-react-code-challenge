import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPostBody, editPostTitle, editPostUserId, editPosts, closeEditModal, geteditPost } from '../../features/homePosts/homePostsSlice';
import './editpostmodal.css';

function EditPostModal(props) {
    const dispatch = useDispatch();
    const handleTitleChange = (e) => {
        dispatch(editPostTitle(e.target.value));
    };
    const handleBodyChange = (e) => {
        dispatch(editPostBody(e.target.value));
    };
    const handleUserIdChange = (e) => {
        dispatch(editPostUserId(e.target.value));
    }

    const newPost = useSelector(geteditPost);
    const post = {
        id: props.id,
        title: newPost.title,
        body: newPost.body,
        userId: newPost.userId
    };
    return (props.trigger) ? (
        <div className="editpostmodal" >
            <div className="editpost-inner">
                <button className="close" onClick={() => dispatch(closeEditModal())}>&#10005;</button>
                <h2>Edit Post</h2>
                <label >Post Title</label>
                <textarea rows="2" cols="50" id="post-title" placeholder="Title" value={post.title} onChange={handleTitleChange} ></textarea>
                <label >Post Body</label>
                <textarea rows="4" cols="50" id="post-body" placeholder="Body of Post" value={post.body} onChange={handleBodyChange}></textarea>
                <label >User Id</label>
                <input type="number" id="post-userID" placeholder="User id" value={post.userId} onChange={handleUserIdChange} />
                <button id="editPost" onClick={() => dispatch(editPosts(post, props.id))}>Submit Edited Post</button>
            </div>
        </div >
    ) : '';
}

export default EditPostModal;