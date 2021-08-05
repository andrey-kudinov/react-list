import React from "react";

import './post-list.css'

import PostListItem from "../post-list-item";

const PostList = ({posts}) => {
  const elements = posts.map(el => {
    const {id, ...elProps} = el
    return (
      <li key={id} className='list-group-item'>
        {/* <PostListItem label={el.label} important={el.important}/> */}
        <PostListItem {...elProps} />
      </li>
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};

export default PostList
