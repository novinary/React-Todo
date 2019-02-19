import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

//todo array of objects
const taskList = [
  {
    task: 'prep meal for the week',
    id: 1,
    completed: false
  },
  {
		task: 'clean kitchen',
		id: 2,
		completed: false
	},
	{
		task: 'go to the gym',
		id: 3,
		completed: false
	}

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: taskList,
      todoItem: '',
      id: ''
    };
  }

  handleChanges = e => {
    this.setState({ [e.taret.name]: e.target.value });
  };

  newTodo = e => {
    e.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        {todoItem: this.state.todoItem}
      ],
      id: Date.now(),
      completed: false,
      todoItem: ''
    })
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}




export default App;
