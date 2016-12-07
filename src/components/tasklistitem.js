import React from 'react';

// we also set state here, however, a best practice would not be to set state inside this component, but to have a top-level component that does it
// onCLick, and the like, are how we do event handlers in React
// with the renderActionsSection, if the state is editing, we return the Save button and also the Cancel button
// with the renderActionsSection, if the state is not editing, and here, we actually don't need an else statement, because it just returns , we return the Edit button and also the Delete Button
// 
export default class TaskListItem extends React.Component {

  constructor(props){
    super(props);

    this.state={
      isEditing: false
    };
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
        <td>{this.props.task}</td>
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