import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

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
    alignItems: 'center',
  }),
  textField: {
    width: '20em',
    marginLeft: '0.2em',
    // marginLeft: '2em',
    // marginBottom: '0.9em',
    marginRight: theme.spacing.unit,
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
  classes: PropTypes.objectOf.isRequired,
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  newParameter: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ParameterTextInput);
