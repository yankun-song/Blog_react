import React from "react";
import { Input, Button, Divider, List } from "antd";

const TodoListUI = (props) => {
  return (
    <>
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <Input
          value={props.inputVal}
          placeholder="todo name"
          style={{ width: "300px" }}
          onChange={props.handleInputChange}
        />
        <Button onClick={props.handleBtnClick}>Add</Button>
        <Divider orientation="left"></Divider>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          size="large"
          bordered
          dataSource={props.todos}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.handleItemClick(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default TodoListUI;
