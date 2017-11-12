import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ClearIcon from 'material-ui-icons/Clear';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { blueGrey } from 'material-ui/colors';

import Tabs, { Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

function TabContainer(props) {
  return <div style={{ padding: 8 * 3 }}>{props.children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    background: blueGrey[50],// #afbbc9
    width: 400,
  },
  descField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    background: blueGrey[50],// #afbbc9
    width: 500,
  },
  addButton: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});


class ConfigProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      value: 'one',
    };
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleRequestClose = () => {
    this.setState({isDialogOpen: false});
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="ConfigProject">
        <div className="ConfigProjectHeader">
          <IconButton className={classes.button} aria-label="Delete"
                      onClick={this.handleOpen}>
            <ClearIcon />
          </IconButton>
          <Dialog open={this.state.isDialogOpen} onRequestClose={this.handleRequestClose}>
            <DialogTitle>{"Do you discard settings?"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Do you discard settings?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleRequestClose} color="primary">
                Discard
              </Button>
              <Button onClick={this.handleRequestClose} color="primary" autoFocus>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
          <TextField
            id="module-name"
            className={classes.textField}
            label="Module Name"
            fullWidth
            margin="normal"
          />
          <Button raised color="primary" className={classes.button}>
          Save
          </Button>
        </div>
        <div className="ConfigProjectContents">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab value="one" label="Select Module" />
            <Tab value="two" label="Settings" />
            <Tab value="three" label="Information" />
          </Tabs>
          {value === 'one' && <TabContainer>Item One</TabContainer>}
          {value === 'two' && <TabContainer>Item Two</TabContainer>}
          {value === 'three' && <TabContainer>
            <form>
              <TextField
              id="full-width"
              label="Description"
              className={classes.descField}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            </form>
          </TabContainer>}


        </div>


      </div>
    );
  }
}

ConfigProject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConfigProject);
