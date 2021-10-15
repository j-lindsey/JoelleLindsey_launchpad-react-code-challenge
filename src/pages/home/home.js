import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, getAllPosts, addPostButton, getaddPostButtonTrigger, searchPosts } from '../../features/homePosts/homePostsSlice';
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
        <div className="posts-error"><h3>No Posts</h3></div>)
      : (
        posts.map((post) => {
          return <PostCard key={post.id} data={post} />
        }))
  const triggerValue = useSelector(getaddPostButtonTrigger);

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === '') {
      dispatch(fetchPosts());
    } else {
      dispatch(searchPosts(e.target.value));
    }
  }
  return (
    <div className="home">
      <h2>Posts</h2>
      <div className="header-container">
        <div className="search">
          <input type="number" placeholder="Search By Id" onChange={handleSearchChange} />
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
