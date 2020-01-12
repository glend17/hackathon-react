import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Sidebar from './Sidebar';


import PaymentHistory from './PaymentHistory';
import NearestOutlet from './NearestOutlet';

export default class Apps extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:"",
      lastname:"",
      email:"",
      current_tab:"Nearest Outlet"

    }
    this.clickhandle=this.clickhandle.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  componentDidMount(){
      //api call to get user data 
  }

 
clickhandle(id){
    this.setState({current_tab:id})
} 

 handleChange(text,e){
   this.setState({[text]:e.target.value});
 }

  render() {
   const {current_tab}=this.state;
   switch(current_tab){
    
    case "Nearest Outlet":
        return (
          <div>
            
              <Sidebar clickhandle={this.clickhandle} />  
               <NearestOutlet />  
            </div>
        );
    case "Payment History":
        return (
          <div>
            <Sidebar clickhandle={this.clickhandle}/>
            {/* <PaymentHistory/> */}
            </div>
        );
    
   }
    
  }
}

