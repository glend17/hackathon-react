import React, {Component} from "react";
//import { renderComponent } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';

export default class NearestOutlet extends Component{
    constructor(props){
      super(props);
     
      this.state={
        "current_Latitude":"",
        "current_Longitude":"",
        stores:[]
       
      };

      
    }

    handleSubmit(event){
      //api to search for nearest locations
    }


    render(){

      return(
        <div>
           <RaisedButton label="Search" primary={true} onClick={(event) => this.handleSubmit(event)}/>
          
        </div>
      )

    }
   


    

      
     
    }