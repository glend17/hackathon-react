import React,{Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

export default class PaymentHistory extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            transactionList:[]
        }
       // this.apirend=this.apirend.bind(this);
    }
    componentDidMount(){
        //api call 
     // const da=getdata();
      // this.setState({data:da});
    }
    /*apirend(dat){
        return (
            <div>
            <div>
            <ListItem alignItems="flex-start">
            
        <div>
        <ListItemText
          primary="{data.Email}"
          secondary={
              dat.Amount}/>
            </div>
            
            
            </ListItem>
            </div>
            </div>
            
            
        );
    }*/


render(){
   //const {classes}=this.props;
   //const {data}=this.state;
    /*return(
        <div>
            <List className={classes.root}>
                {data.map(this.apirend)}
            </List>
        </div>
    );*/
    return(<div>
        hello
    </div>); 
}

}