import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_tab: "Login"
    };
    this.logclick=this.logclick.bind(this);
    this.signclick=this.signclick.bind(this);
  }
  logclick(){
    this.setState({current_tab:"Login"});
  }
  signclick(){
    this.setState({current_tab:"SignUP"});
  }
  render() {
    console.log(this.state.current_tab);
    const { current_tab } = this.state;
    switch (current_tab) {
      case "Login": {
        return (
          <div>
            

            <Login signclick={this.signclick} logclick={this.logclick} />
          </div>
        );
      }
      case "SignUP": {
        return (
          <div>
            

            <Register signclick={this.signclick} logclick={this.logclick}/>
          </div>
        );
      }
    }
  }
}
