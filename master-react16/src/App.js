import React, { Component, Fragment } from 'react';

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
    </Fragment>)
  }
}

export default App;
