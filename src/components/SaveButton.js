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
import { Link } from 'react-router-dom';


const styles = theme => ({
  button: {
    top: '0.0em',
  },
});

class SaveButton extends React.Component {
  render() {
    const { classes } = this.props;
    let element;
    if (this.props.isNewModule) {
      element = (
        <Button
          raised
          color="primary"
          className={classes.button}
          onClick={this.handleSave}
        >
        Save
        </Button>
      );
    }
    return (
      { element }
    );
  }
}

SaveButton.propTypes = {
  classes: PropTypes.object.isRequired,
  isNewModule: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SaveButton);
