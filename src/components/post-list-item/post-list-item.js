import React, { Component } from "react";

import "./post-list-item.css";

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImportant() {
    this.setState(({ important }) => ({
      important: !important,
    }));
  }

  onLike() {
    this.setState(({like}) => ({
      like: !like,
    }));
  }

  render() {
    const { label } = this.props;
    const { important, like } = this.state;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += ' like'
    }
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={this.onLike}>{label}</span>
        <div className="d0-flex justify-content align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={this.onImportant}
          >
            <span className="material-icons">grade</span>
          </button>
          <button type="button" className="btn-trash btn-sm">
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
