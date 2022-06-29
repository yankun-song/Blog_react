import React, { Component } from "react";
import { Input, Button, Divider, List } from "antd";
import store from "./store/index";
import * as actions from "./store/actionCreators";

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
      <>
        <div style={{ marginTop: "10px", marginLeft: "10px" }}>
          <Input
            value={this.state.inputVal}
            placeholder="todo name"
            style={{ width: "300px" }}
            onChange={this.handleInputChange}
          />
          <Button onClick={this.handleBtnClick}>Add</Button>
          <Divider orientation="left"></Divider>
          <List
            style={{ marginTop: "10px", width: "300px" }}
            size="large"
            bordered
            dataSource={this.state.todos}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => {
                  console.log("clicked");
                  this.handleItemClick(index);
                }}
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      </>
    );
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
