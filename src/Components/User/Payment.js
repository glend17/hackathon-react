import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toolbar from '@material-ui/core/Toolbar';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



export default class Payment extends Component{
  constructor(props){
    super(props);
   
    this.state={
      "email":"",
      "vpaAddress":"",
     
    }
   
  }
 
  
 handleClick(e){
  event.preventDefault();
  console.log('hello');
  //generate payment
  
 }

handleEmail(e){
  console.log(e.target.value);
}
handleChange = input => e => {
  this.setState({ [input]: e.target.value });
 
};

  render(){
    
    //console.log(this.state.email);
    return (
     <div>
        <MuiThemeProvider>
          <div>
          <AppBar position="static">
            <Toolbar>
              
              <Typography variant="h6" >
                OmniCash
              </Typography>
              <Button color="inherit" onClick={logclick}>Login</Button>
              <Button color="inherit" onClick={signclick}>Sign Up</Button>
            </Toolbar>
          </AppBar>
          <div>
           <TextField
             hintText="Enter your VPA Address"
             floatingLabelText="VPA Address"
             onChange = {this.handleChange('VPA Address')}
             />
           <br/>
             <TextField
               hintText="Email"
               floatingLabelText="Email"
               onChange = {this.handleChange('email')}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style}  onClick={this.handleClick}/>
             </div>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
  title: {
    flexGrow: 1,
  }
 };
