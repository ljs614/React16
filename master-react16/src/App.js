import React, { Component, Fragment } from 'react';
import { createPortal } from "react-dom";

class Portals extends Component {
  render() {
    return createPortal(
      <Message/>,
      document.getElementById("touchme")
    );
  }
}

const Message = () => "Just touch it!";

class ReturnTypes extends Component {
  render() {
    // return (
    //   <Fragment>
    //     <header></header>
    //     <div></div>
    //     <footer></footer>
    //   </Fragment>
    // )
    return "hello"; //return String
  }
}

class App extends Component {
  render() {
    return ( <Fragment>
      <ReturnTypes/>
      <Portals/>
    </Fragment>)
  }
}

export default App;
