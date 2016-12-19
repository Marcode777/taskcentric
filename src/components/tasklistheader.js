import React from 'react';


export default class Tasklistheader extends React.Component {
  render(){
    return(
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
      );
  }
}