import React from 'react';
import _ from 'lodash';
import Tasklistheader from './tasklistheader'; 
import TaskListItem from './tasklistitem';
// tasklistheader component will show up within tasklist after being imported as Tasklistheader from "./tasklistheader" as well, and then all other components involved will also show up here and then finally, tasklist (along with all other components involved with it) will be exported into app.js, which will, in turn be exported into index.js and ultimately will show up in the div with id="app" in the index.html file, which is the view
// remember that within the export default class App extends React.Component... is JSX, so comments will not work and they will show up on the view if written there
// the class Tasklist can be replaced with whatever name you would want to call the component, so this is actually standard component syntax, whereby the change is just the component name
// if we console.log(this.props), it would show the array tasks, which we passed into it via the state of tasks, if we console.log(this.props.tasks), it would show the actual objects
// now to put them into our component here, we place them into a set of <tr>, via {this.renderItems()} via declaring it up top as well, and then utilizing the help of lodash, that is installed as npm package and imported as import _ from 'lodash';
// we use lodash and return _.map, which creates a new array out of what we have and is going to allow us to customize it how we want, without mutating it
// return _.map(this.props.tasks, (task, index) => <TaskListItem key={index} {...task} />); is the same thing as doing function(task, index){ return <TaskListItem?>}
// {...} is es6 spreading, it's the same thing as passing in task={task.task} isCompleted = {task.isCompleted}, so using this set of syntax is much cleaner
export default class Tasklist extends React.Component {

  renderItems(){
    return _.map(this.props.tasks, (task, index) => <TaskListItem key={index
    } {...task} />);
  }


  render(){
    console.log(this.props.tasks); 
    return(
      <table>
        <Tasklistheader/>
          <tbody>
            {this.renderItems()}
          </tbody>
      </table>
      );
  }
}