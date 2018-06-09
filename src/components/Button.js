import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const className =
      this.props.type === "list-button"
        ? "button-wrapper__list"
        : "button-wrapper__menu";
    return (
      <div className={className}>
        <button
          className="list-button"
          onClick={this.props.open || this.props.move || this.props.add}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}
