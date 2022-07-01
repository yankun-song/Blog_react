import React, { Component } from "react";
import store from "./store/index";
import * as actions from "./store/actionCreators";
import TodoListUI from "./TodoListUI";
//import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    // 只要store发生改变，括号里的函数就会被执行
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI
        inputVal={this.state.inputVal}
        todos={this.state.todos}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemClick={(idx) => this.handleItemClick(idx)}
      />
    );
  }
  componentDidMount() {
    const action = actions.getInitList();
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleInputChange(e) {
    const action = actions.changeInputAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = actions.btnClickAction();
    store.dispatch(action);
  }

  handleItemClick(idx) {
    const action = actions.deleteItemAction(idx);
    store.dispatch(action);
  }
}

export default TodoList;
