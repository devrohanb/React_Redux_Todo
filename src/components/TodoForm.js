import React, { useState } from "react";
import {
  Container,
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { v4 } from "uuid";
//react-redux
import { connect } from "react-redux";
import { addTodo } from "../action/todoAction";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("Please add a todo first !!");
    }
    const todo = {
      title,
      id: v4(),
    };

    // Adding a todo
    addTodo(todo);
    // setting input field empty
    setTitle("");
  };

  return (
    <Container>
      <div className="row">
        <div className="col-md-5 text-center">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <InputGroup>
                <Input
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="your next Todo.."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                  <Button color="primary" onClick={handleSubmit}>
                    ADD
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
        </div>
      </div>
    </Container>
  );
};

// This method is used to bring any data from the central state into your component.
const mapStateToProps = (state) => ({});

// This method is used to dispatch required action
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
