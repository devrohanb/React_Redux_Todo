import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

// react-redux
import { connect } from "react-redux";
import { removeTodo } from "../action/todoAction";

const Todo = ({ todos, markComplete }) => {
  return (
    <div className="text-left todo">
      <h1 className="text-center" style={{ color: "white" }}>
        Todos :{" "}
      </h1>
      <ListGroup className="mt-5 mb-2">
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            {todo.title}
            <span className="float-right" onClick={() => markComplete(todo.id)}>
              <FaCheckDouble />
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (id) => {
    dispatch(removeTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo); // Connect
