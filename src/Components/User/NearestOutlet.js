import React, {Component} from "react";
//import { renderComponent } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid } from '@material-ui/core';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class NearestOutlet extends Component{
    constructor(props){
      super(props);
     
      this.state={
        "current_Latitude":"",
        "current_Longitude":"",
        stores:[]
       
      };
      this.handleSubmit=this.handleSubmit.bind(this);
      
    }

    handleSubmit(event){
      //api to search for nearest locations
    }


    render(){

      return(
        <div>
           <MuiThemeProvider >
          <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
           <RaisedButton label="Search"  onClick={(event) => this.handleSubmit(event)}/>
           
          </Grid>
          </MuiThemeProvider >
        </div>
      )

    }
   


    

      
     
    }
    const style = {
      root: {
        height: '100vh',
      },
      margin: 15,
      form: {
        width: '100%', 
        
      }
    
    };