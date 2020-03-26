import React, { Component, Fragment } from 'react';
import { createPortal } from "react-dom";

const BoundaryHOC = ProtectedComponent => class BoundaryHOC extends Component {
  state = {
    hasError: false
  };
  componentDidCatch = () => {
    this.setState({
      hasError: true
    });
  };
  render() {
    const { hasError } = this.state;
    if(hasError){
      return <ErrorFallback />;
    } else {
      return <ProtectedComponent />;
    }
  }
}

class ErrorMaker extends Component {
  state = {
    friends: ["jisu", "flynn", "daal", "ke"]
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  }
  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}

const PErrorMaker = BoundaryHOC(ErrorMaker);

class Portals extends Component {
  render() {
    return createPortal(
      <Message/>,
      document.getElementById("touchme")
    );
  }
}

const PPortals = BoundaryHOC(Portals);

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

const PReturnTypes = BoundaryHOC(ReturnTypes);

const ErrorFallback = () => " Sorry something went wrong";

class App extends Component {
  state ={
    hasError: false
  }
  componentDidCatch = (error, info) => {
    // console.log(`catched ${error} the info i have is ${JSON.stringify(info)}`);
    this.setState({ 
      hasError: true});
  }
  render() {
    const { hasError } = this.state;
    return ( <Fragment>
      <PReturnTypes />
      <PPortals />
      <PErrorMaker />
    </Fragment>)
  }
}


export default BoundaryHOC(App);
