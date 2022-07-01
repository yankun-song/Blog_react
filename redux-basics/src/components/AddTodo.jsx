import React from "react";
import { connect } from "react-redux";

import { addTodoAction, updateInputAction } from "../store/actionCreators";

const mapStateToProps = (state) => ({
  inputVal: state.inputVal,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (e) => {
    dispatch(updateInputAction(e.target.value));
  },
  handleBtnClick: () => {
    dispatch(addTodoAction());
  },
});

const AddTodo = (props) => {
  const { inputVal, handleInputChange, handleBtnClick } = props;
  return (
    <div>
      <input value={inputVal} onChange={(e) => handleInputChange(e)}></input>
      <button onClick={handleBtnClick}>submit</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
