import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AddOutlet from './AddOutlet';

export default class EditProfile extends Component {
  constructor(props){
    super(props);
   
  }
  
  componentDidMount(){
      //api call to call all outlets
    //  const outlets=
  }

  render() {
     // const {classes}=this.props;
     // const {}
      return(
        <div>
    <div >
      
    </div>
    <div>
        <AddOutlet/>
    </div>
    </div>
      );
}
}

//export default EditProfile;