import React from 'react';
import {Button} from 'reactstrap';
// when the Create button is clicked (or the form is submitted), we want to grab whatever text is inside the input box and add it to our tasks arrays, located in our app.js file, we do this by using refs, which are basically identifiers for the DOM element, to actually grab what is exactly typed into the input box, we use .value
// when onSubmit is triggered or pressed, it automatically refreshes the page, to prevent that, we have an event prevent default
// now to update the array in our entire app, we can't just do something in this file, we have to do it in the app.js file
// so now we've tested that we have our createTask function by doing console.log(this.props.createTask); now we can actually pass this.refs.createInput.value into our this.props.createTask
// the reason why we're using handleCreate near the bottom instead of up top is that we're using "this" inside of this method, but at the same time we want to bind "this" to the this method in app.js, so we end up creating a separate method near the bottom here, where we can use "this" here in the createInput as well as use the "this" here in the createTask. Basically we want to maintain the "this" context for the createTask component while we also want to maintain the "this" context for the createInput component
// having this.refs.createInput.value = ''; actually empties the input after it is used, because before this, after we inpiut something into the form, it did not clear after it was submitted
// for validation we go into the handleCreate method and make a const createInput, just because we will be using it multiple times and then a const task = createInput.value, and then a const validateInput = this.validateInput(task); 
// we want to be able to pass in the tasks from app.js into our createtask.js file here, and inside the app.js, inside the createTask component, we also want to pass in the tasks so we can search through it
// so the input will say "enter a task to be done here", if that same task that is already found in the list, it will say, "task is already on the list" otherwise, it isn't on the list and that's fine, and returning null will mean there is no error
// to streamline, we just take this.props.createTask(this.refs.createInput.value); and streamline it with this.props.createTask(task);
// to create the error message, we make a renderError() method and insert it into the form, it will be based on state, so we also make a constructor 
// so basically state will start off as null, if there is a validateInput, basically if this method returned a message, then this would be true, then we're going to setState and set our error to be validateInput, if that's not true, then we'll just continue along the code, and if there's no error, then we'll just reset the state to be null
// now in our renderError() method, basically if there are no errors, we'll do an early return so that nothing happens, but if there is an error, then we'll return a styled this.state.error, which is set to be the message from the validateInput() method
// also we need to place a return at validateInput in the handleCreate section because if there's an error, we don't want it to even reach the save point

 export default class CreateTask extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      error: null
    }
  }

  renderError(){
    if(!this.state.error){return null; }
    return<div style={{ color: 'red'}}>{this.state.error}</div>
  };

  render(){
    return(
      <form className="create" onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder=" create task" ref="createInput" />
        <Button color="primary">Create</Button>
        {this.renderError()}
      </form>
    );
  }
    handleCreate(event){
      event.preventDefault();
      console.log(this.refs.createInput.value);
      console.log(this.props.createTask);

      const createInput = this.refs.createInput;
      const task = createInput.value;
      const validateInput = this.validateInput(task);

      if(validateInput){
        this.setState({error: validateInput});
        return;
      }

      this.setState({error: null});
      this.props.createTask(task);
      this.refs.createInput.value = '';
    }

    validateInput(task){
      if (! task){
        return "Enter a task to be done here";
      } else if(_.find(this.props.tasks, tasks=> tasks.task ===task)){
        return "this task is already on the list";
      } else {
        return null;
      }
    }
}