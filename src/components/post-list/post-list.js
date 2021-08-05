import React from "react";

import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";

import "./post-list.css";

const PostList = ({ posts }) => {
  const elements = posts.map((el) => {
    const { id, ...elProps } = el;
    return (
      <li key={id} className="list-group-item">
        {/* <PostListItem label={el.label} important={el.important}/> */}
        <PostListItem {...elProps} />
      </li>
    );
  });

  return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;
