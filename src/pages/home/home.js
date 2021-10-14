import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../features/homePosts/homePostsSlice';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../features/homePosts/homePostsSlice';
import './home.css';

import PostCard from '../../components/postCard/postCard';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const posts = useSelector(getAllPosts);
  console.log(posts);
  let renderPosts =
    posts.length === 0 ?
      (
        <div className="posts-error"><h3>Error</h3></div>)
      : (
        posts.map((post) => {
          return <PostCard key={post.id} data={post} />
        }))

  return (
    <div className="home">
      <div className="post-list">
        <h2>Posts</h2>
        <div className="post-container">
          {renderPosts}
        </div>
      </div>
    </div>
  );
}

export default Home;
