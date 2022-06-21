import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { item } = this.props;
    return <li onClick={this.handleClick}>{item}</li>;
  }

  handleClick() {
    const { handleDelteItem, idx } = this.props;
    handleDelteItem(idx);
  }
}

export default TodoItem;
