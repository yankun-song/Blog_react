import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
// import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "", todos: [] };
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
        {/* save the ul element for future use */}
        <ul ref={(ul) => (this.ul = ul)}>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }

  componentDidMount() {
    // axios
    //   .get("/api/todolist")
    //   .then((res) => {
    //     this.setState(() => ({ todos: [...res.data] }));
    //     alert("success");
    //   })
    //   .catch(() => {
    //     alert("error");
    //   });
  }

  getTodoItems() {
    return this.state.todos.map((item, idx) => (
      <TodoItem
        key={idx}
        idx={idx}
        item={item}
        handleDelteItem={this.handleDelteItem}
      />
    ));
  }

  handleInputChange(e) {
    this.setState(() => ({ inputVal: e.target.value }));
  }

  // do something after the async setState
  handleBtnClick() {
    this.setState(
      (prev) => ({
        todos: [...prev.todos, prev.inputVal],
        inputVal: "",
      }),
      () => {
        console.log(this.ul.querySelectorAll("li").length);
      }
    );
  }

  handleDelteItem(idx) {
    this.setState((prev) => {
      const todos = [...prev.todos];
      todos.splice(idx, 1);
      return { todos };
    });
  }
}

export default TodoList;
