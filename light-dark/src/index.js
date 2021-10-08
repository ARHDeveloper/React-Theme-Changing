import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

function Room() {

  const [isBright, setIsBright] = React.useState(false);
  // var a = "Something";
  const handlechange = () => {
    setIsBright(!isBright);

    const body = document.querySelector('body');
    body.setAttribute("class", isBright? "Black" : "White");
    
  };

  return (
    <div className="room">
      The Room is {isBright ? "bright" : "dark"}
      <br />
      <button onClick={handlechange}>
        Change Theme
      </button>
    </div>
  );
}

ReactDom.render(<Room />, document.getElementById('root'));
