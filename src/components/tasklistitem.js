import React from 'react';

// we also set state here, however, a best practice would not be to set state inside this component, but to have a top-level component that does it
// onCLick, and the like, are how we do event handlers in React
// with the renderActionsSection, if the state is editing, we return the Save button and also the Cancel button
// with the renderActionsSection, if the state is not editing, and here, we actually don't need an else statement, because it just returns , we return the Edit button and also the Delete Button
// for dynamic styling, we create a const component called taskStyle, which will be a conditional, so if, it isCompleted, it will be one color, otherwise it will be the other  
export default class TaskListItem extends React.Component {

  constructor(props){
    super(props);

    this.state={
      isEditing: false
    };
  }

  renderTasksSection(){
    const {task, isCompleted} = this.props;

    const taskStyle = {
      color: isCompleted ? '#809fff' : '#ff9999',
      cursor: 'pointer'
    }

    return(
      <td style={taskStyle} >{task}</td>
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