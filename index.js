import React from "react";
import ReactDOM from "react-dom";
// import Button from '@material-ui/core/Button';
import { Button } from './app/Button';

class App extends React.Component {
  render() {
    return (
      <div>
        <Button>demo</Button>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
