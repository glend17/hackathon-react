import React, {Component} from 'react';
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
import { Grid } from '@material-ui/core';

import AddOutlet from './AddOutlet';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            stores:[],
            renderotulet:true
        };

        this.AddedOutlet=this.AddedOutlet.bind(this);
        this.Addoutlet=this.Addoutlet.bind(this);
        

    }

    componentDidMount(){
        //const {email}=this.props;
        this.setState({email:this.props.email});
        //api call to get list of stores
       

    }

    

    Addoutlet(){
        this.setState({renderotulet:false});
    }

    AddedOutlet(){
        this.setState({renderotulet:true});
    }

    outletUi(store){
        return (store.name);
    }

    render(){
        const {stores}=this.state;

        switch(this.state.renderotulet){
            case true:{
                return(
                    <div>
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
>


                   <div>
                         <Grid container spacing={2}>
                            {stores.map(this.outletUi)}
                         </Grid>
                    </div>
                      <div> 
                    <Button
                    color="primary"
                    variant="contained"
                    onClick={this.Addoutlet}
                  >Add Outlet</Button>
                  </div>
                  </Grid>
                  </div>
                  
                  
                );
                 }
            case false:{
                return(
                    <AddOutlet AddedOutlet={this.AddedOutlet}/>
                );
            }
        }
        

      
      

                  


        
    }



}