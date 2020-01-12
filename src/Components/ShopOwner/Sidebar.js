import React, { Component, Fragment } from 'react'
//import { Link, withRouter } from 'react-router-dom'
import {
  AppBar, Toolbar, IconButton, Typography, Hidden,
  Drawer, CssBaseline, MenuList, MenuItem
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'
import { compose } from 'recompose'
//import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});
//const classes = styles();
class Sidebar extends Component {
  constructor(props){
    super(props);
  this.state = {
    mobileOpen: false,
    currentTab:"Home"
  }

}

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }
  handleonClick(id){
   // this.setState({currentTab:{event}})
   const {clickhandle}=this.props;
   console.log(id);
   clickhandle(id);
  
  }
  render() {
   // console.log(this.props);
    const { classes } = this.props;
   // console.log(classes);
    const { mobileOpen } = this.state

    

    

    return (
      <div>
      <CssBaseline/>

      <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
          Your Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
        
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {['Home', 'Edit Profile', 'Payment History'].map((text, index) => (
            <ListItem button key={text} onClick={() => this.handleonClick(text)}>
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </Drawer>
        
        
         
       
        <main className={classes.content}>
          <div className={classes.toolbar} />
          
        </main>
      </div>
      </div>);
    
  }
}

export default withStyles(styles)(Sidebar);