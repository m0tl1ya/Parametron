import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';

import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui-icons/Clear';
import Button from 'material-ui/Button';

import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: theme.spacing.unit,
    width: 600,
    marginLeft: '1em',
    display: 'flex',
    flexWrap: 'wrap',
  }),
  textField: {
    marginLeft: '2em',
    marginBottom: '0.9em',
    marginRight: theme.spacing.unit,
    width: 300,
  },
});


class ParameterTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleSubmit(e) {
    // console.log('handleSubmit');
    const text = e.target.value.trim();
    // console.log(text)
    if (e.which === 13) { // Enter key
      // console.log('SAVE')
      this.props.onSave(text);
      if (this.props.newParameter) {
        this.setState({ text: '' });
        // console.log(this.state.text.length);
        // e.preventDefault();
      }
    }
  }

  handleChange(e) {
    // console.log('handleChange');
    this.setState({ text: e.target.value });
  }

  handleBlur(e) { // in editing parameter
    // console.log('handleBlur');
    if (!this.props.newParameter) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        <TextField
          id="name"
          label="Name"
          className={
            classnames({
              edit: this.props.editing,
              'new-parameter': this.props.newParameter,
            })}
          value={this.state.text}
          labelClassName={classes.textField}
          InputClassName={classes.textField}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onKeyDown={this.handleSubmit}
          autoFocus="true"
          margin="normal"
        />

      </Paper>
    );
  }
}

ParameterTextInput.propTypes = {
  classes: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newParameter: PropTypes.bool
};

export default withStyles(styles)(ParameterTextInput);
