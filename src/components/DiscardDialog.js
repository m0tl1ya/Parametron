import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui-icons/Clear';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class DiscardDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleRequestOpen = this.handleRequestOpen.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestOpen() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    // console.log('Dialig closed');
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <span>
        <IconButton
          aria-label="Delete"
          onClick={this.handleRequestOpen}
        >
          <ClearIcon />
        </IconButton>
        <Dialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
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
      </span>
    );
  }
}

DiscardDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default DiscardDialog;
