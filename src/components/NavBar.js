import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';


import InboxIcon from 'material-ui-icons/Inbox';
import FolderIcon from 'material-ui-icons/Folder';
import WebAssetIcon from 'material-ui-icons/WebAsset';
import CreateNewFolderIcon from 'material-ui-icons/CreateNewFolder';
import AddBoxIcon from 'material-ui-icons/AddBox';

import { Link } from 'react-router-dom'


const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleDrawer = this.handleDrawer.bind(this);
  }

  handleDrawer() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="contrast"
              aria-label="Menu"
              onClick={this.handleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Parametron
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          docked={false}
          open={this.state.open}
          onClick={this.handleDrawer}
        >
          <div className={classes.drawerInner}>
            <List>
              <Link to="/project-list" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                    <ListItemText primary="Projects" />
                </ListItem>
              </Link>
              <Link to="/module-list" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <WebAssetIcon />
                  </ListItemIcon>
                  <ListItemText primary="Modules" />
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <Link to="/create-module" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <AddBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Module" />
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}


NavBar.propTypes = {
  classes: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(NavBar);
