import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";

//todo array of objects
const taskList = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: taskList,
      todoItem: "",
      id: "",
      completed: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value }, this.updateLocalStorage);
  };

  handleCheckbox = index => {
    console.log(index);
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (index !== todo.id) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
      })
    });
  };

  handleClear = () => {
    this.setState(
      {
        todoList: this.state.todoList.filter(todo => {
          if (todo.completed === false) {
            return todo;
          } else {
            return null;
          }
          console.log(todo.completed);
        })
      },
      this.updateLocalStorage
    );
  };

  handleClear = () => {
    this.setState(
      {
        todoList: this.state.todoList.filter(todo => {
          if (todo.completed === false) {
            return todo;
          } else {
            return null;
          }
          console.log(todo.completed);
        })
      },
      this.updateLocalStorage
    );
  };

  newTodo = e => {
    e.preventDefault();
    if (this.state.todoItem === "") {
      alert("Please enter a Todo");
    } else {
      this.setState(
        {
          todoList: [
            ...this.state.todoList,
            {
              task: this.state.todoItem,
              id: Date.now(),
              completed: false
            }
          ],
          todoItem: ""
        },
        this.updateLocalStorage
      );
    }
  };

  render() {
    return (
      <div className="todoApp">
        <h2>This is my Todo App!</h2>
        <TodoForm
          handleChanges={this.handleChanges}
          handleClear={this.handleClear}
          newTodo={this.newTodo}
          todoItem={this.state.todoItem}
        />
        <TodoList
          todoList={this.state.todoList}
          handleCheckbox={this.handleCheckbox}
        />
      </div>
    );
  }
}

export default App;
