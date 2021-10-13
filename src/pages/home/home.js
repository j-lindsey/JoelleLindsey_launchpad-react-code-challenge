import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPosts } from '../../features/homePosts/homePostsSlice';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../features/homePosts/homePostsSlice';

import PostCard from '../../components/postCard/postCard';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPosts = () => {
      return fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20')
        .then(res => {
          return res.json();
        })
        .then(posts => {
          console.log(posts);
          dispatch(addPosts(posts));
        })
        .catch(err => {
          // some error handling
        });
    };
    fetchPosts();
  }, []);
  const posts = useSelector(getAllPosts);
  let renderPosts =
    posts.length === 0 ?
      (
        <div className="posts-error"><h3>Error</h3></div>)
      : (
        posts.map((post, id) => {
          return <PostCard key={id} data={post} />
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
