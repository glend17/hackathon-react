import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import StyledRadio from '@material-ui/core/StyledRadio';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import axios from 'axios';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      phone:"",
      password_confirmation: "",
      userType:""
     // registrationErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state;
    const {logclick}=this.props;
    if(password===password_confirmation)
    {
      const {signclick}=this.props;
      //api call to backend with state
      logclick();
      
    }
    else
    {
      console.log('error');
    }
    console.log(email);
    event.preventDefault();
  }

  render() {
    const {signclick,logclick}=this.props;
    return (
      
      <div>
        <MuiThemeProvider>
          <div className={style.root}>
          <AppBar position="static">
            <Toolbar>
              
              <Typography variant="h6" >
                OmniCash
              </Typography>
              <Button color="inherit" onClick={logclick}>Login</Button>
              <Button color="inherit" onClick={signclick}>Sign Up</Button>
            </Toolbar>
          </AppBar>
           <div className="{styles.form}">
           <TextField
               variant="outlined"
               margin="normal"
               required
               
        
             hintText="Enter your Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Phone"
             floatingLabelText="Phone"
             onChange = {(event,newValue) => this.setState({phone:newValue})}
             />
            <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <TextField
           type="password"
             hintText="confirm your password"
             floatingLabelText="Confirm Password"
             onChange = {(event,newValue) => this.setState({password_confirmation:newValue})}
             />
             <br/>

             <TextField
               variant="outlined"
               margin="normal"
               required
               
        
             hintText="Shop Owner/User"
             floatingLabelText="Shop Owner/User?"
             onChange = {(event,newValue) => this.setState({userType:newValue})}
             />
           <br/> 
            
             
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleSubmit(event)}/>
          </div>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  root: {
    height: '100vh',
  },
  margin: 15,
  form: {
    width: '100%', // Fix IE 11 issue.
    
  }

};
//export default Registration;