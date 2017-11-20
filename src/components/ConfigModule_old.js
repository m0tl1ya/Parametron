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
import { Link } from 'react-router-dom'

import ParameterUnit from './ParameterUnit'
import ParameterUnit2 from './ParameterUnit2'

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';


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


class ConfigModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.addEmptyParameter = this.addEmptyParameter.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    // console.log('Dialig closed');
    this.setState({ open: false });
  }

  addEmptyParameter() {
    // console.log("parameter added");
    return (
      <ParameterUnit />
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="ConfigModule">
        <div className="ConfigModuleHeader">
          <IconButton className={classes.button} aria-label="Delete"
                      onClick={this.handleOpen}>
            <ClearIcon />
          </IconButton>
          <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
            <DialogTitle>{"Do you discard settings?"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Do you discard settings?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Link to="/project-table">
              <Button color="primary">
                Discard
              </Button>
              </Link>
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
        <Divider />
        <div className="ConfigModuleContents">
          <ParameterUnit2 />
          <ParameterUnit2 />
          <Button
            onClick={this.addEmptyParameter}
            color="primary"
            className={classes.addButton}>
            Add Parameter
          </Button>
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
        </div>


      </div>
    );
  }
}

ConfigModule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConfigModule);