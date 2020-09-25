import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Test extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(<Test />, document.getElementById("root"));
