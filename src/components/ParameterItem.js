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
import ParameterTextInput from './ParameterTextInput';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: theme.spacing.unit,
    width: 600,
    marginLeft: '1em',
    display: 'flex',
    // flexWrap: 'wrap',
  }),
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    top: '0.5em',
    marginLeft: '2em',
    marginRight: theme.spacing.unit,
    width: 300,
  },
  selectField: {
    bottom: '0.5em',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '10em',
  },
  menu: {
    width: 200,
  },
  deleteButton: {
    top: '0.5em',
  },
});

const parameterTypes = [
  {
    value: 'Number',
    label: 'Number',
  },
  {
    value: 'String',
    label: 'String',
  },
  {
    value: 'Bool',
    label: 'Bool',
  },
];

class ParameterItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      name: '',
      type: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleType = this.handleType.bind(this);
  }

  componentWillMount() {
    this.setState({ name: this.props.parameter.text });
    // if (this.props.parameter.parameterType !== '') {
    //   this.setState({ type: this.props.parameter.parameterType });
    // }
  }

  handleClick() {
    // console.log('handleDoubleClick');
    // console.log(this.state.editing); // always false
    this.setState({ editing: true });
    // console.log(this.state.editing); // always false
    // e.preventDefault();
  }

  handleSave(id, text) {
    // console.log('handleSave');
    if (text.length === 0) {
      this.props.deleteParameter(id);
    } else {
      this.props.editParameter(id, text);
      // console.log(this.props.parameter);
    }
    this.setState({ editing: false });
  }

  handleType = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    // this.props.editParameterType(event.target.value);
  };

  render() {
    const { classes, parameter, completeParameter, deleteParameter }
     = this.props;
    let element;
    // console.log(this.state.editing); // true after this.setState({ editing: true });
    if (this.state.editing) {
      // console.log('input mode');
      element = (
        <ParameterTextInput
          text={parameter.text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(parameter.id, text)}
        />
      );
    } else {
      element = (
        <Paper className={classes.root} elevation={4}>
          <TextField

            labelClassName={classes.textField}
            InputClassName={classes.textField}
            value={parameter.text}
            onClick={this.handleClick}
            disabled={!this.state.edit}
            margin="normal"
          />
          <TextField
            id="select-type"
            select
            label="Type"
            className={classes.selectField}
            value={this.state.type}
            onChange={this.handleType('type')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            {parameterTypes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <IconButton
            className={classes.deleteButton}
            aria-label="Delete"
            onClick={() => deleteParameter(parameter.id)}
            >
            <ClearIcon />
          </IconButton>


        </Paper>
      );
      console.log(this.state);
    }
    return (
      <div>
      {element}
    </div>
    );
  }
}

// <form className={classes.container} noValidate autoComplete="off">
//
// </form>




ParameterItem.propTypes = {
  classes: PropTypes.object.isRequired,
  parameter: PropTypes.object.isRequired,
  editParameter: PropTypes.func.isRequired,
  deleteParameter: PropTypes.func.isRequired,
  completeParameter: PropTypes.func.isRequired
};

export default withStyles(styles)(ParameterItem);
