 
import React from 'react';

const title = (props) => {
  return (
    <div>
    	<h1 className="App-title">{props.data}</h1>
      <h1>{ props.myFunc }</h1> 
    </div>
  );
}

export default title;