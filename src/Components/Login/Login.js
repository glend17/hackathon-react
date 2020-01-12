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

import App from "../ShopOwner/App";
import Apps from "../User/Apps";

export default class Login extends Component{
  constructor(props){
    super(props);
   
    this.state={
      email:"",
      password:"",
      type:"none"
     
    }
    this.handleChange=this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
 
  
 handleClick(e){
  e.preventDefault();
  //api call to authorize
  this.setState({type:"us"});
  
  
 }

handleEmail(e){
  console.log(e.target.value);
}
handleChange = input => e => {
  this.setState({ [input]: e.target.value });
 
};

  render(){
    const {signclick}=this.props;
    const {logclick}=this.props;
    switch(this.state.type){
      case "us":{
        return(

          <div>
            Hello
              <Apps owner={this.state}/>  
          </div>
        );
      }

        case "ShopOwner":{
          return(
            <div>
              <App owner={this.state}/>
            </div>
          );
          
        }
        
        

        default:{
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
                    hintText="Enter your Username"
                    floatingLabelText="Email"
                    onChange = {this.handleChange('email')}
                    />
                  <br/>
                    <TextField
                      type="password"
                      hintText="Enter your Password"
                      floatingLabelText="Password"
                      onChange = {this.handleChange('password')}
                      />
                    <br/>
                    <RaisedButton label="Submit" primary={true} style={style}  onClick={this.handleClick}/>
                    </div>
                </div>
                </MuiThemeProvider>
             </div>
           );
          }
         // break;


      }
    }
   // console.log(this.state.email);
   
    //console.log(this.state.email);
    
  
}
const style = {
  margin: 15,
  title: {
    flexGrow: 1,
  }
 };
