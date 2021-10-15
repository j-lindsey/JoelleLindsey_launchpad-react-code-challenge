import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, getAllPosts, addPostButton, getaddPostButtonTrigger, searchPosts } from '../../features/homePosts/homePostsSlice';
import './universities.css';

import CustomSelect from '../../components/customSelect/customSelect';


function Universities() {
 
  return (
    <div className="universities">
        <CustomSelect />
    </div>
  );
}

export default Universities;
