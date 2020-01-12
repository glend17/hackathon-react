import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


export class EditProfile extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:"",
      lastname:"",
      phone:"",
      password:""

    }
    this.handleChange=this.handleChange.bind(this);
    this.onClickHandle=this.onClickHandle.bind(this);
  }
  
 onClickHandle(){
   //api to edit dat in backend
   const {onEdit}=this.props;
   const{firstname,lastname,phone}=this.state;
   const user={
     firstname,
     lastname,
     phone

   }
   axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        });
      })
   
   onEdit(firstname,lastname,email);

   
 }

 handleChange(e,text){
   this.setState({[text]:e.target.value});
 }

  render() {
   const values=this.props.values;
   const {classes}=this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
       < Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
       >

         <Grid item xs={3}>
           <AppBar title="Edit User Details" />
            <TextField
              placeholder="First Name"
              label="First Name"
              onChange={(e)=>this.handleChange(e,'firstName')}
              defaultValue={values.firstName}
              margin="normal"
							fullWidth="false"
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={(e)=>this.handleChange(e,'lastName')}
              defaultValue={values.lastName}
              margin="normal"
							fullWidth="false"
            />
            <br />
            <TextField
              placeholder="Enter Your Phone Number"
              label="Email"
              onChange={(e)=>this.handleChange(e,'phone')}
              defaultValue={values.email}
              margin="normal"
							fullWidth="false"
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.onClickHandle}
            >Edit</Button>
   
  </Grid>   

</Grid> 
          
            
          
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default EditProfile;