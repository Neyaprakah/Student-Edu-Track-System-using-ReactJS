import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';


function StudentEduTrackSystem(){
  return(
    <div>
      <Content />
    </div>
  )
}
ReactDOM.render(<StudentEduTrackSystem/>,document.getElementById("root"));