import React from 'react';
// when the Create button is clicked (or the form is submitted), we want to grab whatever text is inside the input box and add it to our tasks arrays, located in our app.js file, we do this by using refs, which are basically identifiers for the DOM element, to actually grab what is exactly typed into the input box, we use .value
// when onSubmit is triggered or pressed, it automatically refreshes the page, to prevent that, we have an event prevent default
// now to update the array in our entire app, we can't just do something in this file, we have to do it in the app.js file
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
    }
}