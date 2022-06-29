import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  shouldComponentUpdate(nextProps) {
    if (nextProps.item === this.props.item) return false;
    return true;
  }

  render() {
    // console.log("child render");
    const { item } = this.props;
    return <li onClick={this.handleClick}>{item}</li>;
  }

  handleClick() {
    const { handleDelteItem, idx } = this.props;
    handleDelteItem(idx);
  }
}

export default TodoItem;
