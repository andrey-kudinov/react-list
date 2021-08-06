import React, { Component } from "react";
import { Button } from "reactstrap";

import "./post-status-filter.css";

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: "all", label: "Все", btnClass: "btn-info" },
      { name: "like", label: "Понравилось", btnClass: "btn-outline-secondary" },
    ];
  }
  render() {
    const buttons = this.buttons.map(({ name, label, btnClass }) => {
      const {filter, onFilterSelect} = this.props
      const active = filter === name; // без деструктуризация this.props.filter
      const clazz = active ? "btn-info" : "btn-outline-secondary";

      return (
        <button
          key={name}
          type="btn"
          className={`btn ${clazz}`}
          onClick={() => onFilterSelect(name)}
        >
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {/* <Button color='info'>Все</Button> */}
        {buttons}
      </div>
    );
  }
}
