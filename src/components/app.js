import React from 'react';
import CreateTask from './createtask';
import Tasklist from './tasklist';


const tasks = [    // todos will be changed to tasks
  {
    task:" do taskcentric",
    isCompleted: false
  },
  {
    task:"get skills sharper",
    isCompleted: false
  }
]; 
// remember that within the export default class App extends React.Component... is JSX, so comments will not work and they will show up on the view if written there
// within the divs are where the tasklist.js, tasklistheader.js files will show up, after being imported as Tasklist from "./tasklist" and Tasklistheader from "./tasklistheader" as well, etc...
// within the divs are where tasklist.js (and all other components associated with it, such as tasklistheader) will show up after being imported as Tasklist from "./tasklist" up top
// now we want to be able to take the todos (which will be changed to tasks) array into the tasklist, however, we also want to be able to access that data from our tasklist, and the way to do that is to put it into our tasklist component, but we want to be able to re-render whenever the props change, so that we want to be make our todos (task) array the state of our app
// we'll have a constructor(props) which is the first thing this component will run and then a super(props), which sort of just connects it to the parent that it's inheriting from, this is generally standard syntax
// React uses state, which you can use set.state with to update the state and re-render components, in this case, we'll use this.state
// now to pass our state of tasks into tasklist, we'll pass the constant tasks into it, we do this by doing this.state={tasks]; and then tasks={this.state.tasks}
// now our Tasklist component has our tasklist that we're passing in
// to update the array in our entire app, our createTask method will be here
// instead of this.state.tasks({task, isCompleted: false}) should be this.state.tasks.push({task, isCompleted: false}), because in the first example, it is calling it as a function, but in the second example, it is pushing to the array, which is how it should be
 export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      tasks
    };
  }


  render(){
    return(
      <div>
        <h1>taskcentric</h1>
        <CreateTask createTask={this.createTask.bind(this)} />
        <Tasklist tasks={this.state.tasks}/> 
      </div>
      );
  }
    createTask(task){
      this.state.tasks.push({
        task,
        isCompleted: false
      });
      this.setState({tasks: this.state.tasks});
    }
}
