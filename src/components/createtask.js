import React from 'react';
// when the Create button is clicked (or the form is submitted), we want to grab whatever text is inside the input box and add it to our tasks arrays, located in our app.js file, we do this by using refs, which are basically identifiers for the DOM element, to actually grab what is exactly typed into the input box, we use .value
// when onSubmit is triggered or pressed, it automatically refreshes the page, to prevent that, we have an event prevent default
// now to update the array in our entire app, we can't just do something in this file, we have to do it in the app.js file
// so now we've tested that we have our createTask function by doing console.log(this.props.createTask); now we can actually pass this.refs.createInput.value into our this.props.createTask
// the reason why we're using handleCreate near the bottom instead of up top is that we're using "this" inside of this method, but at the same time we want to bind "this" to the this method in app.js, so we end up creating a separate method near the bottom here, where we can use "this" here in the createInput as well as use the "this" here in the createTask. Basically we want to maintain the "this" context for the createTask component while we also want to maintain the "this" context for the createInput component
export default class CreateTask extends React.Component {
  render(){
    return(
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="task to be done" ref="createInput" />
        <button>Create</button>
      </form>
    );
  }
    handleCreate(event){
      event.preventDefault();
      console.log(this.refs.createInput.value);
      console.log(this.props.createTask);
      this.props.createTask(this.refs.createInput.value);
    }
}