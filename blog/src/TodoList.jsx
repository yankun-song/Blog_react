import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "", todos: ["todo1", "todo2"] };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelteItem = this.handleDelteItem.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="inputArea">New Task:</label>
          <input
            id="inputArea"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          ></input>
          <button onClick={this.handleBtnClick}>Submit</button>
        </div>
        <ul>
          {this.state.todos.map((item, idx) => (
            <TodoItem
              key={idx}
              idx={idx}
              item={item}
              handleDelteItem={this.handleDelteItem}
            />
          ))}
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  handleBtnClick() {
    const newList = [...this.state.todos, this.state.inputVal];
    this.setState({ todos: newList, inputVal: "" });
  }

  handleDelteItem(idx) {
    const newList = [...this.state.todos];
    newList.splice(idx, 1);
    this.setState({ ...this.state, todos: newList });
  }
}

export default TodoList;
