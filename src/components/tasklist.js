import React from 'react';
import Tasklistheader from './tasklistheader'; // tasklistheader component will show up within tasklist after being imported as Tasklistheader from "./tasklistheader" as well, and then all other components involved will also show up here and then finally, tasklist (along with all other components involved with it) will be exported into app.js, which will, in turn be exported into index.js and ultimately will show up in the div with id="app" in the index.html file, which is the view
// remember that within the export default class App extends React.Component... is JSX, so comments will not work and they will show up on the view if written there
// the class Tasklist can be replaced with whatever name you would want to call the component, so this is actually standard component syntax, whereby the change is just the component name
export default class Tasklist extends React.Component {
  render(){
    return(
      <table>
        <Tasklistheader/>
      </table>
      );
  }
}