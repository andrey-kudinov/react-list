import React from "react";

import './post-list-item.css'

const PostListItem = () => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label">Hello World!</span>
      <div className="d0-flex justify-content align-items-center">
        <button type="button" className="btn-star btn-sm">
          <span className="material-icons">grade</span>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <span className="material-icons">delete</span>
        </button>
        <span className="material-icons fa-heart">favorite</span>
      </div>
    </li>
  );
};

export default PostListItem;
