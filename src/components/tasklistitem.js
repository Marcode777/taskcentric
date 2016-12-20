import React from 'react';

// we also set state here, however, a best practice would not be to set state inside this component, but to have a top-level component that does it
// onCLick, and the like, are how we do event handlers in React
// with the renderActionsSection, if the state is editing, we return the Save button and also the Cancel button
// with the renderActionsSection, if the state is not editing, and here, we actually don't need an else statement, because it just returns , we return the Edit button and also the Delete Button
// for dynamic styling, we create a const component called taskStyle, which will be a conditional, so if, it isCompleted, it will be one color, otherwise it will be the other 
// now to have the items change in color when they are clicked, to show whether they are completed or not, we make an onClick handler and insert it into the return task section, along with the taskStyle component that's inserted within it as well, but we want to actually modify the actual array, so it will happen in the app.js file, where we will define toggleTask() method
// for the save button, we connect it to an onClick event, named onSaveClick, but before that, we want item to turn into an input box so, we go to our renderTasksSection and 
// then we make a const oldTask = this.props.task, because we need to put that in to match the array
// then we make const newTask = this.refs.editInput.value; which is the ref that we defined above
// then this.props.saveTask(oldTask, newTask);
// then we setState and set isEditing to false to remove the input form after we save
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
    };

    if(this.state.isEditing){
      return(
          <td className="tasklistitem">
            <form onSubmit={this.onSaveClick.bind(this)}>
              <input type="text" defaultValue={task} ref="editInput"/>
            </form>
          </td>
        );
    }

    return(
      <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)} >{task}</td>
      )
  }

  renderActionsSection(){
    if(this.state.isEditing){
      return(
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
        );
    }
      return(
        <td>
         <button onClick={this.onEditClick.bind(this)}>Edit</button>
         <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
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

  onSaveClick(event){
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({isEditing : false});

  }

}