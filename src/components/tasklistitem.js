import React from 'react';

// we also set state here, however, a best practice would not be to set state inside this component, but to have a top-level component that does it
// onCLick, and the like, are how we do event handlers in React
// with the renderActionsSection, if the state is editing, we return the Save button and also the Cancel button
// with the renderActionsSection, if the state is not editing, and here, we actually don't need an else statement, because it just returns , we return the Edit button and also the Delete Button
// for dynamic styling, we create a const component called taskStyle, which will be a conditional, so if, it isCompleted, it will be one color, otherwise it will be the other 
// now to have the items change in color when they are clicked, to show whether they are completed or not, we make an onClick handler and insert it into the return task section, along with the taskStyle component that's inserted within it as well, but we want to actually modify the actual array, so it will happen in the app.js file, where we will define toggleTask() method
export default class TaskListItem extends React.Component {

  constructor(props){
    super(props);

    this.state={
      isEditing: false
    };
  }

  renderTasksSection(){
    const {task, isCompleted} = this.props;
    console.log(this.props);

    const taskStyle = {
      color: isCompleted ? '#809fff' : '#ff9999',
      cursor: 'pointer'
    }

    return(
      <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)} >{task}</td>
      )
  }

  renderActionsSection(){
    if(this.state.isEditing){
      return(
        <td>
          <button>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
        );
    }
      return(
        <td>
         <button onClick={this.onEditClick.bind(this)}>Edit</button>
         <button>Delete</button>
        </td>
      );
  }

  render(){
    return(
      <tr>
        {this.renderTasksSection()}
        {this.renderActionsSection()}
      </tr>
        );
  }

  onEditClick(){
    this.setState({isEditing : true});
  }

  onCancelClick(){
    this.setState({isEditing: false});
  }

}