import React from 'react';


export default class Tasklistheader extends React.Component {
  render(){
    return(
        <thead>
          <tr>
            <th className="tasklistheader">Task</th>
            <th className="tasklistheader">Action</th>
          </tr>
        </thead>
      );
  }
}