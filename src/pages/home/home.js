import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, getAllPosts, addPostButton, getaddPostButtonTrigger } from '../../features/homePosts/homePostsSlice';
import './home.css';

import PostCard from '../../components/postCard/postCard';
import AddPostModal from '../../components/addpostmodal/addpostmodal';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const posts = useSelector(getAllPosts);
  let renderPosts =
    posts.length === 0 ?
      (
        <div className="posts-error"><h3>Error</h3></div>)
      : (
        posts.map((post) => {
          return <PostCard key={post.id} data={post} />
        }))
  const triggerValue = useSelector(getaddPostButtonTrigger);
  return (
    <div className="home">
      <h2>Posts</h2>
      <div className="header-container">
        <div className="search">
        </div>
        <div className="addpost">
          <button onClick={() => dispatch(addPostButton())}>Add Post</button>
          <AddPostModal trigger={triggerValue} />
        </div>
      </div>
      <div className="post-list">
        <div className="post-container">
          {renderPosts}
        </div>
      </div>
    </div>
  );
}

export default Home;
