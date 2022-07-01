import React from "react";
import { connect } from "react-redux";

import { deleteItemAction } from "../store/actionCreators";

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  handleItemClick: (idx) => {
    dispatch(deleteItemAction(idx));
  },
});

const ShowTodo = (props) => {
  const { todos, handleItemClick } = props;
  const todoItems = todos.map((todo, index) => (
    <li
      key={index}
      onClick={() => {
        handleItemClick(index);
      }}
    >
      {todo}
    </li>
  ));
  return (
    <div>
      <ul>{todoItems}</ul>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowTodo);
