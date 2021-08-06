import React from "react";

import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";

import "./post-list.css";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((el) => {
    const { id, ...elProps } = el;
    return (
      <li key={id} className="list-group-item">
        {/* <PostListItem label={el.label} important={el.important}/> */}
        <PostListItem
          {...elProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    );
  });

  return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;
