import React from 'react';

export default class CreateTask extends React.Component {
  render(){
    return(
      <form>
        <input type="text" placeholder="task to be done"/>
        <button>Create</button>
      </form>
    );
  }
}