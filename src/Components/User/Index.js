import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Sidebar from './Sidebar';

import NearestOutlet from './NearestOutlet';
import PaymentHistory from './PaymentHistory';

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:"",
      lastname:"",
      email:"",
      current_tab:"NearestOutlet"

    }
  }

  componentDidMount(){
      //api call to get user data 
  }

 
 

 handleChange(text,e){
   this.setState({[text]:e.target.value});
 }

  render() {
   const {current_tab}=this.state;
   switch(current_tab){
    
    case 'NearestOutlet':
        return (
          <div>
            <Sidebar />
            <NearestOutlet />
            </div>
        );
    case 'PaymentHistory':
        return (
          <div>
            <Sidebar/>
            <PaymentHistory/>
            </div>
        );
    
   }
    return (
        <Sidebar onEdit={this.onEdit}/>

    );
  }
}

