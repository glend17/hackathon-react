import React,{Component} from './react';
import { isConstructorDeclaration } from 'typescript';

export default class AddCash extends Component{
    constructor(props){
        super(props);
        const {cash}=this.props;
        this.setState({
            AvailableCash:cash
        });
        this.addCash=this.addCash.bind(this);
        this.removeCash=this.removeCash.bind(this);

        
    }

    addCash(e){
        const x=this.state.AvailableCash;
        x=x+e.target.value;
        this.setState({AvailableCash:x});

    }
    removeCash(e){
        const x=this.state.AvailableCash;
        x=x-e.target.value;
        this.setState({AvailableCash:x});

    }
    onClickHandle(){
        //api call to handle cash

    }

    render(){

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
               
                <TextField
                  placeholder="Enter Cash"
                  label="Cash to Add"
                  onChange={(e)=>this.addCash(e)}
                  defaultValue={values.firstName}
                  margin="normal"
                                fullWidth="false"
                />
                <br />
                <TextField
                  placeholder="Remove Cash"
                  label="Cash to Remove"
                  onChange={(e)=>this.removeCash(e)}
                  defaultValue={values.lastName}
                  margin="normal"
                                fullWidth="false"
                />
                
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