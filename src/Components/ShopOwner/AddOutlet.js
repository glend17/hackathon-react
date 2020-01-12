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
import { Grid } from '@material-ui/core';
import axios from 'axios';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storeName: "",
      outletType: "",
      address:"",
      gmap: "",
      picture:""
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
    const { storeName, outletType, address } = this.state;
    //api to send store
    const user={
      storeName,
      outletType,
      address,

    }
    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {

        this.props.AddedOutlet();
      })

    
    
    event.preventDefault();
  }

  render() {
    
    return (
      
      <div>
        <MuiThemeProvider>
          <div className={style.root}>
          <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
          
           <div className="{styles.form}">
           <TextField
               variant="outlined"
               margin="normal"
               required
               
        
             hintText="Enter Store Name"
             floatingLabelText="Store Name"
             onChange = {(event,newValue) => this.setState({storeName:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter Outlet Type"
             floatingLabelText="Outlet Type"
             onChange = {(event,newValue) => this.setState({outletType:newValue})}
             />
            <br/>
           <TextField
             type = "Address"
             hintText="Enter Outlet Address"
             floatingLabelText="Outlet Address"
             onChange = {(event,newValue) => this.setState({address:newValue})}
             />
           <br/>
           
             
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleSubmit(event)}/>
          </div>
          </Grid>
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