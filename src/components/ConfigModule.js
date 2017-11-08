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

import ParameterUnit from './ParameterUnit'

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
  }
});


class ConfigModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

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
            <DialogTitle>{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
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
        <Divider />
        <div className="ConfigModuleContents">
          <ParameterUnit />
          <ParameterUnit />
        </div>

      </div>
    );
  }
}

ConfigModule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConfigModule);
