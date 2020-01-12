import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Sidebar from './Sidebar';
import EditProfile from './EditProfile';
import Home from './Home';
import PaymentHistory from './PaymentHistory';
import SelectOutlet from './SelectOutlet';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:"",
      lastname:"",
      email:"",
      current_tab:"Home"

    }
    this.clickhandle=this.clickhandle.bind(this);
    this.onEdit=this.onEdit.bind(this);
  }

  componentDidMount(){
      //api call
  }

 onEdit(first,last,em){
     this.setState({ firstname:first,
     lastname:last,
     email:em,
    current_tab:"Home"});

 }
clickhandle(id){
    this.setState({current_tab:id})
} 

 handleChange(text,e){
   this.setState({[text]:e.target.value});
 }

  render() {
   const {current_tab}=this.state;
   const {owner}=this.props;
   switch(current_tab){
    case 'Home':
        return (
            <div>
            <Sidebar clickhandle={this.clickhandle}/>
            <Home values={this.state}/>
            </div>
        )
    case 'Edit Profile':
        return (
            <div>
            <Sidebar clickhandle={this.clickhandle}/>
            <EditProfile  onEdit={this.onEdit}  values={this.state}/>
            </div>
        );
    case 'Payment History':
        return (
            <div>
            <Sidebar clickhandle={this.clickhandle}/>
            <PaymentHistory/>
            </div>
        );
    case 'Select Outlet':
            return(
                <div>
                <Sidebar clickhandle={this.clickhandle}/>
                <SelectOutlet/>
                </div>
            );
   }
    
  }
}

