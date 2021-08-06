import React, { Component } from "react";

import "./post-list-item.css";

export default class PostListItem extends Component {

  deleteAnimation(event) {
    event.target.closest('.list-group-item').classList.add('deleted')
  }

  render() {
    const { label, onDelete, onToggleImportant, onToggleLiked, important, like } = this.props;
    let classNames = "app-list-item d-flex justify-content-between";
    if (!important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={onToggleLiked}>
          {label}
        </span>
        <div className="d0-flex justify-content align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={onToggleImportant}
          >
            <span className="material-icons">grade</span>
          </button>
          <button
            type="button"
            className="btn-trash btn-sm"
            onClick={(event) => {
              onDelete();
              this.deleteAnimation(event);
            }}
          >
            <span className="material-icons">delete</span>
          </button>
          <span className="material-icons fa-heart">favorite</span>
        </div>
      </div>
    );
  }
}

// const PostListItem = ({label, important = false }) => {
//   let classNames = "app-list-item d-flex justify-content-between";
//     if (important) {
//       classNames += " important";
//     }
//   return (
//     <div className={classNames}>
//         <span className="app-list-item-label">{label}</span>
//         <div className="d0-flex justify-content align-items-center">
//           <button type="button" className="btn-star btn-sm">
//             <span className="material-icons">grade</span>
//           </button>
//           <button type="button" className="btn-trash btn-sm">
//             <span className="material-icons">delete</span>
//           </button>
//           <span className="material-icons fa-heart">favorite</span>
//         </div>
//       </div>
//   );
// };

// export default PostListItem;
