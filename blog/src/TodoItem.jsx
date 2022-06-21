import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return <div onClick={this.handleClick}>{this.props.item}</div>;
  }

  handleClick() {
    this.props.handleDelteItem(this.props.idx);
  }
}

export default TodoItem;
